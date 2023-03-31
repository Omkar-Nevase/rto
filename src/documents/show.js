import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function Show(props)
{
    const [location, setLocation] = useState("");
    const [message, setmessage] = useState("");
    const history = useHistory();

    const handleLocation = (args)=>
    {
        debugger;
        setLocation(args.target.value);
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
                debugger;
                var result = JSON.parse(helper.responseText);
                if(result)
                {
                  debugger;
                    //Step 1: set the session state that says user is logged in now
                    sessionStorage.setItem("aadhar",result.aadharimg);
                    sessionStorage.setItem("photo",result.photoimg);
                    sessionStorage.setItem("sign",result.birthproofimg);
                    sessionStorage.setItem("birth",result.signatureimg);
                    history.push("/view");
                }
                else
                {
                    clearBoxes();
                    setmessage("Invalid !"); 
                }
            }
        };
        helper.open("POST","http://localhost:8080/documents/showdocs");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({uid: sessionStorage.getItem("uid")}))
    }

    const clearBoxes =()=>
    {
        setLocation("");
    }

    return <div>
                <center>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table>
                        <tbody>
                            <tr>
                                <td className='td'>User ID</td>    
                                <td className='td'>
                                    <input type="text" name="location"
                                            value={location}
                                            onChange={handleLocation}/>
                                </td>
                            </tr>
                            <tr><center>
                                <td className='td'>
                                    <button className='btn btn-primary'
                                            onClick={signIn}>
                                        Show Documents
                                    </button>
                                </td></center>
                            </tr>
                        </tbody>
                    </table>
                    <h6 style={{color: "orangered"}}>{message}</h6>
                </center>
            </div>
}

export default Show




// import React from "react";
// import ReactDOM from "react-dom";

//  function Show() {
//    return (
//      <img 
//      src="file:///localhost:8080/..\IMAGES\abc.png"
//       alt="new"
//       />
//    );
//  }

//  const rootElement = document.getElementById("root");
//  ReactDOM.render(<Show />, rootElement);


//  export default Show;

// function Show(props)
// {
// const [imageData, setImageData] = React.useState({});

//   const getImage = () => {
//     axios.get("http://localhost:8080/IMAGES/abc.png").then((response) => {
//       setImageData(response);
//     });
//   };

//   const displayImage = () => {
//     return (
//       <div>
//         <h1>IMAGE</h1>
//       <div className="img">
//         <img
//           src={`data:image/jpeg;base64,${imageData}`}
//           alt=""
//         />
//       </div>
//       </div>
//     );
//   };

//   }

// export default Show



// import React, { Component } from 'react';

// class show extends Component {
    
//     state = { 
//                 allUsers: []
//             } 

//     componentDidMount(){
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange=()=>{
//             if(helper.readyState==4 && 
//                helper.status==200)
//                {
//                 var result = 
//                     JSON.parse(helper.responseText);
//                     debugger;
//                 this.setState({allUsers: result.data });
//                }
//         };
//         helper.open("GET", "https://localhost");
//         helper.send();
//     }
//     render() { 
//         return (<>
//                   <center> 
//                     <h1>Welcome To User's Page</h1>
//                    </center>  
//                   <hr></hr>
//                     <div className='container'>
//                 {this.state.allUsers.map(user=>
//                     {
//                         return (<div key={user.id}
//                                      className='content'>
//                                 <img 
//                                 src={user.avatar}
//                                 className="photo"/>
//                                 <br></br>
//                                 <h2>
//                                 {user.first_name}
//                                 .
//                                 {user.last_name}
//                                 </h2>
//                                 </div>)
//                     })}
//                     </div>
//                 </>);
//     }
// }
 
// export default show;