"use server"

import Search from "@/components/search";
import Info from "@/components/info";

var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
var token = "36977bbf967522b6c6432483a0016eabbe5b8965"; 


let setOptions =(query,token)=>{
    return {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token 
        },
        body: JSON.stringify({query: query})
    }
}


 async function getData(inn) {
    
    const res = await fetch(url, setOptions(inn, token))   
  let data = await res.text()
  let result = JSON.parse(data)
  return result
    
  }

export default async function InnInfo(context) {
    let INN = context.params.inn
    return (
      <div class="infoPage" >
        <Search></Search>
        <Info data={getData} INN={INN}></Info>
      </div>
    );
  }