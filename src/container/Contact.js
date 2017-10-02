import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">

                <div className="section group">
                    <div className="col span_1_of_3">

                        <div className="company_address">
                            <h3 className="contact-header">Bakery Information :</h3>
                            <p>500 Lorem Ipsum Dolor Sit,</p>
                            <p>22-56-2-9 Sit Amet, Lorem,</p>
                            <p>USA</p>
                            <p>Phone:(00) 222 666 444</p>
                            <p>Fax: (000) 000 00 00 0</p>
                            <p>Email: <span>info@mycompany.com</span></p>
                            <p>Follow on: <span>Facebook</span>, <span>Twitter</span></p>
                        </div>
                    </div>
                    <div className="col span_2_of_3">
                        <div className="contact-form">
                            <h3 className="contact-header">Contact Us</h3>
                            <form>
                                <div>
                                    <span><label>NAME</label></span>
                                    <span><input name="userName" type="text" className="textbox" /></span>
                                </div>
                                <div>
                                    <span><label>E-MAIL</label></span>
                                    <span><input name="userEmail" type="text" className="textbox" /></span>
                                </div>
                                <div>
                                    <span><label>MOBILE</label></span>
                                    <span><input name="userPhone" type="text" className="textbox" /></span>
                                </div>
                                <div>
                                    <span><label>SUBJECT</label></span>
                                    <span><textarea name="userMsg"> </textarea></span>
                                </div>
                                <div>
                                    <span><input type="submit" value="Submit" /></span>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
