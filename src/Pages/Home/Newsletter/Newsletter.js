import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter_section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="newsletter_text">
                            <h2>Get All Updates</h2>
                            <p>Sign up our newsleter today. Also get allert for new product.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="newsletter_form">
                            <form>
                                <input style={{ width: '100%' }} type="email" placeholder="Type your email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;