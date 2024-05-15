"use client"

import Link from "next/link"
export default function Modal ({glat, glon}){
    function decline(e){
        e.parentElement.parentElement.style.display = "none"
    }
    return(
        <div class="modal-wrapper" >
            <div class="modal-wrapper_content" >
                <span style={{color:"black"}}>Вы действительно хотите перейти на внешний ресурс?</span>
                <div class="modal-wrapper_buttons" >
                    <button class="btn" onClick={(e)=>decline(e.currentTarget.parentElement)}>Отказаться</button>
                    <Link href={`https://yandex.ru/maps/?pt=${glon},${glat}&z=16&l=map`}>
                        <button class="btn"> Перейти</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}