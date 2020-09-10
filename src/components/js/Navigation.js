import React, { useState } from 'react';


// class Navigation extends React.Component {
const Navigation = ({ _scrollTop }) => {
    
    /*
     *      Collapse Open&Close
     */
    /***************************************************************************************************************************/
    let [__collapse, setCollapse] = useState(false);
    const collapseToggle = () => {
        setCollapse(!__collapse);
    }
    /***************************************************************************************************************************/



    /*
     *      스크롤에 따른 Navbar Link addClass -> active
     */
    /***************************************************************************************************************************/
    let _homeHeight = 0;
    let _mastheadHeight = 0;
    let _productHeight = 0;
    let _contactHeight = 0;
    let _companyinfoHeight = 0;
    let _footerHeight = 0;

    let __navbarShrinkHeight = 105;
    let __productStartActiveHeight = null;
    let __productEndActiveHeight = null;
    let __contactEndActiveHeight = null;
    let __companyEndActiveHeight = null;
    
    if(window.document.getElementById("home") !== null && window.document.getElementById("products") !== null && 
        window.document.getElementById("contact") !== null && window.document.getElementById("companyinfo") !== null && 
        window.document.getElementById("footer") !== null) {
            
            _homeHeight = window.document.getElementById("home").clientHeight;
            _mastheadHeight = window.document.getElementById("masthead").clientHeight;
            _productHeight = window.document.getElementById("products").clientHeight;
            _contactHeight = window.document.getElementById("contact").clientHeight;
            _companyinfoHeight = window.document.getElementById("companyinfo").clientHeight;
            _footerHeight = window.document.getElementById("footer").clientHeight;
            
            __productStartActiveHeight = _mastheadHeight - 40;
            __productEndActiveHeight = __productStartActiveHeight + _productHeight;
            __contactEndActiveHeight = __productEndActiveHeight + _contactHeight;
            __companyEndActiveHeight = __contactEndActiveHeight + _companyinfoHeight;
    }
    /***************************************************************************************************************************/

    

    /*
     *      스크롤에 따른 Navbar Link addClass -> active
     */
    // /***************************************************************************************************************************/
    // let [__activeLi, setActiveLi] = useState("home");
    const handleActiveLi = (target) => {
        
        /*
            참조 >>> https://ooz.co.kr/67

            IE Version  navigator.appName
            7           Microsoft Internet Explorer
            8           Microsoft Internet Explorer
            9           Microsoft Internet Explorer
            10          Microsoft Internet Explorer
            11          Netscape

            >>> (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)
            -> 현재 브라우저가 IE 11 버전인 경우에 해당
            
            >>> (agent.indexOf("msie") != -1)
            -> 현재 브라우저가 IE 10 버전 이하인 경우에 해당
        */

		let __browser = "";
		const agent = navigator.userAgent.toLowerCase();
		if ( (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) {
			__browser = "IE";
		} else {
			__browser = "";
        }
        // console.log(__browser);


        // console.log(target);
        // console.log("_homeHeight >>> " + _homeHeight);
        // console.log("_mastheadHeight >>> " + _mastheadHeight);
        // console.log("_productHeight >>> " + _productHeight);
        // console.log("_contactHeight >>> " + _contactHeight);
        // console.log("_companyinfoHeight >>> " + _companyinfoHeight);
        // console.log("_footerHeight >>> " + _footerHeight);
        // console.log("__productStartActiveHeight >>> " + __productStartActiveHeight);
        // console.log("__productEndActiveHeight >>> " + __productEndActiveHeight);
        // console.log("__contactEndActiveHeight >>> " + __contactEndActiveHeight);
        // console.log("__companyEndActiveHeight >>> " + __companyEndActiveHeight);


        let _top = 0;
        if ("home" === target) {
            // window.scrollTo({ top: _top, behavior: 'smooth' });
        } else if ("products" === target) {
            _top = _homeHeight - (_productHeight + _contactHeight + _companyinfoHeight + _footerHeight);
            // window.scrollTo({ top: _top, behavior: 'smooth' });
        } else if ("contact" === target) {
            _top = _homeHeight - (_contactHeight + _companyinfoHeight + _footerHeight);
            // window.scrollTo({ top: _top, behavior: 'smooth' });
        } else if ("companyinfo" === target) {
            _top = _homeHeight - (_companyinfoHeight + _footerHeight);
            // window.scrollTo({ top: _top, behavior: 'smooth' });
        }
        // console.log(_top);

        if(__browser === "IE") {
            // window.document.documentElement.scroll().scrollTop(_top);
            window.scrollTo(0, _top);
        } else {
            window.scrollTo({ top: _top, behavior: 'smooth' });
        }





        // console.log("_scrollTop >>> " + _scrollTop);
        // console.log("_top >>> " + _top);
        // setActiveLi(target);
    }
    /***************************************************************************************************************************/

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark fixed-top " + (_scrollTop > __navbarShrinkHeight ? "navbar-shrink" : "")} id="mainNav">
            <div className="container">
                <button className={"navbar-brand js-scroll-trigger __user__navbar__cursor"}
                    onClick={() => handleActiveLi('home')}><p>ACEROAD</p></button>
                <button className={"navbar-toggler navbar-toggler-right " + (__collapse ? "" : "collapsed")}
                    onClick={collapseToggle}
                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className={"collapse navbar-collapse " + (__collapse ? "show" : "")} id="navbarResponsive" onClick={collapseToggle}>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <button 
                                className={
                                        "nav-link js-scroll-trigger __user__navbar__cursor " 
                                        + (_scrollTop > __productStartActiveHeight && _scrollTop < __productEndActiveHeight ? 'active' : '')
                                }
                                onClick={() => handleActiveLi('products')}>제품소개</button></li>
                        <li className="nav-item">
                            <button 
                                className={
                                        "nav-link js-scroll-trigger __user__navbar__cursor " 
                                        + (_scrollTop > __productEndActiveHeight && _scrollTop < __contactEndActiveHeight ? 'active' : '')
                                }
                                onClick={() => handleActiveLi('contact')}>문의하기</button></li>
                        <li className="nav-item">
                            <button 
                                className={
                                        "nav-link js-scroll-trigger __user__navbar__cursor " 
                                        + " " + (_scrollTop > __contactEndActiveHeight && _scrollTop < __companyEndActiveHeight ? 'active' : '')
                                }
                                onClick={() => handleActiveLi('companyinfo')}>회사정보</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navigation;