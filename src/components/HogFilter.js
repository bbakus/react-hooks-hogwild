import React, {useState} from "react";


function HogFilter({hogs, hogSort, greasy}){

    return(
        <div>
            <label>
            <input onChange={(e) => greasy(e.target.value)} type="checkbox"/>Show Greased
            </label>
            <select onChange={(e) => hogSort(e.target.value)} placeholder="Sort">
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    )

}

export default HogFilter;