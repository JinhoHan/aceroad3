import React from 'react';

import Navigation from './components/js/Navigation';
import Masthead from './components/js/Masthead';
import Services from './components/js/Services';
import Products from './components/js/Products';
import Contact from './components/js/Contact';
import Footer from './components/js/Footer';

import './components/css/styles.css';



class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			/*
				KF94: 1
				KF80: 2
				KFAD: 3
				DENTAL: 4
			*/
			_productAllItems: [
				{
					id: "product1",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					companyName: "크리센",
					productName: "KF-94 황사마스크",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 1
				},
				{
					id: "product2",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크.png",
					companyName: "크리센",
					productName: "KF-80 황사마스크",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 2
				},
				{
					id: "product3",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					// image: process.env.PUBLIC_URL + "/img/mask/z9star/지구별_KFAD_비말차단마스크.png",
					companyName: "Finish",
					productName: "Identity",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 3
				},
				{
					id: "product4",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크.png",
					companyName: "Lines",
					productName: "Branding",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 2
				},
				{
					id: "product5",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크.png",
					companyName: "Southwest",
					productName: "Website Design",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 2
				},
				{
					id: "product6",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					// image: process.env.PUBLIC_URL + "/img/mask/z9star/지구별_KFAD_비말차단마스크.png",
					companyName: "Window",
					productName: "Photography",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 3
				},
				{
					id: "product7",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					companyName: "크리센",
					productName: "KF-94 황사마스크",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 1
				},
				{
					id: "product8",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					companyName: "크리센",
					productName: "KF-94 황사마스크",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 1
				},
				{
					id: "product9",
					image: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png",
					companyName: "크리센",
					productName: "KF-94 황사마스크",
					detailImage: [
						{
							id: 1,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크.png"
						},
						{
							id: 2,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_박스.jpg"
						},
						{
							id: 3,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세1.jpg"
						},
						{
							id: 4,
							imagePath: process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF80_황사마스크_상세2.jpg"
						}
					],
					type: 1
				}
			],
			_productSelectItems: [],
			_scrollTop: 0,
			_selectedProductItem: null,
			_checkedRidaoValue: 0
		};
	}

	componentDidMount() {
		// 스크롤 이벤트 적용
		window.addEventListener('scroll', this.onScroll);
		this._handleRadioClick(0);
		// this._sectionClientHeight();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}


	// 스크롤 변화 감지
	onScroll = (e) => {
		this._currentScrollPosition(e);
	};

	// 라디오 버튼 클릭 이벤트
	_handleRadioClick = (value) => {
		this.setState({ _checkedRidaoValue: value });

		if (value === 0) {
			this.setState({ _productSelectItems: this.state._productAllItems });
		} else {
			const { _productAllItems } = this.state;
			const filterArrays = _productAllItems.filter(_productItem => _productItem.type === value);
			this.setState({ _productSelectItems: filterArrays });
		}
	}


	// 스크롤 이동시 변경 사항 적용
	_currentScrollPosition = (e) => {
		
		let __browser = "";
		const agent = navigator.userAgent.toLowerCase();
		// console.log(agent);
		if ( (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) {
			__browser = "IE";
		} else {
			__browser = "";
		}


		// 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
		// 따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
		let scrollTop;
		if(__browser === "IE") {
			scrollTop = window.document.documentElement.scrollTop;;
		} else {
			scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
		}
		this.setState({ _scrollTop: scrollTop }, (state) => {
			// console.log(this.state._scrollTop);
		});
	}

	render() {
		return (
			<>
				<Navigation _scrollTop={this.state._scrollTop} />
				<Masthead />
				<Products
					_handleRadioClick={this._handleRadioClick}
					_productSelectItems={this.state._productSelectItems}
					_checkedRidaoValue={this.state._checkedRidaoValue} />
				<Contact />
				<Services />
				<Footer />
			</>
		);
	}
}

export default App;