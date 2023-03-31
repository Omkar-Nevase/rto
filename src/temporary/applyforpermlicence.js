import Sidebar from "../Sidebar";

function Applyforpermlicence()
{
    const Download=()=>{
        window.location.href = 'http://localhost:8080/pdf/createPdf/' + sessionStorage.getItem("uid");
    }

    return (<div>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="myMargin">
                <br/><button onClick={Download} class="btn btn-outline-primary">Download TempLicence</button><br/><br/>
                    <a href="/permanent/permpayfee">Apply For Permanent Licence</a>
                </div>
            </div>

            </div>)
}

export default  Applyforpermlicence;