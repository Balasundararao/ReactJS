import React,{Component} from 'react';
import {LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area} from 'recharts';
import chroma from 'chroma-js';

export default function EvaluationChartComponent({jsonObject, confidenceInterval}){
    let temp = {}
    let tempInterval = {}
    let newJsonObject = []
    jsonObject.evaluations.map(
        x => (
            tempInterval = [x.prediction+(confidenceInterval*jsonObject.sdd),x.prediction-(confidenceInterval*jsonObject.sdd)],
            temp = {"timestamp":x.timestamp, "prediction":x.prediction, "data":x.data, "sdd":jsonObject.sdd, "confidenceBand":tempInterval, "confidenceBandHigh":x.prediction+(confidenceInterval*jsonObject.sdd), "confidenceBandLow":x.prediction-(confidenceInterval*jsonObject.sdd)},
            // console.log(temp),
            newJsonObject.push(temp)
        )
    )

    return(
        <div>
            <ResponsiveContainer width="100%" height={600} style={{padding:15}}>
                <ComposedChart data={newJsonObject}>
                    <YAxis/>
                    {/* <YAxis domain={['dataMin', 'dataMax']}/> */}
                    <Tooltip content={customTooltip}/>
                    <Legend/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Line stroke="blue" dataKey="data" dot={customDot}/>
                    <Line stroke="green" dataKey="prediction" dot={false}/>
                    {/* <Line stroke="red" dataKey="confidenceBandHigh"/>
                    <Line stroke="red" dataKey="confidenceBandLow"/> */}
                    <Area stroke="black" fill={chroma('green').alpha(0.1)} dataKey="confidenceBand"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )

    function customDot(props){
        console.log("customDot")
        // console.log(props)
        if(props.payload.data > props.payload.confidenceBandHigh || props.payload.data < props.payload.confidenceBandLow)
        {
            // console.log(`RED => ${props.payload.confidenceBandHigh} ${props.payload.data} ${props.payload.confidenceBandLow}`)
            return(
                <svg x={props.cx - 10} y={props.cy - 10} width={20} height={20} fill={chroma('red').alpha(0.3)} viewBox="0 0 1024 1024">
                    <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52"/>
                </svg>
            )
            
        }
    }

    function customTooltip(values){
        let valueTemp = values
        return(
            valueTemp.active===true && 
            <div className="card scroll">
                <div className="card-body" align="left">
                    <table>
                        <thead>
                            <tr><th className="header-with-bottom-border"><b><font size="1">{ valueTemp.payload[0].payload.timestamp }</font></b></th></tr>
                            <tr><th className="header-with-bottom-border"><b><font size="3" color="red">{confidenceInterval}σ</font></b></th></tr>
                        </thead>
                        <tbody>
                            <tr><td><b><font size="1" color="blue">Actual : { Number(valueTemp.payload[0].payload.data.toFixed(2)) }</font></b></td></tr>
                            <tr><td><b><font size="1" color="green">Predcition : { Number(valueTemp.payload[0].payload.prediction.toFixed(2)) }</font></b></td></tr>
                            <tr><td><b><font size="1" color="black">Conf. Band High : { Number(valueTemp.payload[0].payload.confidenceBandHigh.toFixed(2)) }</font></b></td></tr>
                            <tr><td><b><font size="1" color="black">Conf. Band Low : { Number(valueTemp.payload[0].payload.confidenceBandLow.toFixed(2)) }</font></b></td></tr>
                            <tr><td><i><font size="1">(σ) Standard dev : { Number(valueTemp.payload[0].payload.sdd.toFixed(2)) }</font></i></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    function customlegend(props){
        console.log("customlegend")
        console.log(props)
        return(
            <div>
                <span className="row">
                    <span className="col-sm-4" fill={props.payload[0].color}>
                        {props.payload[0].dataKey}
                    </span>
                    <span className="col-sm-4" fill={props.payload[0].color}>
                        {props.payload[1].dataKey}
                    </span>
                    <span className="col-sm-4" fill={props.payload[0].color}>
                        {props.payload[2].dataKey}
                    </span>
                </span>
            </div>
        )
    }

}