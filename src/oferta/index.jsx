import { useState } from "react";
import listarProdutos from "../components/ListarProdutos";
import ListarProdutos from "../components/ListarProdutos";
export default function oferta (){
    const [produtos,setProdutos] = useState([
        {
            nome:"Shape Marfim Preto Logo Amarelo",
            preço:"R$149,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/img-20230616-wa00041-2a45399bc23d03c89516869230755783-480-0.webp"
        },
        {
            nome:"Skate Iniciante Com Parceria WBlack",           
            preço:"R$199,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/mockup-skate-wood-light-wblack-3dd080e26bfd51290d17129292613230-480-0.webp"
        },
        {
            nome:"Camiseta Creature Logo Mini Preta G",
            preço:"R$139,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/02-creature-logo-mini1-2b1d0e58ad4010579116847817654024-480-0.webp"
        },
        {
            nome:"Lixa Importada Visible Emborrachada",
            preço:"R$34,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/lixa-visible-da092c81a47c9cd98917103558318633-480-0.webp"
        },
        {
            nome:"Camiseta Wood Light Creme Escrito",
            preço:"R$79,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/camiseta_off_white-8a0f3287688964c00c17174317473168-480-0.webp"
        },
        {
            nome:"Skate Profissional Completo On Fire Blue",
            preço:"R$599,99",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/skate-pro-kit-on-fire-blue1-8e0ca5a9a8ea03894c16797032456073-480-0.webp"
        },
        {
            nome:"Shape Maple Com Parceria Léo Novamente",
            preço:"R$199,90 ",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/pro-model-leo-novamente-2063cf6cd75171d01a17061943470567-480-0.webp"
        },
        {
            nome:"Rolamento de Skate Black Sheep Gold",
            preço:"R$69,90 ",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/rolamento-black-sheep-gold-90e828e7689ea49e4f17103570111367-480-0.webp"
        },
        {
            nome:"Mochila Black Sheep",
            preço:"R$199,00",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/mochila-black-sheep1-60df56934a6855c46316808066171500-480-0.webp"
        },
        {
            nome:"Roda de Skate Emex 53mm 55DB Green",
            preço:"R$119,90",
            imagem:"https://acdn.mitiendanube.com/stores/002/907/587/products/emex-wheel-53mm-55d-verde1-efa0e2ec08790ab05e16849407741183-480-0.gif"
        },

])
return(
    <div>
        <ListarProdutos listaProdutos={produtos}/>
    </div>
)
}