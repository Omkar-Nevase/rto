import { useState} from "react";
import { useHistory } from "react-router-dom";
import police from '../logos/police.png';
function Pay()
{

   const [vehicleno,setVehicleno] = useState("");
   const history = useHistory();
    const HandleChange = (args)=>
    {
        debugger;
        setVehicleno(args.target.value)
    }

    const Search = ()=>{
        debugger;
        sessionStorage.setItem("vehicleno",vehicleno);
                    clearBoxes();
                    history.push("/Challan/paid");
       
    }

    const clearBoxes =()=>
    {
        setVehicleno("");
    }
return (<div>
        <section class="container-fluid ">
        <section class="row justify-content-center ">
        <section class="col-12 col-sm-6 col-md-4 ">
        <div>
        <div><br/>
        <center><img src={police} alt="pay challan" className="myImage1"/> </center>
        </div>
        <div class="form-group "><br/>
            <h4 class="text-center font-weight-bold">Enter Vehicle No</h4>
             <input type="text" class="form-control" placeholder="Enter Vehicle No" name="aadharno" value={vehicleno} onChange={HandleChange}/>
          </div>
          <div  style={{paddingTop : '10px'}}>
          <center><button  class="btn btn-primary btn-block" onClick={Search} style={{width : '388px'}}>Search</button></center></div>
        </div>
        </section>
      </section>
    </section>

        </div>)



}

export default Pay;