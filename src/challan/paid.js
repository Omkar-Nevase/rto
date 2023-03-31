import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


class paid extends Component {
    state = { 
                allChallans: [],
                vehicleno:sessionStorage.getItem("vehicleno"),
                url:"http://localhost:8080/challan/documents/"
            } 
    
    

    componentDidMount(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
               {
                var result = JSON.parse(helper.responseText);
                    debugger;
                this.setState({allChallans: result });
               }
        };
        helper.open("POST", "http://localhost:8080/challan/pay");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({vehicleno: this.state.vehicleno}));
    }
 
    pay(args){
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
               {
                window.location.reload(false);
                    
               }
        };
        helper.open("POST", "http://localhost:8080/challan/paid");
        helper.setRequestHeader("Content-Type", "application/json")
        debugger;
        helper.send(JSON.stringify({challanNo:args.target.value}))
    }

    

    render() { 
        return (<div className='table-responsive'>
  
                  <center> 
                            <h2>All Challans</h2>
                            <table className='table table-bordered content'>
                            <tbody>
                                <tr>
                                    <th>challan No</th>
                                    <th>violation Desc</th>
                                    <th>violation Date</th>
                                    <th>location</th>
                                    <th>Amount</th>
                                    <th colSpan={2}>Violation Proof</th>
                                    <th>Pay</th>
                                </tr>
                            {
                               this.state.allChallans.map(Challan=>
                                {
                                   
                                            return (<tr key={Challan.challanNo}>
                                                <td>
                                                    {Challan.challanNo}
                                                </td>
                                                <td>
                                                    {Challan.violationDesc}
                                                </td>
                                                <td>
                                                    {Challan.violationDate}
                                                </td>
                                                <td>
                                                    {Challan.location}
                                                </td>
                                                <td>
                                                    {Challan.amount}
                                                </td>
                                                <td colSpan={2}>
                                                   <img src={this.state.url+Challan.violationProof}/>
                                                </td>
                                                 <td>
                                                    <button  onClick={this.pay} value={Challan.challanNo} name="paid" class="btn btn-outline-primary">Pay</button>
                                                </td>
                                                                                               
                                            </tr>)
                                   
                                        
                                })
                            }
                            </tbody>
                        </table>
                        </center> 
                    </div>)
    }
}
 
export default paid;