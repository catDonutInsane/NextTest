import DataInn from "./data";

export default async function Info(props) {
      let data =await props.data(props.INN)
     
    return (
      <div>
        {data.suggestions.length!==0
        ?<div>
          <DataInn data={data}></DataInn>
        </div>
        :"По вашему запросу ничего не найдено"}
      </div>
    );
  }