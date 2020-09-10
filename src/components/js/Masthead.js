import React from 'react';


class Masthead extends React.Component {

    _handleClick = () => {
		
		let __browser = "";
		const agent = navigator.userAgent.toLowerCase();
		if ( (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) {
			__browser = "IE";
		} else {
			__browser = "";
        }
        // console.log(__browser);


        if(window.document.getElementById("home") !== null && window.document.getElementById("products") !== null && 
            window.document.getElementById("contact") !== null && window.document.getElementById("companyinfo") !== null && 
            window.document.getElementById("footer") !== null) {
                
                const _homeHeight = window.document.getElementById("home").clientHeight;
                const _productHeight = window.document.getElementById("products").clientHeight;
                const _contactHeight = window.document.getElementById("contact").clientHeight;
                const _companyinfoHeight = window.document.getElementById("companyinfo").clientHeight;
                const _footerHeight = window.document.getElementById("footer").clientHeight;
                
                const _top = _homeHeight - (_productHeight + _contactHeight + _companyinfoHeight + _footerHeight);
                // window.scrollTo({ top: _top, behavior: 'smooth' });

                if(__browser === "IE") {
                    // window.document.documentElement.scroll().scrollTop(_top);
                    window.scrollTo(0, _top);
                } else {
                    window.scrollTo({ top: _top, behavior: 'smooth' });
                }
        }
    }

    render() {
        // const { _scrollTop } = this.props;
        return (
            <header className="masthead __user__masthead__min__height" id="masthead"
            style={{ background: `url(${process.env.PUBLIC_URL + '/img/KakaoTalk_20200907_110744110.jpg'})`}}>

                <div className="__user__masthead__div__opacity">
                    <div className="container">
                        <div className="masthead-subheading">&nbsp;</div>
                        <div className="masthead-heading text-uppercase __user__masthead__text__down">국내 생산 / 식약처 등록 / 마스크 B2B 판매</div>
                        <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger __user__masthead__btn__style" onClick={() => this._handleClick()}>제품 둘러보기</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Masthead;