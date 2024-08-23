import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/header'
import '../globals.css'
import ListarProdutos from '../components/ListarProdutos';
export default function Home(){ 
    const [produtos,setProdutos] = useState([
        {
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw37911b14/NATBRA-151028_2.jpg&w=384&q=60",
            nome:" Eau de Parfum Natura 505 íris Priprioca", 
            fragrância:["Floral","amadeirado"],          
            quantidade:"50 ml",
            categoria:"corpo",
            preço:"R$ 370,00",
            
        },
        {
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwde98b09b/Produtos/NATBRA-139038_2.jpg&w=384&q=60",
            nome:"Perfume em Óleo Natura 379 Benjoim Cumaru ", 
            fragrância:["Adocicado", "amadeirado"],          
            quantidade:"15 ml",
            categoria:"corpo",
            preço:"R$ 185,00"
        },
        { 
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw1c3b1f02/NATBRA-76423_2.jpg&w=384&q=60",
            nome:"Essencial Exclusivo Feminino ", 
            fragrância:["Floral intenso","Laranjeira"],          
            quantidade:"100 ml",
            categoria:"corpo",
            preço:"R$ 259,90"
        },
        {
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw11ab9e28/NATBRA-133865_2.jpg&w=384&q=60",
            nome:" Ekos Ryo Vivo", 
            fragrância:["Floral aquoso"," moderado"],          
            quantidade:"75 ml",
            categoria:"corpo",
            preço:"R$ 134,90"
          
        },
        {
            imagem:"https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4c67fc89/NATBRA-128756_2.jpg&w=384&q=60",
            nome:"Una Blush", 
            fragrância:["Adocicado", "floral intenso"],          
            quantidade:"75 ml",
            categoria:"corpo",
            preço:"R$ 175,90"
        },
    ])
    return(
        <>
        <Header/>
        <Carousel
        infiniteloop
        usekeyboardArrows
        autoplay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        >
            <div>
              <img className='imgcar' src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dw1fa25368/Home%20NE/12-08-2024/desk_categoria_Ekos-Ryo-Vivo_02.jpg&w=3840&q=70"></img>
            </div>

            <div>
                <img className='imgcar' src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dw71f1a64b/Home%20NE/12-08-2024/desk_categoria_Ekos%20Ryo%20Chuva_01_2.jpg&w=3840&q=70"></img>
            </div>

            <div>
                <img className='imgcar' src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwcf0f1aa5/Home%20NE/12-08-2024/desk_categoria_perfumaria_03.jpg&w=3840&q=70"></img>
            </div>

            <div>
                <img className='imgcar' src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwa8ebcaa7/Internas/2024/Ciclo%2013/ekos-ague-castanha-01-desk.jpg&w=3840&q=70"></img>
            </div>

            <div>
                <img className='imgcar' src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dw997315cc/Categorias/NE%20Ekos%20Castanha/ekos-ague-castanha-02-desk.jpg&w=3840&q=70"></img>
            </div>
        </Carousel>


        <div>
            <ListarProdutos listaProdutos={produtos}/>
        </div>

       
            
        </> 
    );  
}