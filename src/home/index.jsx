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
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.fashionnetwork.com%2Fnews%2FNatura-lanca-seu-programa-natura-startups-na-argentina%2C993250.html&psig=AOvVaw0Fjtp5PvD9FoHXFb7IANK8&ust=1724513793986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiBkdW4i4gDFQAAAAAdAAAAABAE"></img>
            </div>

            <div>
                <img src="https://www.natura.com.br/?page=3&&utm_content=na_amplo_amplo_a_nac_institucional_institucional_ambos_gen-1504-1205-diadasmaes-outlet-14-90_cpa&gad_source=1&gclid=CjwKCAjwoJa2BhBPEiwA0l0ImDBqP6cj_dqpGglFdtnJ9Nb3FDNcuBkUN5xSspcjB4n2EsRMKxLp7BoCG_QQAvD_BwE&gclsrc=aw.ds"></img>
            </div>

            <div>
                <img src="https://www.natura.com.br/?page=3&&utm_content=na_amplo_amplo_a_nac_institucional_institucional_ambos_gen-1504-1205-diadasmaes-outlet-14-90_cpa&gad_source=1&gclid=CjwKCAjwoJa2BhBPEiwA0l0ImDBqP6cj_dqpGglFdtnJ9Nb3FDNcuBkUN5xSspcjB4n2EsRMKxLp7BoCG_QQAvD_BwE&gclsrc=aw.ds"></img>
            </div>

            <div>
                <img src="https://www.natura.com.br/?page=3&&utm_content=na_amplo_amplo_a_nac_institucional_institucional_ambos_gen-1504-1205-diadasmaes-outlet-14-90_cpa&gad_source=1&gclid=CjwKCAjwoJa2BhBPEiwA0l0ImDBqP6cj_dqpGglFdtnJ9Nb3FDNcuBkUN5xSspcjB4n2EsRMKxLp7BoCG_QQAvD_BwE&gclsrc=aw.ds"></img>
            </div>

            <div>
                <img src="https://www.natura.com.br/?page=3&&utm_content=na_amplo_amplo_a_nac_institucional_institucional_ambos_gen-1504-1205-diadasmaes-outlet-14-90_cpa&gad_source=1&gclid=CjwKCAjwoJa2BhBPEiwA0l0ImDBqP6cj_dqpGglFdtnJ9Nb3FDNcuBkUN5xSspcjB4n2EsRMKxLp7BoCG_QQAvD_BwE&gclsrc=aw.ds"></img>
            </div>
        </Carousel>


        <div>
            <ListarProdutos listaProdutos={produtos}/>
        </div>

       
            
        </> 
    );  
}