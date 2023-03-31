function Templicence()
{
    const Logout = ()=>{
        debugger;
        sessionStorage.removeItem("uid");
        window.location.href = 'http://localhost:3000/Login';
    }

    const Download=()=>{
        window.location.href = 'http://localhost:8080/pdf/createPdf/' + sessionStorage.getItem("uid");
    }

    return (<div>
                 <div style={{float: "right"}} className="myLogoutMargin">
                    <button className='btn btn-primary' 
                                onClick={Logout}>
                            Log out
                        </button>       
                </div>

                <br/>
                <div className="myMargin">
                <h1> Temporary Licence </h1>
                <br/>
                <button onClick={Download} class="btn btn-outline-primary">Download TempLicence</button>
                </div>
            </div>)
}

export default Templicence;