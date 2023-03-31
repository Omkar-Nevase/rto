import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


class Drivetest extends Component {
    state = { 
                allUsers: [],
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
        helper.open("POST", "http://localhost:8080/rto/drivetest");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(sessionStorage.getItem("rtoid"));
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
        helper.open("POST", "http://localhost:8080/rto/test");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid:args.target.value, status:args.target.name}))
    }

    Logout = ()=>{
        debugger;
        sessionStorage.removeItem("rtoid");
        sessionStorage.clear();
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
                                    <th colSpan={2}>Result</th>
                                </tr>
                            {
                               this.state.allUsers.map(user=>
                                {
                                    if(user.status==7){
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
                                                    <button onClick={this.result} value={user.uid} name="pass">Pass</button>
                                                </td>
                                                <td>
                                                    <button onClick={this.result} value={user.uid} name="fail">Fail</button>
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
 
export default Drivetest;