import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import appointment from '../logos/calendar.png';

function Appointment(props)
{
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [message, setmessage] = useState("");
    const history = useHistory();

    const handleLocation = (args)=>
    {
        debugger;
        setLocation(args.target.value);
    }

    const handleDate = (args)=>
    {
        debugger;
        setDate(args.target.value);
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
                    history.push("/temporary/waitforrto");
            }
        };
        helper.open("POST","http://localhost:8080/temporary/appointment");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({location: location, date: date,uid:sessionStorage.getItem("uid")}))
    }

    const clearBoxes =()=>
    {
        setLocation("");
        setDate("");
    }

    const Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
    }

    return <div>
                    <div style={{float: "right"}} className="myLogoutMargin">
                                <button className='btn btn-primary' 
                                            onClick={Logout}>
                                        Log out
                                    </button>
                    </div>
                    <div className='container'>
                    <Sidebar></Sidebar>
                    <div ><br/><br/>
                    <table className="myTableMarging2">
                        <tbody>
                            <tr >
                                <td colSpan={2}>
                                <center><img src={appointment} alt="pay challan" className="myImage2"/> </center>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><br/><h3>Book Appointment</h3></td>
                            </tr>
                            <tr>
                                <td className='td'>Center</td>    
                                <td className='td'>
                                <select name="location" onChange={handleLocation} >
                                <option value="null">Select</option>
                                    <option value="mumbai">MUMBAI</option>
                                    <option value="pune">PUNE</option>
                                    <option value="satara">SATARA</option>
                                    <option value="karad">KARAD</option>
                                    <option value="kolhapur">KOLHAPUR</option>
                                    </select><br></br>
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>Date</td>    
                                <td className='td'>
                                    <input type="date" name="date"
                                            value={date}
                                            onChange={handleDate}/>
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>
                                    <button className='btn btn-primary'
                                            onClick={signIn}>
                                        Book Appointment
                                    </button>
                                </td>
                                <td className='td'>
                                    <button className='btn btn-danger'
                                            onClick={clearBoxes}>
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <h6 style={{color: "orangered"}}>{message}</h6>
                
            </div>
}

export default Appointment