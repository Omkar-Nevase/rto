import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function SubRtologin(props)
{
    const [rtoid, setrtoid] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");
    const history = useHistory();

    const handlertoid = (args)=>
    {
        debugger;
        setrtoid(args.target.value);
    }

    const handlepassword = (args)=>
    {
        debugger;
        setpassword(args.target.value);
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
                var data=JSON.parse(result);
                sessionStorage.setItem("rtoid",data[1]);    
                history.push(data[0]);
                    
            }
        };
        helper.open("POST","http://localhost:8080/login/subrto/");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({rtoid: rtoid, password: password}))
    }

    const clearBoxes =()=>
    {
        setrtoid("");
        setpassword("");
    }

    return <div>
            <br/><br/>
            <section class="container-fluid ">
            {/* <!-- row and justify-content-center class is used to place the form in center --> */}
            <section class="row justify-content-center ">
            <section class="col-12 col-sm-6 col-md-4 ">
            <div class="form-group ">
            <h4 class="text-center font-weight-bold">SUB-RTO Login </h4>
            <label for="InputEmail1">SUB-RTO Id</label>
             <input type="text" class="form-control" placeholder="Enter RTO id" name="rtoid" value={rtoid} onChange={handlertoid}/>
            </div>
            <div class="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={handlepassword}/>
            </div><div  style={{paddingTop : '10px'}}>
            <button  class="btn btn-primary btn-block" onClick={signIn} style={{width : '488px'}}>Submit</button></div>
            <div class="form-footer">
            </div>
        </section>
      </section>
    </section>
            </div>
}

export default SubRtologin