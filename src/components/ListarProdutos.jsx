import { useState } from "react";
export default function ListarProdutos({listaProdutos}){
    return(
        <div className="container">
            {listaProdutos.map((produto)=>
            <div key={produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.fragrância}</p>
                <p>{produto.cor}</p>
                <p>{produto.quantidade}</p>
                <p>{produto.categoria}</p>
                <p>{produto.preço}</p>
                <img className="img" src={produto.imagem}/>
            </div>         
        
        )} 
        </div>
    );
}