import React from 'react';
import Item from './Item';



class Products extends React.Component {

    _handleRadioBox = (value) => {
        const { _handleRadioClick } = this.props;
        _handleRadioClick(value);
    }

    render() {
        const { _checkedRidaoValue, _productSelectItems } = this.props;

        // let _ieVersionLessThanTen = false;
        // const agent = navigator.userAgent.toLowerCase();
        // if(agent.indexOf("msie") !== -1) {
        //     // console.log(agent);
        //     _ieVersionLessThanTen = true;
        // }

        let itemList = null;
        itemList = _productSelectItems.map (
            (item) => (
                <Item
                    key={item.id}
                    item={item} />
            )
        )

        // if(_ieVersionLessThanTen === false) {
        //     itemList = _productSelectItems.map (
        //         (item) => (
        //             <Item
        //                 key={item.id}
        //                 item={item} />
        //         )
        //     )
        // } else if(_ieVersionLessThanTen === true) {
        //     for(let nIdx = 0; nIdx < _productSelectItems.length; nIdx++) {
        //         const item = _productSelectItems[nIdx];
        //         console.log(item);
        //     }
        // }

        if (_productSelectItems.length === 0) {
            itemList = (
                <div className="container">
                    <div className="text-center __user__product__div__default__min__height">
                        <span className="__user__product__span__default__min__height">상품이 존재하지 않습니다.</span>
                    </div>
                </div>
            );
        }

        return (
            <section className="page-section bg-light" id="products">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase __user__section__head__text__css">제품소개</h2>
                        <div className="text-center box-radio-div">
                            <label className="box-radio-input box-radio-label">
                                <input type="radio" name="cp_item" value="0" checked={_checkedRidaoValue === 0 ? true : false} onChange={() => this._handleRadioBox(0)} />
                                    <span>전체</span>
                            </label>
                            <label className="box-radio-input box-radio-label">
                                <input type="radio" name="cp_item" value="1" checked={_checkedRidaoValue === 1 ? true : false} onChange={() => this._handleRadioBox(1)} />
                                    <span>KF-94</span>
                            </label>
                            <label className="box-radio-input box-radio-label">
                                <input type="radio" name="cp_item" value="2" checked={_checkedRidaoValue === 2 ? true : false} onChange={() => this._handleRadioBox(2)} />
                                    <span>KF-80</span>
                            </label>
                            <label className="box-radio-input box-radio-label">
                                <input type="radio" name="cp_item" value="3" checked={_checkedRidaoValue === 3 ? true : false} onChange={() => this._handleRadioBox(3)} />
                                    <span>KF-AD</span>
                            </label>
                            <label className="box-radio-input box-radio-label">
                                <input type="radio" name="cp_item" value="4" checked={_checkedRidaoValue === 4 ? true : false} onChange={() => this._handleRadioBox(4)} />
                                    <span>Square Mask</span>
                            </label>
                        </div>
                    </div>
                    <div className="row __user__product__div__default__min__height">
                        {itemList}
                    </div>
                </div>
            </section>
        );
    }
}

export default Products;