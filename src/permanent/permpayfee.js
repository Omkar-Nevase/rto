import { useState} from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar";

function Permpayfee()
{

   const [vehicletype,setVehicletye] = useState("");
   const history = useHistory();
    const HandleChange = (args)=>
    {
        debugger;
        setVehicletye( args.target.value)
    }

    const insertVehicletype = ()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = helper.responseText;
                history.push(result);
            }
        };
        helper.open("POST","http://localhost:8080/permanent/permpayfee");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid:sessionStorage.getItem("uid")}))
    }

    const Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
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
            <div className="myDivMargin">
            <br></br>
             <center><h4>Types Of Vehicles</h4>  </center> 
            <table className='table table-bordered registerTable'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>COV</th>
                        <th>DESCRIPTION</th>
                        <th>FEE</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>LVM</td>
                        <td>LVM-NT-Car</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MCWG</td>
                        <td>M.C With Gear</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>MCWOG</td>
                        <td>M.C W/o Gear</td>
                        <td>700</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>TRANS</td>
                        <td>Transport</td>
                        <td>800</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>TW</td>
                        <td>Two Wheeler</td>
                        <td>400</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h4>Choose vehicle type:</h4>
            <select name="vehicletype" id="vehicletype"  onChange={HandleChange} >
            <option value="lmv">LMV</option>
            <option value="mcwg">MCWG</option>
            <option value="mcwog">MCWOG</option>
            <option value="trans">TRANS</option>
            <option value="tw">TW</option>
            </select><br></br>
            <input type="button" value="Pay" onClick={insertVehicletype}  class="btn btn-outline-primary"/>
            </div>
            </div>



        </div>)



}

export default Permpayfee;



{/* <table>
                <tbody>
                    <tr>
                        <td>Vehicle Type</td>
                        <td><input type="text" name="Vehicletype" onChange={HandleChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="button" value="Pay" onClick={insertVehicletype}/></td>
                    </tr>
                </tbody>
            </table> */}