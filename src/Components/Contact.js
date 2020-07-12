import React, { Component } from "react";
import emailjs from "emailjs-com";

const USER_ID = process.env.REACT_APP_USER_ID_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID_KEY;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID_KEY;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      visible: false,
      successMessage: { display: "none" },
      errorMessage: { display: "none" },
      contact: { display: "unset" },
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let visible = this.state.visible;
    visible = true;
    this.setState({
      visible: visible,
    });
    this.sendFeedback({
      message_html: this.state.message,
      subject: this.state.subject,
      from_name: this.state.name,
      reply_to: this.state.email,
      to_name: "Furkan Doğan",
    });
  };

  sendFeedback = (variables) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, variables, USER_ID).then(
      (response) => {
        let errorMessage = JSON.parse(JSON.stringify(this.state.errorMessage));
        let successMessage = JSON.parse(JSON.stringify(this.state.successMessage));
        let visible = JSON.parse(JSON.stringify(this.state.visible));
        let contact = JSON.parse(JSON.stringify(this.state.contact));
        visible = false;
        if (response.status === 200) {
          errorMessage.display = "none";
          successMessage.display = "unset";
          contact.display = "none";
          this.setState({
            visible: visible,
            errorMessage: errorMessage,
            successMessage: successMessage,
            contact: contact,
          });
        } else {
          errorMessage.display = "unset";
          successMessage.display = "none";
          this.setState({
            visible: visible,
            errorMessage: errorMessage,
            successMessage: successMessage,
          });
        }
      },
      (err) => {
        let errorMessage = JSON.parse(JSON.stringify(this.state.errorMessage));
        let successMessage = JSON.parse(JSON.stringify(this.state.successMessage));
        let visible = JSON.parse(JSON.stringify(this.state.visible));
        errorMessage.display = "unset";
        successMessage.display = "none";
        this.setState({
          visible: visible,
          errorMessage: errorMessage,
          successMessage: successMessage,
        });
        console.log("FAILED...", err);
      }
    );
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleNameChange} />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleEmailChange} />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleSubjectChange} />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea cols="50" rows="5" id="contactMessage" name="contactMessage" onChange={this.handleMessageChange}></textarea>
                </div>

                <div>
                  <button className="submit" onClick={this.handleSubmit}>
                    SUBMIT
                  </button>
                  <span id={this.state.visible ? "image-loader-in" : "image-loader"}>
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning" style={this.state.errorMessage}>
              > There maybe some errors
            </div>
            <div id="message-success" style={this.state.successMessage}>
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
