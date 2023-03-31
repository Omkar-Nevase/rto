import React, { Component } from 'react';
import "../Common.css";

class viewdocs extends Component {
    state = { 
        alldocs : [],
        aadhar :"",
        photo : "",
        sign : "",
        birth : "",
        url : "http://localhost:8080/documents/"
    } 

    


    componentDidMount(){
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
               {
                var result = JSON.parse(helper.responseText);
                //this.state.alldocs=result;
                this.state.aadhar = this.state.url + result.aadharimg;
                this.state.photo = this.state.url + result.photoimg;
                this.state.sign = this.state.url + result.signatureimg;
                this.state.birth = this.state.url + result.birthproofimg;
                debugger;
                console.log("docs");
               }
        };
        helper.open("POST", "http://localhost:8080/documents/showdocs");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid:sessionStorage.getItem("uid")}))
    }
    
    render() { 
        return(
                // <table border={1}>
                //     <tbody>
                //         <tr>
                //             <td><center>Aadhar Card</center></td>
                //             <td><img src ="http://localhost:8080/documents/aadhar.png" className="aadhar"/></td>
                //         </tr>
                //     </tbody>
                // </table>
          
             
                <div className='container myMargin'>
                        
                       <div className='myMargin'><br></br>
                        <img src ="http://localhost:8080/documents/aadhar.png" className="aadhar"/>
                        <h2><center>Aadhar</center></h2>
                                <br></br>
                                </div>
                        <div className='myMargin'><br></br>
                        <img src="http://localhost:8080/documents/photo.png" alt="PHOTO" className="photo"/>
                        <h2><center>User Profile</center></h2>
                                <br></br>
                                </div>
                        <div className='myMargin'><br></br>
                        <img src="http://localhost:8080/documents/sign.png" className="sign"/>
                        <h2><center>Signature</center></h2>
                                <br></br>
                                </div>
                        <div className='myMargin'><br></br>
                        <img src="http://localhost:8080/documents/birth.png" className="birth"/>
                        <h2><center>Birth Proof</center></h2>
                                <br></br>
                                </div>
                    </div>
                    )
    }
}
 
export default viewdocs;