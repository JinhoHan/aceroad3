/*global kakao*/
import React from 'react';


class Services extends React.Component {

    componentDidMount() {
        this.getKakaoMapMarkers();
    }

    getKakaoMapMarkers = () => {

        /*
         *      지도 생성
         */
        // ===================================================================
        const lat = "37.5686149";
        const lng = "127.0062571";
        // const name = "(주)에이스로드";
        const mapContainer = document.getElementById("company__map");

        let mapOption = {
            // 지도 중심좌표
            center: new kakao.maps.LatLng(lat, lng),
            // 지도 확대 레벨
            level: 4
        }
        // 지도 생성
        const map = new kakao.maps.Map(mapContainer, mapOption);
        // ===================================================================

        /*
         *      중심 좌표에 커스텀 마커 이미지 생성 및 마커 출력
         */
        // ===================================================================
        // 중심 좌표 마커가 표시될 위치
        const markerPosition = new kakao.maps.LatLng(lat, lng);
        // 마커 이미지의 주소
        const centerImageUrl = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
        // 마커 이미지의 크기
        const centerImageSize = new kakao.maps.Size(40, 44);
        // 마커 이미지의 옵션 > 마커의 좌표와 일치시킬 이미지 안에서의 좌표 설정
        // const centerImageOption = {
        //     // offset: new kakao.maps.Point(27, 69)
        //     offset: new kakao.maps.Point(10, 10)
        // }
        const centerImageOption = null;

        // 마커 이미지 정보로 마커 이미지 객체 생성
        const centerMarkerImage = new kakao.maps.MarkerImage(centerImageUrl, centerImageSize, centerImageOption);

        // 마커 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            image: centerMarkerImage
        });

        // 지도 위에 마커 표시
        marker.setMap(map);
        // ===================================================================
        



        /*
         *      커스텀 오버레이에 표출될 내용(HTML 문자열이나 document element 사용) 작성 및 생성
         */
        // ===================================================================================================
        // let content = document.createElement("div");
        // content.className = "user__custom__overlay";

        // const kakaoMapCallAddr = name + "," + lat + "," + lng;
        // let html = '';
        // html += '<a href="https://map.kakao.com/link/map/' + kakaoMapCallAddr + '" target="_blank">';
        // html += '<span className="__user__overlay__title">' + name + '</span>';
        // html += '</a>';

        // content.innerHTML = html;

        // // 커스텀 오버레이가 표시될 위치
        // const overlayPosition = marker.getPosition();

        // // 커스텀 오버레이 생성
        // new kakao.maps.CustomOverlay({
        //     map: map,
        //     position: overlayPosition,
        //     content: content,
        //     yAnchor: 0.3
        // });
        // ===================================================================================================

    }
s
    render() {
        return (
            <section className="page-section" id="companyinfo">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase __user__section__head__text__css">회사정보</h2>
                    </div>
                    <div className="row justify-content-center __user__company__info__and__location">
                        <div id="company__map" className="__user__kakao__map__company"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="__user__company__address">
                                <p className="__user__p__subtitle"><span className="__user__p__subtitle__span">주소</span></p>
                                <div className="__usesr__p__contact__info">
                                    <p>
                                        <span><b>회사명</b>(주)에이스로드</span>
                                        <span><b>담당자</b>김광빈</span>
                                        <span><b>주소</b>(04563) 서울특별시 중구 청계천로 260-20 NH농협은행 평화지점 301호</span>
                                    </p>
                                </div>
                                <div className="__usesr__p__company__break__info">
                                    <p>
                                        ※ 별도의 주차공간이 마련되어 있지 않아 차량을 가져오실 경우 근처 유료 주차장을 이용부탁드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="__user__company__contact">
                                <p className="__user__p__subtitle right"><span translate="" className="__user__p__subtitle__span">연락처</span></p>
                                <div className="__usesr__p__contact__info">
                                    <p>
                                        <span><b>TEL</b>02-2263-9160</span>
                                        <span><b>FAX </b>02-2263-9164</span>
                                        <span><b translate="">EMAIL</b>aceroad@kor-tex.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;