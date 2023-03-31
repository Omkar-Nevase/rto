import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


class Learntest extends Component {
    state = { 
                allUsers: [],
                rtoid : sessionStorage.getItem("rtoid"),
                status:null
            } 
    
    

    componentDidMount(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
               {
                var result = JSON.parse(helper.responseText);
                    debugger;
                this.setState({allUsers: result });
               }
        };
        helper.open("POST", "http://localhost:8080/rto/list");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({rtoid: this.state.rtoid}));
    }
 
    result(args){
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
               {
                window.location.reload(false);
                    
               }
        };
        helper.open("POST", "http://localhost:8080/rto/verify");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid:args.target.value, status:args.target.name}))
    }

    view(args){
        window.location.href = "http://localhost:3000/documents/viewdocs"
    }

    Logout = ()=>{
        debugger;
        sessionStorage.removeItem("rtoid");
        window.location.href = 'http://localhost:3000/rto/rtologin';
    }

    render() { 
        return (<div className='table-responsive'>
                    <div style={{float: "right"}}>
                    <button className='btn btn-primary' 
                                onClick={this.Logout}>
                            Log out
                        </button>
                   
                    </div>


                    {/* aadharno :  "123456789"
                        address :  "Wai"
                        dob :  "2023-03-08"
                        email :  "omkarnevase44@gmail.com"
                        mobileno :  "123456789"
                        password : "Omkar@1234"
                        status :  3
                        uid : 2
                        uname : "Omkar Nevase */}
                    
                  <center> 
                            <h2>Candidate List</h2>
                            <table className='table table-bordered content'>
                            <tbody>
                                <tr>
                                    <th>User id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Aadhar No</th>
                                    <th>Mobile No</th>
                                    <th>Email</th>
                                    <th >View</th>
                                    <th colSpan={2}><center>Result</center></th>
                                </tr>
                            {
                               this.state.allUsers.map(user=>
                                {
                                    if(user.status==3){
                                            return (<tr key={user.uid}>
                                                <td>
                                                    {user.uid}
                                                </td>
                                                <td>
                                                    {user.uname}
                                                </td>
                                                <td>
                                                    {user.address}
                                                </td>
                                                <td>
                                                    {user.aadharno}
                                                </td>
                                                <td>
                                                    {user.mobileno}
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                <td>
                                                    <button onClick={this.view} value={user.uid} name="pass" class="btn btn-outline-primary">View Documents</button>
                                                </td>
                                                <td>
                                                    <button onClick={this.result} value={user.uid} name="pass" class="btn btn-outline-success">Verify</button>
                                                </td>
                                                <td>
                                                    <button onClick={this.result} value={user.uid} name="fail" class="btn btn-outline-danger">Reject</button>
                                                </td>
                                                
                                            </tr>)
                                    }
                                        
                                })
                            }
                            </tbody>
                        </table>
                        </center> 
                    </div>)
    }
}
 
export default Learntest;