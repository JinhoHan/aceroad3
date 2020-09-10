import React from 'react';
import emailjs from 'emailjs-com';


class Contact extends React.Component {

    sendMail = (event) => {
        event.preventDefault();
        // console.log(event.target);

        const serviceId = "service_bedmil87";
        const templateId = "template_euujoh5";
        const userId = "user_dSL702naduehkr2k5HdZq";

        emailjs.sendForm(serviceId, templateId, event.target, userId)
            .then((result) => {
                console.log(result.text);
                alert("메일을 발송하였습니다.");
            }, (error) => {
                console.log(error.text);
                alert("메일 발송 중 오류가 발생하였습니다. 회사정보의 메일주소를 참조하여 메일을 보내시거나 유선번호로 전화 부탁드립니다.");
            });
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.phone.value = "";
        event.target.message.value = "";
    }


    render() {
        return (
            <section className="page-section" id="contact"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/map-image.png'})`}}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase __user__section__head__text__css">문의하기</h2>
                        <h3 className="section-subheading text-muted">&nbsp;</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" onSubmit={(event) => this.sendMail(event)}>
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" name="name" id="name" type="text" placeholder="이름을 입력하세요.." 
                                            required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" name="email" id="email" type="email" placeholder="연락받으실 이메일 주소를 입력하세요.." 
                                            required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" name="phone" id="phone" type="tel" placeholder="연락받으실 핸드폰 번호를 입력하세요.." 
                                            required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" name="message" id="message" placeholder="메시지를 입력하세요.&#13;&#13;&#10;제품명 : EX) 지구별 황사 방역 마스크 KF 94&#13;&#10;수량 : EX)1,000EA" 
                                            required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;