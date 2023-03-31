import react from "react";
import { useHistory } from "react-router-dom";

export default class Registration extends react.Component{
    
    constructor(props){
        super(props);
        this.state={
            password: "",
            uname: "",
            dob: "",
            address: "",
            aadharno:"",
            email:"",
            mobileno: "",
            errors:{
                pwderror:"",
                emailerror:""
            },
            emailvalid: false,
            pwdvalid: false,
            formvalid: false,
            msg:"",
            info:""

        }
    }
    
    handleChange = (e) => {
        const input = e.target;
        const nm = input.name;
        const val = input.value;

        const emailregx = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9._-]{3,7}\.[a-z]{2,}$/;
        const pwdregx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&*!])[A-Za-z0-9@#$%&*!]{8,15}$/;

        let errors = this.state.errors;
        let pwdflag = this.state.pwdvalid;
        let emailflag = this.state.emailvalid;


        switch (nm) {
            case 'email':
                if(!emailregx.test(val))
                {
                    errors.emailerror = "invalid email";
                    emailflag = false;
                }
                else
                {
                    errors.emailerror = "";
                    emailflag = true;
                }
                
                break;
            case 'password':
                if(!pwdregx.test(val))
                {
                    errors.pwderror = "password should contain 8 characters in which altest one sysmbol, one number and one capital letter";
                    pwdflag = false;
                }
                else 
                {
                    errors.pwderror = "";
                    pwdflag = true;
                }
                break;
            
        }
        this.setState({errors,[nm]: val,emailvalid: emailflag,pwdvalid:pwdflag}, () => {this.setState({formvalid: this.state.emailvalid && this.state.pwdvalid})});
    }
   
    submit = (e) => {
        e.preventDefault();
        const reqData = {
            
            method: 'POST',
            headers: {                
              'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                password: this.state.password,
                uname: this.state.uname,
                dob: this.state.dob,
                address: this.state.address,
                aadharno:this.state.aadharno,
                email: this.state.email,
                mobileno: this.state.mobileno
            })
        }
        
        fetch("http://localhost:8080/user/register",reqData)
        .then(resp => resp.text())
        .then(data =>{if(data == 1)
                    {
                    
                    this.setState({msg: "Registration done sucessfully"})
                    this.props.history.push("/Login");
                }
                else
                {
                    this.setState({loginerror: "Registration failed..."});
                    this.props.history.push("/registration");
                }
            })
        
        }
    render(){
        return(
            <div>
            <div  class="mx-auto " style={{width: 500, marginTop:30}} >
                <div className="bg-light text-black rounded  border border-primary" style={{opacity:0.9}}>
                    <h1 style={{marginLeft: 55}}>Candidate Registration</h1>
                    <br/>
                    <form>
                        <div style={{opacity:1.0, paddingLeft:"10px", paddingRight:"10px"}}>
                        <div className="form-group" >
                                <label for="uname">Enter Name :</label> 
                                <input type="text" name="uname" id="uname" placeholder="Name" className="form-control" value={this.state.uname} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="pass">Enter Password :</label> 
                                <input type="password" name="password" id="pass" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="dob">Enter Date Of Birth :</label> 
                                <input type="date" name="dob" id="dob" placeholder="Date Of Birth" className="form-control" value={this.state.dob} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="address">Address :</label> 
                                <input type="text" name="address" id="address" placeholder="Address" className="form-control" value={this.state.address} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="aadharno">Aadhar No :</label> 
                                <input type="text" name="aadharno" id="aadharno" placeholder="Aadhar No" className="form-control" value={this.state.aadharno} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="email">Enter Email :</label> 
                                <input type="email" name="email" id="email" placeholder="Email Id" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group" >
                                <label for="mobileno">Enter mobile No :</label> 
                                <input type="text" name="mobileno" id="mobileno" placeholder="mobileno" className="form-control" value={this.state.mobileno} onChange={this.handleChange}/>
                            </div>
                        </div>                        
                        <div style={{textAlign:"center" ,marginTop:15}}>
                            <input type="button" className="btn btn-danger rounded-pill" name="submit" value="Register" disabled={!this.state.formvalid} onClick={this.submit} />
                        </div>
                    </form>
                    <div className="text-danger">
                        {this.state.errors.emailerror}
                        {this.state.errors.pwderror}
                        {this.state.msg}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}