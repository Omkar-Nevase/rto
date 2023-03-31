import React from "react";
import axios from "axios";
import { useState} from "react";
import { useHistory } from "react-router-dom";
    
        const  Make = (props) => {
       const custom_file_upload_url = `http://localhost:8080/challan/fine`;
        const [violationProofPreview, setviolationProofPreview] = useState(null);
        const [vehicleno, setvehicleno] = useState("");
        const [violationProof, setviolationProof] = useState(null);
        const [violationDate, setviolationDate] = useState("");
        const [violationno, setviolationno] = useState("");
        const [location, setlocation] = useState("");
        const formData = new FormData();
        const handleViolationProofPreview = event => {
            let file = event.target.files[0];
            setviolationProof(file)
            
            
            setviolationProofPreview(URL.createObjectURL(file));
        };

        const handleSubmitFile = () => {
            formData.append('violationProof',violationProof);
            formData.append('vehicleno', vehicleno);
            formData.append('violationDate', violationDate);
            formData.append('violationno', violationno);
            formData.append('location', location);

            axios.post(
                            custom_file_upload_url,
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
                                window.location = 'http://localhost:3000/Challan/Make';
                        
                          })
                        .catch(err => {
                            console.log(err);
                        })
          
        };

        const handleChangevehicleno = event => {
            
            setvehicleno(event.target.value);
                        
        };
    
        const handleChangeviolationno = event => {
            
             setviolationno(event.target.value);
           
        };
        const handleChangeviolationDate = event => {
            
             setviolationDate(event.target.value);
            
        };
        const handleChangelocation = event => {
            
            setlocation(event.target.value);
        };

        const Logout = ()=>{
            debugger;
            sessionStorage.clear();
            window.location.href = 'http://localhost:3000/subrto/subrtologin';
        }

    
        return (
            
            <div>
                <div style={{float: "right"}} className="myLogoutMargin">
                                <button className='btn btn-primary' 
                                            onClick={Logout}>
                                        Log out
                                    </button>
                    </div>
            <div  class="mx-auto" style={{width: 500, marginTop:30}} >
                <div className="bg-light text-black rounded  border border-primary" style={{opacity:0.9}}>
                    <h1 style={{marginLeft: 55}}>Make Challan</h1>
                    <br/>
                    <form>
                        <div style={{opacity:1.0, paddingLeft:"10px", paddingRight:"10px"}}>
                        <div className="form-group" >
                                <label for="vehicleno">Vehicle No:</label> 
                                <input type="text" name="vehicleno" id="vehicleno" placeholder="Vehicle No" className="form-control" value={vehicleno} onChange={handleChangevehicleno}/>
                            </div>
                            <div className="form-group" >
                                <label for="violationno">Enter Violation No:</label> 
                                <select name="violationno" id="violationno"  onChange={handleChangeviolationno}  class="form-select" aria-label="Default select example">
            <option value="null">Select</option>
            <option value="1">Driving without carrying a valid driving licence</option>
            <option value="2">Drunk driving</option>
            <option value="3">Over speeding</option>
            <option value="4">Signal jumping</option>
            <option value="5">Driving against One Way</option>
            <option value="6">Driving on Footpath</option>
            <option value="7">Parking in No Parking Zone</option>
            </select>
                                {/* <input type="text" name="violationno" id="violationno" placeholder="Violation No" className="form-control" value={violationno} onChange={handleChangeviolationno}/> */}
                            </div>
                            <div className="form-group" >
                                <label for="violationDate">Enter violation Date :</label> 
                                <input type="date" name="violationDate" id="violationDate" placeholder="Violation Date" className="form-control" value={violationDate} onChange={handleChangeviolationDate}/>
                            </div>
                            <div className="form-group" >
                            <img src={violationProofPreview} alt="violationProofPreview" style={{height:'200px',width:'200px'}}/>
                                {/* image input field */}
                                  <input   type="file" onChange={handleViolationProofPreview}/>
                            </div>

                            <div className="form-group" >
                                <label for="location">Enter Location :</label> 
                                <input type="text" name="location" id="location" placeholder="Location" className="form-control" value={location} onChange={handleChangelocation}/>
                            </div>
                             </div>                        
                        <div style={{textAlign:"center" ,marginTop:15}}>
                            <input type="button" className="btn btn-danger rounded-pill" name="submit" value="Challan" onClick={handleSubmitFile} />
                        </div>
                    </form>
                  </div>
            </div>
            </div>
        );
    };
    
    


export default Make;


