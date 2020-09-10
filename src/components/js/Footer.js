import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer py-4 __user__footer__color__change" id="footer">
                <div className="container">
                    <div className="row __user__footer__text__align__left">
                        <div className="col-lg-12 text-lg-left __user__footer__text__color__change">
                            주소 : (04563) 서울특별시 중구 청계천로 260-20 NH농협은행 평화지점 301호
                        </div>
                        <div className="col-lg-12 text-lg-left __user__footer__text__color__change">
                            대표이사 : 김진석
                        </div>
                        <div className="col-lg-12 text-lg-left __user__footer__text__color__change">
                            TEL : 02-2263-9160
                        </div>
                        <div className="col-lg-12 text-lg-left __user__footer__text__color__change">
                            FAX : 02-2263-9164
                        </div>
                        <div className="col-lg-12 text-lg-left __user__footer__text__color__change">
                            EMAIL : aceroad@kor-tex.com
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;