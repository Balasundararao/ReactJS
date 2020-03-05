import React, {useState} from 'react';
import EvalutionFormComponent from './evalution_form.jsx';
import EvalutionListComponent from './evalution_list.jsx';
import EvaluationChartComponent from './EvaluationChartComponent.jsx';
import EvaluationGuidelineComponent from './EvaluationGuidelineComponent.jsx'


export default function AdHocEvaluationComponent() {
    const [showForm, setShowForm] = useState(0);
    const [showList, setShowList] = useState(false);
    const [showChart, setShowChart] = useState(false);

    return(
        <section className="adhoc_container" style={{"margin":"30px 15px "}}>
            <div className="row mar60">
                <div className="col" style={{margin:0, padding:0}}>
                    <div className="card text-center">
                        <div className="card-header">
                            <h1 className="card-title" style={{"font-size": "24px"}}>Evaluation</h1>
                            <p className="card-text">Please Click on the link ( <a href="#" id="show_form" onClick={ (evt) => {evt.preventDefault(); setShowForm( prev => prev == 0 ? 1 : 0 )}} >link</a> ) to add a new evaluation..</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row mar60">
                <aside className="col-6">
                    { showForm && <EvaluationGuidelineComponent/> }
                </aside>
            </div> */}
            <div className="row mar60">
                <aside style={{"width" : "100%"}}> 
                    { showForm == 1 &&  <EvalutionFormComponent showList={showList} setShowList={setShowList} /> }
                </aside>
            </div>
        </section>
    )
}