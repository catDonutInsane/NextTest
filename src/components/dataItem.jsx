"use client"
import Modal from "./modal";
import Link from "next/link";

export default function DataItem(data){
    console.log(data)
    const {geo_lat,geo_lon} = data.data.address.data
    function showModal(e){
        e.style.display = "flex"
    }
    return(
        <div>
            <p><b>Организация:</b> {data.value}</p> 
            <p><b>Основатель:</b> {data.data.management?.name}</p> 
            <p><b>ОГРН:</b> {data.data.ogrn}</p> 
            
            <p><b>Адресс:</b> <Link onClick={(e)=>showModal(e.currentTarget.nextElementSibling)} href="#">{data.data.address.value}</Link>
            <Modal glat={geo_lat} glon={geo_lon}></Modal>
            </p>
        </div>
    )
}