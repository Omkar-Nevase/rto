import React from "react";
import axios from "axios";
import Sidebar from "../Sidebar";

class Documents extends React.Component {

    // API Endpoints
    custom_file_upload_url = `http://localhost:8080/documents/insert`;

    constructor(props) {
        super(props);
        this.state = {
            uid: sessionStorage.getItem("uid"),
            image_file: null,
            image_preview: '',
            photo_file: null,
            photo_preview: '',
            birth: null,
            birth_preview: '',
            sign_file: null,
            sign_preview: ''
        }
    }

    // Image Preview Handler
    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        debugger;
        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
    }

    handlePhotoPreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        debugger;
        this.setState({
            photo_preview: image_as_base64,
            photo_file: image_as_files,
        })
    }
    handleBirthPreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        debugger;
        this.setState({
            birth_preview: image_as_base64,
            birth: image_as_files,
        })
    }
    handleSignPreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        debugger;
        this.setState({
            sign_preview: image_as_base64,
            sign_file: image_as_files,
        })
    }

    // Image/File Submit Handler
    handleSubmitFile = () => {

        if (this.state.image_file !== null){
            debugger;
            let formData = new FormData();
            formData.append('uid', this.state.uid);
            formData.append('aadhar', this.state.image_file);
            formData.append('photo', this.state.photo_file);
            formData.append('birth', this.state.birth);
            formData.append('sign', this.state.sign_file);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                        "Content-type": "multipart/form-data",
                    },                    
                }
            )
            .then((res) => {
                debugger;
                    window.location = 'http://localhost:3000/temporary/payfee';
            
              })
            .catch(err => {
                console.log(err);
            })
        }
    }
    Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
    }

    // render from here
    render() { 
        return (
            <div>
                <div style={{float: "right"}} className="myLogoutMargin">
                    <button className='btn btn-primary' 
                                onClick={this.Logout}>
                            Log out
                        </button><br></br>   
                </div>
                
                <div className="container">
                   <Sidebar></Sidebar>
                   <div>
                    <table className="myTableMarging1">
                        <tbody>
                            <tr>
                                <td>
                                <br/>Aadhar Card<br/>
                                    <img src={this.state.image_preview} alt="image preview" style={{height:'200px',width:'200px'}}/><br/>
                                    <input type="file" onChange={this.handleImagePreview}/><br/>
                                </td>
                                <td>
                                <br/> Photo<br/>
                                    <img src={this.state.photo_preview} alt="image preview" style={{height:'200px',width:'200px'}}/><br/>
                                    <input type="file" onChange={this.handlePhotoPreview}/><br/>
                                </td>
                                <td>
                                    <center>
                                    <br/><br/>
                                        <button type="submit" onClick={this.handleSubmitFile} value="Submit" class="btn btn-outline-primary">Submit</button>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <br/> Birth Proof<br/>
                                    <img src={this.state.birth_preview} alt="image preview" style={{height:'200px',width:'200px'}}/><br/>
                                    <input type="file" onChange={this.handleBirthPreview}/><br/>
                                </td>
                                <td>
                                <br/> Signature<br/>
                                    <img src={this.state.sign_preview} alt="image preview" style={{height:'200px',width:'200px'}}/><br/>
                                    <input type="file" onChange={this.handleSignPreview}/><br/>
                                </td>
                              </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}

export default Documents;