import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Home(){ 
    return(
        <>
        <Carousel
        infiniteloop
        usekeyboardArrows
        autoplay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        >
            <div>
              <img src="https://akamai.sscdn.co/uploadfile/letras/playlists/5/2/7/d/527d3417f4804323bb53e90225a31f51.jpg"/>
            </div>

            <div>
                <img rsc="https://cdn.prod.website-files.com/645fd73ea27e05d9aa9a6e0b/66946e87366340996cd26168_MontellFish_2024_Vancouver_Facebook_1920x1005_EventHeader01%20(1).jpg"/>
            </div>

            <div>
                <img rsc="https://i.pinimg.com/736x/e5/b8/51/e5b851fbc8e5a86a9d2be09cdcffe0ca.jpg"/>
            </div>
        </Carousel>
        </>
    )
}