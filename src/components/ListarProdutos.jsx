import { useState } from "react";
export default function ListarProdutos({listaProdutos}){
    return(
        <div>
            {listaProdutos.map((produto)=>
            <div>
                <p>{produto.nome}</p>
                <p>{produto.preço}</p>
                <p>{produto.modelo}</p>
                <p>{produto.tamanho}</p>
                <img src= {produto.imagem}/>
            </div>
            )} 
        </div>
    );
}