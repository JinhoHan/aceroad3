import React from 'react';
import Slider from "react-slick";
// import { baseUrl } from "./config";

import SlideItem from './SlideItem';

// import '../utils/util.Map';

class LazyLoad extends React.Component {
    render() {

        const { _selectedProductItem } = this.props;
        const { detailImage } = _selectedProductItem;

        // https://programmer93.tistory.com/34
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            // 옆으로 이동하는 화살표 표시 여부
            arrows: true,
            //아래 나오는 페이지네이션(점) css class 지정
            dotsClass: "slick-dots",
            //드래그 가능 여부 
            draggable: true
        };

        // let _ieVersionLessThanTen = false;
        // const agent = navigator.userAgent.toLowerCase();
        // if(agent.indexOf("msie") !== -1) {
        //     // console.log(agent);
        //     _ieVersionLessThanTen = true;
        // }

        let slideList = null;
        slideList = detailImage.map (
            (item) => (
                <SlideItem
                    key={item.id}
                    item={item} />
            )
        )

        // if(_ieVersionLessThanTen === false) {
        //     slideList = detailImage.map (
        //         (item) => (
        //             <SlideItem
        //                 key={item.id}
        //                 item={item} />
        //     )
        // )
        // } else if(_ieVersionLessThanTen === true) {
        //     for(let nIdx = 0; nIdx < detailImage.length; nIdx++) {
        //         const item = detailImage[nIdx];
        //         console.log(item);
        //     }
        // }


        return (
            <div>
                <Slider {...settings}>
                    {slideList}
                </Slider>
            </div>
        );
    }
}

export default LazyLoad;