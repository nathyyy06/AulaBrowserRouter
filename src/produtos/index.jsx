import { useState } from "react";

export default function produtos(){
    const [produtos,setProdutos] = useState([
        {
            nome:"Base Sérum Nude Me Una",  
            cor:"10N",
            quantidade:"30 ml",
            categoria:"rosto",        
            preço:"R$ 154,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdf2c6642/Produtos/NATBRA-110181_1.jpg&w=384&q=60"
        },
        {
            nome:"Protetor Clareador FPS 70 Chronos",  
            cor:"claro medio",
            quantidade:"50 ml",
            categoria:"rosto",        
            preço:"R$ 91,50",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw65c6f306/NATBRA-89247_1.jpg&w=384&q=60"
        },
        {
            nome:"Corretivo Cobertura Extrema 24h Una",  
            cor:"10N",
            quantidade:"8 ml",
            categoria:"rosto",        
            preço:"R$ 56,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw701ab119/Produtos/NATBRA-122122_1.jpg&w=384&q=60",
        },
        {
            nome:"Batom Extremo Conforto FPS 25 Una",  
            cor:"N2",
            quantidade:"3,8 g",
            categoria:"boca",        
            preço:"R$ 45,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwdbeb9744/Produtos/NATBRA-17276_1.jpg&w=384&q=60"
        },
        {
            nome:"Gloss labial FPS 15 Una",  
            cor:"boca 100",
            quantidade:"8 ml",
            categoria:"boca",        
            preço:"R$ 47,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw65034b1f/Produtos/NATBRA-92603_1.jpg&w=384&q=60"
        },
        {
          nome:"Sérum Regenerador Progressivo para Cabelos Quimicamente Danificados Lumina",
          fragrância:"amora",
          quantidade:"100 ml",
          categoria:"cabelo",
          preço:"R$ 55,90",
          imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwa1b11465/NATBRA-148421_2.jpg&w=384&q=60",
        },
        {
            nome:"Máscara Regeneradora para Cabelos Quimicamente Danificados Lumina",
            fragrância:"amora",
            quantidade:"250 ml",
            categoria:"cabelo",
            preço:"R$ 53,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw269d2d91/NATBRA-148412_2.jpg&w=384&q=60",
          },
          {
            nome:"Sérum Noturno Antiqueda e Crescimento Lumina",
            fragrância:"camomila",
            quantidade:"100 ml",
            categoria:"cabelo",
            preço:"R$ 84,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwd65e50c6/NATBRA-147427_2.jpg&w=384&q=60",
          },
          {
            nome:"Condicionador Mamãe e Bebê",
            fragrância:"algodão",
            quantidade:"200 ml",
            categoria:"cabelo",
            preço:"R$ 33,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4576e85e/NATBRA-92793_1.jpg&w=384&q=60",
          },
          {
            nome:"Condicionador Fortificante Antiqueda e Crescimento Lumina",
            fragrância:"camomila",
            quantidade:"300 ml",
            categoria:"cabelo",
            preço:"R$ 51,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6ae2ceb0/NATBRA-147444_1.jpg&w=384&q=60",
          },
          {
            nome:"Body Splash Tododia",
            fragrância:"algodão",
            quantidade:"200 ml",
            categoria:"corpo",
            preço:"R$ 77,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw5176856a/NATBRA-72221_1.jpg&w=384&q=60",
          },
          {
            nome:"Body Splash Tododia",
            fragrância:"Cereja e Avelã ",
            quantidade:"200 ml",
            categoria:"corpo",
            preço:"R$ 59,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw0f155b37/NATBRA-95841_1.jpg&w=384&q=60",
          },
          {
            nome:"Body Splash Tododia ",
            fragrância:"Amora Vermelha e Jabuticaba ",
            quantidade:"200 ml",
            categoria:"corpo",
            preço:"R$ 77,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc79f52c2/NATBRA-88075_1.jpg&w=384&q=60",
          },
          {
            nome:"Body Splash Tododia ",
            fragrância:"Ameixa e Flor de Baunilha",
            quantidade:"200 ml",
            categoria:"corpo",
            preço:"R$ 77,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb420e84b/NATBRA-100679_1.jpg&w=384&q=60",
          },
          {
            nome:"Body Splash Tododia",
            fragrância:"Capim Limão e Hortelã",
            quantidade:"200 ml",
            categoria:"corpo",
            preço:"R$ 77,90",
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw6241ab73/NATBRA-109160_1.jpg&w=384&q=60",
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
)
}