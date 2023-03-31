function Wait()
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
            <h1>You are failed!!!!</h1>
            </div>)
}

export default Wait;