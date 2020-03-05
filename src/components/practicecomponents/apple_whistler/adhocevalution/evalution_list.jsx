import React from 'react'
export default function EvalutionListComponent() {
    const items = 
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map( (item) =>

        <tr key={item}>
            <td>Cooumn {item}</td>
            <td><input type="checkbox"/></td>
            <td><input type="checkbox"/></td>
        </tr>
        );
        
    return(
        <div>
            <h5>Evalution List </h5>

            <table className="table table-sm">
                <thead>
                    <td>List of Columns</td>
                    <td>Date</td>
                    <td>Value</td>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            <button className="btn btn-primary">Evaluate</button>
        </div>  
    )
}


