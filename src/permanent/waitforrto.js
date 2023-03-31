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
            <center><h1>Wait for rto approval</h1></center>
            </div>)
}

export default Waitforrto;