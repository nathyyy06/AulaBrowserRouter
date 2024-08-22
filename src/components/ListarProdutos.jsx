import { useState } from "react";
export default function ListarProdutos({listaProdutos}){
    return(
        <div>
            {listaProdutos.map((produto)=>
            <div>
                <p>{produto.nome}</p>
                <p>{produto.fragrância}</p>
                <p>{produto.cor}</p>
                <p>{produto.quantidade}</p>
                <p>{produto.categoria}</p>
                <p>{produto.preço}</p>
                <img src= {produto.imagem}/>
            </div>
            )} 
        </div>
    );
}