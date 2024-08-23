import { useState } from "react";
export default function ListarProdutos({listaProdutos}){
    return(
        <div className="container">
            {listaProdutos.map((produto)=>
            <div key={produto.id}>
                <img className="img" src={produto.imagem}/>
                <p>{produto.nome}</p>
                <p>{produto.preço}</p>
            </div>         
        
        )} 
        </div>
    );
}