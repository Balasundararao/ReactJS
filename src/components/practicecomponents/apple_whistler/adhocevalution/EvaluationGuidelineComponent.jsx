import React,{Component} from 'react';
export default function EvaluationGuidelineComponent({complianceGuideline, setComplianceGuideline}){
    return(
        <div className="text-left text-muted small">
            <h5 className="topnav">Please make sure your file:</h5>
            <p><i>
                <br/>1. Has no more than 100 observations
                <br/>2. Minimum number of observation depends on the frequency of dataset
                <br/>[H] Hourly = No less than 48 observations
                <br/>[D] Daily = No less than 14 observations
                <br/>[W] Weekly = No less than 8 observations
                <br/>[M] Monthly = No less than 24 observations
                <br/>3. Should have atleast 2 columns.
                <br/>4. Should have atleast 1 date column with format YYYY-MM-DD [HH:MI:SS]
                <br/>5. Should have atleast 1 data column with numeric data only, no special characters or strings.
            </i></p>
        </div>
    )
}
