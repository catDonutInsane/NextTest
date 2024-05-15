"use client"

import DataItem from "./dataItem";
export default function DataInn ({data}) {
   
    return(
        <div class="infoWrapper">
            {data.suggestions.map(i=><DataItem {...i}></DataItem>)}
           
        </div>
    )
}