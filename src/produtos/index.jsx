import { useState } from "react";

export default function produtos(){
    const [produtos,setProdutos] = useState([
        {
            nome:"",           
            preço:"",
            imagem:""
        },
  ])
  return(
    <div>
        <ListarProdutos listaProdutos={produtos}/>
    </div>
)
}