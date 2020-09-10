// import React from 'react';
import React, { useState } from 'react';

import LazyLoad from './LazyLoad';


const Modal = ({ _selectedProductItem, __handleModalToggle }) => {

    let __companyName = "";
    let __productName = "";
    let __modalStatus = false;
    if (_selectedProductItem !== null) {
        const { companyName, productName } = _selectedProductItem;
        // console.log(companyName);
        __companyName = companyName;
        __productName = productName;
        __modalStatus = true;
    }

    // Modal Open&Close
    let [__modal, setModal] = useState(__modalStatus);
    const modalToggle = () => {
        setModal(!__modal);
        __handleModalToggle();
    }

    return (
        <div className={"product-modal modal fade " + (__modal === false ? "" : "show")}
            id="item" tabIndex="-1" role="dialog" aria-hidden={__modal === false ? true : false}
            aria-modal={__modal === false ? false : true}
        >
            <div className="modal-dialog">
                <div className="modal-content __user__modal__content">
                    <div className="close-modal" data-dismiss="modal" onClick={() => modalToggle()}>
                        <img src={process.env.PUBLIC_URL + "/img/close-icon.svg"} alt="Close modal" />
                    </div>
                    <div className="row justify-content-center __user__modal__warp__padding">
                        <div className="modal-body __user__modal__body__width">
                            <h2 className="text-uppercase __user__font__family__Malgun__Gothic">{__companyName}</h2>
                            <p className="item-intro text-muted __user__font__family__Malgun__Gothic">{__productName}</p>
                        </div>
                        <div className="col-lg-7 __user__modal__margin__bottom">
                            <div className="modal-body __user__modal__body__padding__to__image">
                                <div className="container  __user__modal__container__box">
                                    <div className="col-lg-12 col-sm-12 mb-6">
                                        <div className="product-item  __user__product__item__border">
                                            {
                                                _selectedProductItem && <LazyLoad _selectedProductItem={_selectedProductItem} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 __user__modal__margin__bottom">
                            <div className="modal-body">
                                <div className="col-lg-12 col-sm-12 mb-6">
                                    <div className="product-item">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/mask/chrysan/크리센_KF94_황사마스크_가이드.png"} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" data-dismiss="modal" type="button" onClick={() => modalToggle()}>
                            <i className="fas fa-times mr-1"></i>
                                    Close
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;