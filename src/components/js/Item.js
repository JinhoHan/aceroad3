import React, { useState } from 'react';

import Modal from './Modal';


// class Item extends React.Component {
const Item = ({ item }) => {
    const { id, image, compnayName, productName } = item;
    const _selectedProductItem = item;
        
    // Modal Open&Close
    // let [ _selectedProductItem, setSelectedItems ] = useState(null);
    let [ __modal, setModal ] = useState(false);
    const __handleModalToggle = () => {
        // modal 상태에 따른 body addClass -> false 일땐 true 로 바꿔서 모달을 열것이기 때문에 미리 변경...
        // setState가 바로 변경되는게 아니라...
        if (__modal === false) {
            document.getElementById("home").className = "modal-open";
        } else {
            document.getElementById("home").className = "";
        }
        setModal(!__modal);
    }

    return (
        <div className="col-lg-4 col-sm-6 mb-4" id={id}>
            <div className="product-item">
                <button className="product-link __user__product__link__cursur" onClick={() => __handleModalToggle()}>
                    <div className="product-hover">
                        <div className="product-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={image} alt="" />
                </button>
                <div className="product-caption">
                    <div className="product-caption-heading">{compnayName}</div>
                    <div className="product-caption-subheading text-muted">{productName}</div>
                </div>
                {
                    __modal && _selectedProductItem && <Modal 
                                    _selectedProductItem={_selectedProductItem}
                                    __handleModalToggle={__handleModalToggle} />
                }
            </div>
        </div>
    );
}

export default Item;