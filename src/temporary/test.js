import { useState } from "react"
import { useHistory } from "react-router-dom";

function Test()
{
    var history=useHistory();
    var marks=0;
    var cnt1=0,cnt2=0,cnt3=0,cnt4=0,cnt5=0;
    var status= "fail";

    var OnHandleChange = (args) => {
        debugger;
        if(args.target.name==1)
        {
            if(args.target.value=="C" && cnt1==0)
            {
                marks++;
                cnt1++;
            }else if(cnt1>0)
            {
                marks--;
                cnt1=0;
            }
            
        }
        else if(args.target.name==2)
        {
            if(args.target.value=="C" && cnt2==0)
            {
                marks++;
                cnt2++;
            }else if(cnt2>0)
            {
                marks=marks--;
                cnt2=0;
            }
        }
        else if(args.target.name==3)
        {
            if(args.target.value=="B" && cnt3==0)
            {
                marks++;
                cnt3++;
            }else if(cnt3>0)
            {
                marks--;
                cnt3=0;
            }
        }
        else if(args.target.name==4 )
        {
            if(args.target.value=="B" && cnt4==0)
            {
                marks++;
                cnt4++;
            }else if(cnt4>0)
            {
                marks--;
                cnt4=0;
            }
        }
        else if(args.target.name==5 )
        {
            if(args.target.value=="B" && cnt5==0)
            {
                marks++;
                cnt5++;
            }else if(cnt5>0)
            {
                marks--;
                cnt5=0;
            }
        }

        if(marks>=2)
            {   debugger;
                status = "pass";
               // status="pass";
            }
        else
            {
                
                status="fail";
            }
   
    }

    var Submit = () =>{
        debugger;
        

        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = helper.responseText;
                if(result)
                {
                    
                    history.push(result);
                }
                else
                {
                    history.push(result);
                }
            }
        };
        helper.open("POST","http://localhost:8080/temporary/test");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        // const cred = vehicletype;
        // helper.send(JSON.stringify(cred))
        helper.send(JSON.stringify({resstatus:status,uid:sessionStorage.getItem("uid")}))
    }

    const Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
    }

    return(<div>
            <div style={{float: "right"}} className="myLogoutMargin">
                    <button className='btn btn-primary' 
                                onClick={Logout}>
                            Log out
                        </button>       
            </div>
            <table>
                <tbody>
                    <tr>1.While parking your vehicle on a downward gradient, in addition to the application of hand brake, the gear engaged should be:</tr>
                    <tr><input type="radio" name="1" value="A" onClick={OnHandleChange}/>A.In neutral</tr>
                    <tr><input type="radio" name="1" value="B" onClick={OnHandleChange}/>B.n first</tr>
                    <tr><input type="radio" name="1" value="C" onClick={OnHandleChange}/>C.In reverse</tr><br/>
                    <tr>2.When a vehicle is involved in an accident causing injury to any person, what should you do? </tr>
                    <tr><input type="radio" name="2" value="A" onClick={OnHandleChange}/>A.Take the vehicle to the nearest police station and report the accident</tr>
                    <tr><input type="radio" name="2" value="B" onClick={OnHandleChange}/>B.Stop the vehicle and report to the police station</tr>
                    <tr><input type="radio" name="2" value="C" onClick={OnHandleChange}/>C.Take all reasonable steps to secure medical attention to the injured and report to the nearest police station within 24 hours</tr><br/>
                    <tr>3.When is overtaking is prohibited? </tr>
                    <tr><input type="radio" name="3" value="A" onClick={OnHandleChange}/>A.When the road is marked with a broken center line in the colour white</tr>
                    <tr><input type="radio" name="3" value="B" onClick={OnHandleChange}/>B.When the vehicle is being driven on a steep hill</tr>
                    <tr><input type="radio" name="3" value="C" onClick={OnHandleChange}/>C.When the road is marked with a continuous center line in the colour yellow</tr><br/>
                    <tr>4.If the road is marked with broken white lines, you: </tr>
                    <tr><input type="radio" name="4" value="A" onClick={OnHandleChange}/>A.shall not change track</tr>
                    <tr><input type="radio" name="4" value="B" onClick={OnHandleChange}/>B.can change track, if required</tr>
                    <tr><input type="radio" name="4" value="C" onClick={OnHandleChange}/>C.shall stop the vehicle</tr><br/>
                    <tr>5.What is the meaning of a blinking red traffic light? </tr>
                    <tr><input type="radio" name="5" value="A" onClick={OnHandleChange}/>A.Stop the vehicle till green light glows</tr>
                    <tr><input type="radio" name="5" value="B" onClick={OnHandleChange}/>B.Stop the vehicle and proceed if safe</tr>
                    <tr><input type="radio" name="5" value="C" onClick={OnHandleChange}/>C.Reduce speed and proceed</tr><br/>
                    <tr>
                        <td colSpan={4}><button className='btn btn-primary'
                                            onClick={Submit}>
                                        Submit
                                    </button></td>
                    </tr>
                </tbody>
            </table>
            </div>)
}

export default Test;