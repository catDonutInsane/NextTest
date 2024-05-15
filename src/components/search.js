"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const router = useRouter()
    const [inn, setInn] = useState('')
    const inputHandler = (e)=>{
        if(e.match(/^\d*$/g)){
            setInn(e)
        }else{
            return
        }
        
        
    }
    return (
      <div class="searchBar">
        <input onKeyDown={(e)=>{
          if(e.key==='Enter'){
            router.push(`/info/${inn}`)
          
          }}
      } 
       placeholder="Введите ИНН" type="text" onChange={(e)=>inputHandler(e.currentTarget.value)} value={inn} required></input>
       <button class="searchButton" onClick={()=>router.push(`/info/${inn}`)}>Search</button>
      </div>
    );
  }