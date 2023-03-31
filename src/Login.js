
import './Common.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function Login()
{
    const [user, setUser] = useState({aadharno: "", password: ""});
    const [message, setmessage] = useState("");
    const history = useHistory();

    const handleChange = (args)=>
    {
        debugger;
        var copyOfCurrentUserInState = {...user};
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setUser(copyOfCurrentUserInState);
    }

    
    useEffect(()=>{
        if(message!="")
        {
            setTimeout(() => 
            {
                setmessage("");
            }, 2000);
        }
    }, [message]);

    const signIn = ()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = helper.responseText;
                if(result)
                {
                    debugger;
                    var result = helper.responseText;
                    var data=JSON.parse(result);
                    sessionStorage.setItem("uid",data[1]);
                    sessionStorage.setItem("isLoggedIn","true");       
                    history.push(data[0]);
                        
                }
                else
                {
                    clearBoxes();
                    setmessage("Invalid aadharno or password!"); 
                }
            }
        };
        helper.open("POST","http://localhost:8080/user/login");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        const cred = { aadharno: user.aadharno, password: user.password }
        helper.send(JSON.stringify(cred))
    }

    const clearBoxes =()=>
    {
        setUser({aadharno: "", password: ""});
    }

    return (
          <div>
            <br/><br/>
      <section class="container-fluid ">
      {/* <!-- row and justify-content-center class is used to place the form in center --> */}
      <section class="row justify-content-center ">
        <section class="col-12 col-sm-6 col-md-4 ">
          <div class="form-group ">
            <h4 class="text-center font-weight-bold">Candidate Login </h4>
            <label for="InputEmail1">Aadhar No</label>
             <input type="text" class="form-control" placeholder="Enter Aadhar No" name="aadharno" value={user.aadharno} onChange={handleChange}/>
          </div>
          <div class="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
          </div><div  style={{paddingTop : '10px'}}>
          <button  class="btn btn-primary btn-block" onClick={signIn} style={{width : '488px'}}>Submit</button></div>
          <div class="form-footer">
            <p> Don't have an account? <a href="/Registration">Sign Up</a></p>
            
          </div>
        </section>
      </section>
    </section>
          </div>
      );
}

export default Login