import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl} from 'react-bootstrap';

class HomePage extends Component {
  constructor (props)
  {
    super(props);
    this.state = {fname: "", lname: "", companyname: "", email: "", mobile: 0};
    this.changefirstname = this.changefirstname.bind(this);
    this.changelastname = this.changelastname.bind(this);
    this.changecompanyname = this.changecompanyname.bind(this);
    this.findprofile = this.findprofile.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changemobile = this.changemobile.bind(this);

  }
  findprofile()
  {
    const axios = require('axios');
    // axios.get('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=86ue3l5ndmxy4l&https://innovationcentre.auth0.com/login/callback&state=987654321&scope=r_basicprofile&state=987654321&scope=r_basicprofile')
    // .then(function(response)
    // {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
  }
  changefirstname(event)
  {
    this.setState({fname: event.target.value});
  }
  changelastname(event)
  {
    this.setState({lname: event.target.value});
  }
  changecompanyname(event)
  {
    this.setState({companyname: event.target.value});
  }
  changeemail(event)
  {
    this.setState({email: event.target.value});

  }
  changemobile(event)
  {
    this.setState({mobile: event.target.value});

  }
  
  render() {
    return (
  
      <div>
      <Col sm={3} id = "form">
      <div>

            <label>Please enter the contact's first name</label>
            <input type = "text" placeholder = "First Name" value = {this.state.fname} onChange = {this.changefirstname}/>
            <br></br>
            <label>Please enter the contact's last name</label>
            <input type = "text"  placeholder = "Last Name" value = {this.state.lname} onChange = {this.changelastname}/>
            <br></br>
            <label>Please enter the contact's company name</label>
            <input type = "text" placeholder = "Company Name" value = {this.state.companyname} onChange = {this.changecompanyname}/>
            <br></br>
            <label>Please enter the contact's email</label>
            <input type = "text" placeholder = "Email" value = {this.state.email} onChange = {this.changeemail}/>
            <br></br>
            <label>Please enter the contact's mobile phone number</label>
            <input type = "text" placeholder = "000-000-000"value = {this.state.mobile} onChange = {this.changemobile}/>
            <br></br>
            <br></br>
            <button id = "search" onClick = {this.findprofile} active>Find Linkedin Profile</button>
        </div>

      </Col>

      <Col sm={9} className="select-padding">
      </Col> 
      </div>

    )
  }
}
export default HomePage;