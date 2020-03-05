import React,{useState, useRef} from 'react';
import CSVReader from "react-csv-reader";
import moment from 'moment';
import {toast} from 'react-toastify'
import EvaluationChartComponent from './EvaluationChartComponent.jsx';
import AnomalyService from '../../../../api/AnomalyService';
import EvaluationGuidelineComponent from './EvaluationGuidelineComponent.jsx'

export default function EvalutionFormComponent({showList, setShowList}) {
    
    const initalValues = {
        evFld1: '',
        evFld2: '',
        evFld3: '',
        evFile: '',
        btnDisabled: false,
        err: false,
        errMsg: '',
        successMsg: '',
        csvKeys: [],
        csvData: [],
        jsonObject: undefined,
        btnDisabled: false,
        confidenceInterval: 3,
        frequencyOptions: [{id:'D',name:'Daily'},{id:'W',name:'Weekly'},{id:'M',name:'Monthly'},{id:'H',name:'Hourly'}]
    };

    const initialCompliance = {
        numRowsLessThan100: null,
        minHourlyRows: null,
        minDailyRows: null,
        minWeeklyRows: null,
        minMonthlyRows: null,
        atLeast2Cols: null,
        atLeast1DateCol: null,
        atLeast1DataCol: null
    }

    let debug = false;
    let data_pattern = new RegExp('^\\d+$');
    var date_pattern = new RegExp("^(19|20)[0-9]{2}[\/\-](0[1-9]|1[012])|([a-zA-Z]{3})[\/\-](0[1-9]|[12][0-9]|3[01])(T|\s)(([0-1][0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])$");
    const [formData, setFormData] = useState(initalValues);
    const [complianceGuideline, setComplianceGuideline] = useState(initialCompliance)
    const jsonObj={};
    let errEvMsg = "";
    let errFlag = false;


    // HandleUpload Btn Click....
    const handleUploadClick = (evt) => {
        //.log(evFld1, evFld2, evFld3, evFile)
        evt.preventDefault();
        const {evFld1, evFld2, evFld3, evFile} = formData;
        let timeSeriesData = [];

        // validating data is proper 
        formData.csvData.map( (x,index )=> {
            let tstamp = (new Date(x[evFld1]));
            let data_item  = x[evFld2];
            if( (tstamp.getTime() > 0 &&  date_pattern.test(x[evFld1]) === true  )  && (data_pattern.test(data_item) === true) ) {
                let datee = moment( tstamp.toLocaleDateString() ).format("YYYY-MM-DD HH:mm:ss");
                let data = {
                    "timestamp": datee,
                    "value": x[evFld2]
                }
                return timeSeriesData.push(data);
            } else {
                setFormData({ ...formData, err: true});
            }
        });  // end of map function....

        jsonObj["timeseriesdata"] = timeSeriesData;
        jsonObj["frequency"] = evFld3;
        console.log( jsonObj );       
        const whistlerAdhocEvalList = JSON.stringify(jsonObj)

        AnomalyService.postAdhocEvaluationJsonExternal(whistlerAdhocEvalList)
        .then(response => {
            //setFormData({...formData, jsonObject: response.data})
            setFormData( prevFormData => ({...prevFormData,  jsonObject: response.data, successMsg:"", evFile: ''}));
            document.querySelector('.csv-input').value = ''
        })
        .then(console.log(formData))
        .catch()

        setFormData( {...initalValues, frequencyOptions: [], successMsg: 'Evaluating your data now...' });// resetting the state after submit....
        //console.log(formData.evFld1, formData.evFld2, formData.evFld3, formData.evFile)

    }
    
    function countRepeated(arr) {
       return  arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
    }

    // File Upload Event....
    const handleForce = (data, fileName) => {
        let errHFMsg = "";
        setFormData( prevState => initalValues);
        if(debug) { console.log( "HandleForce after Initial :: " + JSON.stringify(formData)); }
        let fields =  {"datafield":0, "datefield":0}; 
        const column_length = 2;
        const columns = Object.keys(data[0]);
        const data_values = Object.values(data[1]);
        data_values.reduce( (acc, val) => {
            if( (data_pattern.test(val) === true)  ) {
                fields["datafield"]++;
            }else if( val &&  ((new Date(val)).getTime() > 0)) {
                fields["datefield"]++;
            }
            return acc;
        },fields)
        
        if( fields["datefield"] < 1  )  {
            errEvMsg = `Timestamp keys are missing or Wrong format`;
            errFlag = true;
            // setComplianceGuideline(prevComplianceGuideline => ({...prevComplianceGuideline, atLeast1DateCol:false}))
        } else if (fields["datafield"] < 1 ) {
            errEvMsg = `Data keys are missing or Non-numeric`;
             errFlag = true;
            //  setComplianceGuideline(prevComplianceGuideline => ({...prevComplianceGuideline, atLeast1DataCol:false}))
        } else if( data.length < 8  ){ //data length  more than 100....
            errEvMsg = `Minimum number of observations are missing`;
            errFlag = true;
        } else if( data.length > 100  ){ //data length  more than 100....
            errEvMsg = `Maximum number of observations reached`;
            errFlag = true;
            // setComplianceGuideline(prevComplianceGuideline => ({...prevComplianceGuideline, numRowsLessThan100:false}))
        }
        let keys = (errFlag == true ) ? [] : Object.keys(data[0]);
        setFormData( prevFormData => ({...prevFormData, err: errFlag, errMsg: errEvMsg, evFile: fileName, csvData: data, csvKeys:keys }));
        if(debug) { console.log( "Valid Data :: " + JSON.stringify(formData)); }
    } 
    
    // Util Functions for ...
    const validateDate = (key) => {
        const {csvData} = formData;
        const filteredData = validateFields( formData.csvData, key, date_pattern, formData.evFile );
        if(debug) { console.log( "validateDate FilteredData :: " + filteredData.length); }
        if( filteredData.length > 0) {
            errEvMsg = `Timestamp keys are missing or wrong format`;
            errFlag = true;
        } 
        let fld1 = ( errFlag == true ) ? "" : key;
        setFormData( prevFormData => ({...prevFormData,  evFld1:fld1 , evFld2:'', evFld3:'', err:errFlag,  errMsg: errEvMsg}));
        if(debug) { console.log( "After validateDate :: " + JSON.stringify(formData)); }
    }

    const validateData = (key) => {
        const filteredData =  validateFields( formData.csvData, key, data_pattern, formData.evFile );
        if(debug) { console.log( "validateData FilteredData :: " + filteredData.length); }
        if( filteredData.length > 0) {
            errEvMsg = `Data Keys are missing or Non-numeric`;
            errFlag = true;
        } 
        let fld2 = ( errFlag == true ) ? "" : key;
        setFormData( prevFormData => ({...prevFormData, evFld2:fld2, evFld3:'', errMsg: errEvMsg, err:errFlag }));
        if(debug) { console.log( "After validateData :: " + JSON.stringify(formData)); }
    }

    const validateFrequency = (frequencyValue) => {
        const {csvData} = formData;
        if( frequencyValue === "H" && csvData.length < 48 ) {
            errEvMsg =`Minimum observations are missing for frequency ${frequencyValue}`;
            errFlag = true;
        } else if ( frequencyValue === "M" && csvData.length < 24 ) {
            errEvMsg = `Minimum observations are missing for frequency ${frequencyValue}`;
            errFlag = true;
        }
        else if ( frequencyValue === "D" && csvData.length < 14 ) {
            errEvMsg = `Minimum observations are missing for frequency ${frequencyValue} `;
            errFlag = true;
        } else if ( frequencyValue === "W" && csvData.length < 8 ) {
            errEvMsg = `Minimum observations are missing for frequency ${frequencyValue} `;
            errFlag = true;
        }             
        if(debug) { console.log( "Frequency TRUE :: " + frequencyValue); }
        let fld3 = ( errFlag == true ) ? "" : frequencyValue;
        setFormData( prevFormData => ({...prevFormData, evFld3:fld3,  errMsg: errEvMsg, err:errFlag}));
        if(debug) { console.log( "Error validateDate :: " + JSON.stringify(formData)); }
    }

    const validateFields=( arr, fldName, pattern,evFile ) => {
        return arr.filter( (x) => pattern.test(x[fldName]) !== true  );  // end of map function....
    }

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.replace(/\W/g, " ")
    };

    return (
        <div>
            <EvaluationGuidelineComponent complianceGuideline={complianceGuideline}/>
            <div className="support reset mar60" style={{padding:0}}>
                <div className="card">
                    <div className="card-header text-left">
                        <h5 className="card-title reset">New Evaluation..</h5>
                    </div>
                    <div className="card-body">
                        <form method="post"> 
                            <div className="form-row"> 
                                {/* file type */}
                                <div className="form-group" style={{"width": "100%"}}>
                                    <CSVReader cssclassName="react-csv-input" label="Select Valid CSV File" onFileLoaded={handleForce} parserOptions={papaparseOptions} />
                                </div>
                                {/* Error Message */}
                                <div className="form-group">
                                    <span className="error">{formData.errMsg}</span> 
                                    <span className="success">{formData.successMsg}</span> 
                                </div>

                                {/* evaluation Time */}
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="evFld1">Select timestamp key</label>
                                        <select className="form-control" id="evFld1" name="evFld1" onChange={(evt)=>{ validateDate(evt.target.value);} }> 
                                        <option value="">Select timestamp key</option>
                                        { formData &&  formData.csvKeys.map( value =>
                                            <option key={value} value={value}>{value}</option> )
                                        }
                                        </select>
                                    </div>
                                </div>

                                {/* evaluation Data */}
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="evFld2">Select data key</label>
                                        <select className="form-control" id="evFld2" name="evFld2" onChange={(evt)=> {validateData(evt.target.value);}}> 
                                        <option value="">Select data key</option>
                                        { formData.csvKeys.filter( val => val!= formData.evFld1 ).map( value =>
                                            <option key={value} value={value}>{value}</option> )
                                        }
                                        </select>
                                    </div>
                                </div>

                                {/* disabled={ (formData.evFld1=="" || formData.evFld2==="") } */}
                                {/* Frequency Data.. */}
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="evFld3">Select frequency</label>
                                        <select className="form-control" id="evFld3" name="evFld3" onChange={(evt)=> {validateFrequency(evt.target.value);}}> 
                                            <option value="">Select frequency</option>
                                            {
                                                formData.frequencyOptions.map( (val) =>  <option key={val.id} value={val.id}>{val.name}</option> )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row" style={{padding: 15}}>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary" onClick={handleUploadClick} 
                                    disabled={ formData.evFld1=="" || formData.evFld2===""  || formData.evFld3==="" || formData.err === true }>Evaluate Data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {formData.jsonObject!==undefined && <div>
                    <div className="card mar60">
                        <div className="card-header text-left">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="card-title reset">This is how your data looks</h5>
                                </div>
                                <div className="col-sm-6" align="right">
                                    <div className="btn-group">
                                        {formData.confidenceInterval===1 && <button type="button" className="btn btn-primary" style={{padding:5}}>1σ</button>}
                                        {formData.confidenceInterval!==1 && <button type="button" className="btn btn-outline-primary" onClick={()=>changeConfidenceInterval(1)} style={{padding:5}}>1σ</button>}

                                        {formData.confidenceInterval===2 && <button type="button" className="btn btn-primary" style={{padding:5}}>2σ</button>}
                                        {formData.confidenceInterval!==2 && <button type="button" className="btn btn-outline-primary" onClick={()=>changeConfidenceInterval(2)} style={{padding:5}}>2σ</button>}

                                        {formData.confidenceInterval===3 && <button type="button" className="btn btn-primary" style={{padding:5}}>3σ</button>}
                                        {formData.confidenceInterval!==3 && <button type="button" className="btn btn-outline-primary" onClick={()=>changeConfidenceInterval(3)} style={{padding:5}}>3σ</button>}

                                        {formData.confidenceInterval===4 && <button type="button" className="btn btn-primary" style={{padding:5}}>4σ</button>}
                                        {formData.confidenceInterval!==4 && <button type="button" className="btn btn-outline-primary" onClick={()=>changeConfidenceInterval(4)} style={{padding:5}}>4σ</button>}

                                        {formData.confidenceInterval===5 && <button type="button" className="btn btn-primary" style={{padding:5}}>5σ</button>}
                                        {formData.confidenceInterval!==5 && <button type="button" className="btn btn-outline-primary" onClick={()=>changeConfidenceInterval(5)} style={{padding:5}}>5σ</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body" align="center">
                            {formData.jsonObject!==undefined && <EvaluationChartComponent jsonObject={formData.jsonObject} confidenceInterval={formData.confidenceInterval}/>}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )

    function changeConfidenceInterval(a){
        setFormData( prevFormData => ({...prevFormData, confidenceInterval: a}));
    }

}