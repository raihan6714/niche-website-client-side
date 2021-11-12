import React from 'react';
import './OverView.css';
const OverView = () => {
    return (
        <div className="overview-area  pt-5 pb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="overview-content">
                            <h2><span>OSWAN</span> WORLD MOST </h2>
                            <h2>LATGEST <span>MOTORCYCLE STORE</span></h2>
                            <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest            qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam </p>
                            <div className="question-area">
                                <h4>HAVE ANY QUESTION? </h4>
                                <div className="question-contact">
                                    <div className="question-icon">
                                        <i className="icofont icofont-phone"></i>
                                    </div>
                                    <div className="question-content-number">
                                        <h6> 01245 658 698</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="overview-img">
                            <img className="tilter img-fluid" src="https://i.ibb.co/tXFmdfF/banner-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;