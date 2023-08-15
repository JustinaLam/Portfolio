import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
// import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
const imgs = [
    {
      original: '../../images/projectImages/PennBook/PennBook_1_Login',
    },
    {
      original: '../../images/projectImages/PennBook/PennBook_2_Home',
    },
    {
      original: '../../images/projectImages/PennBook/PennBook_3_Chat_Messages',
    },
];
  
// export default class Gallery extends Component {

const Gallery = ({imagesInfo}) => {
//   render() {
    return (
    <div id="carousel" style={{width: "58rem", height: "30rem", alignContent:"center"}}>
        <Carousel 
            plugins={[
                'centered',
                'infinite',
                'arrows'
                // {
                // resolve: arrowsPlugin,
                // options: {
                //   arrowLeft: <button><Icon name="arrow-left" /></button>,
                //   arrowLeftDisabled:<button><Icon name="arrow-left" /></button>,
                //   arrowRight: <button><Icon name="arrow-right" /></button>,
                //   arrowRightDisabled: <button><Icon name="arrow-right" /></button>,
                //   addArrowClickHandler: true,
                // }
                // }
            ]}
        >
            {
                imagesInfo.map(imageInfo => (
                    <img style={{width: "52rem", height: "30rem"}} src={imageInfo.img} alt={imageInfo.alt} />
                ))
            }
            
            {/* itemWidth={560} */}
            {/* <img style={{width: "52rem", height: "30rem"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/08544f6e-2cf7-41f1-b826-af2dc34ea46e'} alt="Login" />
            <img style={{width: "52rem", height: "30rem"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/96870bb6-71b7-4b12-a6de-4b997d7f0e31'} alt="Home" />
            <img style={{width: "52rem", height: "30rem"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/87509848-4394-4ee2-a872-5631703d61a4'} alt="Chat Messages Left" /> */}
            {/* <img style={{width: "44rem", height: "25rem"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/e6c214c7-cc24-4da1-9d69-e5f708bc0bad'} alt="Chat Messages Right" /> */}
            
            {/* <img style={{width: "35rem", height: "auto"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/f2eddc6f-a10c-4176-ad11-39134c3cb112'} alt="Invite Friend To Chat"/>
            <img style={{width: "35rem", height: "auto"}} src={'https://github.com/JustinaLam/Portfolio/assets/88551260/fb332b9f-805d-48b7-aab4-1483e3c64536'} alt="All Friends Invited To Chat"/> */}
        </Carousel>
    </div>
    );
//   }
}

export default Gallery;