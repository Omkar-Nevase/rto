import Sidebar from "../Sidebar";
import { useHistory } from "react-router-dom";

function Permlicence()
{

    const history = useHistory();
    const Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
    }

    const Download=()=>{
        window.location.href = 'http://localhost:8080/pdf/permanentlicence/' + sessionStorage.getItem("uid");
    }

    const ApplyForNew = ()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = helper.responseText;
                history.push(result);
            }
        };
        helper.open("POST","http://localhost:8080/permanent/applyfornew");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid:sessionStorage.getItem("uid")}))
    }

    return (<div>
                 <div style={{float: "right"}} className="myLogoutMargin">
                    <button className='btn btn-primary' 
                                onClick={Logout}>
                            Log out
                        </button>       
                </div>
                <div className="container">
                <Sidebar></Sidebar>
                <div className="myMargin"><br/>
                <h1> Permanent Licence </h1>
                <br/>
                <button onClick={Download} class="btn btn-outline-primary">Download Permanent</button>
                <br/><br/>
                <h1> Apply For New Licence </h1>
                <br/>
                <button onClick={ApplyForNew} class="btn btn-outline-primary">     Apply    </button>
                </div>
                </div>
            </div>)
}

export default Permlicence;