import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/header';
export default function Home(){ 
    const [produtos,setProdutos] = useState([
        {
            nome:"Shape Marfim Skate Lixos Grafite",           
            preço:"R$149,90",
            modelo:"tradicional",
            tamanho:"89 cm",

            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/skate-lixos-grafite1-0f432e34299c208c0316828853400196-480-0.webp"
        },
        {
            nome:"Shape Marfim Skate Lixos Tree",           
            preço:"R$149,90",
            modelo:"tradicional",
            tamanho:"89 cm",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/skate-lixos-tree1-7476ac0d0009345c8016828860075058-480-0.webp"
        },
        {
            nome:"Skate Completo Street Art Bora",           
            preço:"R$199,90",
            modelo:"tradicional",
            tamanho:"89 cm",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/bora1-20462f4da48384f56616935083855555-480-0.webp"
        },
        {
            nome:"Shape Marfim Básico Preto",           
            preço:" R$149,90",
            modelo:"tradicional",
            tamanho:"89 cm",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/basic-preto1-faf48360fcbafd957516878076061713-480-0.webp"
        },
        {
            nome:"Shape Wood Light Old School Shark Chave",           
            preço:"R$259,90",
            modelo:"tradicional",
            tamanho:"89 cm",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/img-20230616-wa00021-774671b0622b22089f16869233270289-480-0.webp"
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
              <img src="https://acdn.mitiendanube.com/stores/002/907/587/themes/amazonas/2-slide-1713041368565-2645170268-59ed7a18c4fe5ea4cd3c13db5ce751d51713041353-1920-1920.webp?2022307674"></img>
            </div>

            <div>
                <img src="https://acdn.mitiendanube.com/stores/002/907/587/themes/amazonas/1-slide-1684518683347-3954613135-2d57cdae14f1b5d29efe4a08874b835b1684518687-1920-1920.webp?2022307674"></img>
            </div>

            <div>
                <img src="https://acdn.mitiendanube.com/stores/002/907/587/themes/amazonas/2-slide-1713041686571-998479141-31c6bca2fab2922f3e6f32eaeed0e5e01713041671-1920-1920.webp?2022307674"/>
            </div>
        </Carousel>

        <div>
            <ListarProdutos listaProdutos={produtos}/>
        </div>
        </> 
    )   
}