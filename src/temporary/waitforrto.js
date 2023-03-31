import wait from '../logos/police-car.gif';
import Sidebar from '../Sidebar';

function Waitforrto()
{
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
            <div className='container'>
                <Sidebar></Sidebar>
                <div className='myDivMargin'>
                    <center>
                    <br/><br/><br/>
                    <h1>Wait for rto approval</h1>
                    <img src={wait} alt="waiting" className="myImage1"/>
                    </center>
                </div>
            </div>

            </div>)
}

export default Waitforrto;