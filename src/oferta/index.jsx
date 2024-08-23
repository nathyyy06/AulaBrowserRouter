import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";
export default function oferta (){
    const [produtos,setProdutos] = useState([
        {
            nome:"Gloss labial FPS 15 Una",
            cor:["Vermelho","Otima pigmentação"],
            quantidade:"100g",
            categoria:"boca",
            preço:"R$ 47,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcdef7b5f/Produtos/NATBRA-92604_1.jpg&w=384&q=60",
        
        },
       { 
            nome:"Kit Sabonetes em Barra Tododia 4 caixas com ",  
            fragrância:["framboesa","Pimenta rosa"],  
            quantidade:"5 un", 
            categoria:"corpo",     
            preço:"R$ 103,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/mockup-skate-wood-light-wblack-3dd080e26bfd51290d17129292613230-480-0.webp"
        },
        { 
            nome:" Kit Tododia Todanoite ",  
            fragrância:["Chá de Camomila","Lavanda"],  
            quantidade:"400ml", 
            categoria:"corpo",     
            preço:"R$ 75,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1c0dc632/NATBRA-168620_1.jpg&w=384&q=60"
        },
        { 
            nome:"Desodorante Antitranspirante Roll-on Tododia Aclarar ",  
            fragrância:["algodão","Suave"],  
            quantidade:"70ml", 
            categoria:"corpo",     
            preço:"R$ 27,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1641fc4/NATBRA-123131_1.jpg&w=384&q=60 "
        },
        { 
            nome:"Essencial Exclusivo Floral Feminino",  
            fragrância:["flores brancas","Suave"],  
            quantidade:"100 ml", 
            categoria:"corpo",     
            preço:"R$ 154,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw3dce3a82/NATBRA-95575_1.jpg&w=384&q=60 "
        },
        { 
            nome:"Una Infinito",  
            fragrância:["Adocicado","Intenso"],  
            quantidade:"75 ml", 
            categoria:"corpo",     
            preço:"R$ 175,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw244a87b7/NATBRA-43135_1.jpg&w=384&q=60 "
        },
        { 
            nome:"Natura Homem Sagaz",  
            fragrância:["amadeirada","Ousada"],  
            quantidade:"100 ml", 
            categoria:"corpo",     
            preço:"R$ 129,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw49802d41/Produtos/NATBRA-81951_1.jpg&w=384&q=60 "
        },
        { 
            nome:"Kaiak Masculino",  
            fragrância:["Aromático Aquoso","Moderado"],  
            quantidade:"100 ml", 
            categoria:"corpo",     
            preço:"R$ 102,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb6f9a7cf/NATBRA-108400_2.jpg&w=384&q=60 "
        },
        { 
            nome:"Kit Óleo Desodorante Corporal Sève",  
            fragrância:["Amêndoas", "Flor de Ameixa"],  
            quantidade:"200 ml", 
            categoria:"corpo",     
            preço:"R$ 105,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw981051a9/NATBRA-174578_1.jpg&w=384&q=60 "
        },
        { 
            nome:"Luna 10 anos",  
            fragrância:["frutal moderado","Ousado"],  
            quantidade:"75 ml", 
            categoria:"corpo",     
            preço:"R$ 169,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw8c06be13/NATBRA-150218_2.jpg&w=384&q=60 "
        },
])

return(
    <div>
        <ListarProdutos listaProdutos={produtos}/>
    </div>,
    
 <div className="image-container">
 {produtos.map((produto, index) => (
     <img
         key={index}
         src={produto.imagem}
         alt={produto.nome}
     />
 ))}
</div>

);

}