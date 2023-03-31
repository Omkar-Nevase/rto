import '../node_modules/bootstrap/dist/css/bootstrap.css';
import disp from './DashBoard_Images/illustration-police-give-ticket.png';
import driving from './DashBoard_Images/v-driving-school-license.jpg';
import learner from './DashBoard_Images/v-learners-license-services.jpg';
import test from './DashBoard_Images/v-online-test-appointment.jpg';
import online from './DashBoard_Images/v-driving-license.jpg';
import rules from './DashBoard_Images/v-act-policy.png';
import guide from './DashBoard_Images/v-citizen-guide.png';
import fees from './DashBoard_Images/fees.jpg';
import traffic from './DashBoard_Images/traffic.png';
import './Common.css';
import Slideshow from './slideimage';
// import disp from './DashBoard_Images/RTO-Management-System-Home-Page1.png';

function Home()
{
    return(
    <div> 
        <section class="driving-license-services">

        <div><center>
    {/* <img  src={disp} class="img-fluid" alt="Home Page" style={{padding : '10px'}}></img> */}
    <Slideshow></Slideshow>
    
    
    
    
    
    
    </center>
    </div>
    <div className='div1'></div>

            <div class="liscence-related-services">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="center-position top-space-25">License  Related Services </h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-height-2">
                            Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online test for learner's licence, etc.
                        </p>
                    </div>
                </div>
            </div>
            
    
    <div classname="container">
        <div class="row homeDiv">

        <div class="rowDiv">
        <div class="service-sec center-position" /*onMouseOver={}*/>
            <p class="center-position"> 
            <a href="./registration">
            <img src={learner} alt="Learners License"/> 
            </a>
            </p>
            <h5 class="center-position">Learners License</h5>
            <p class="left-position">License registration on your fingertips </p>
            <a href="./registration"class="bttn-more">More</a>
        </div>
        </div>

        <div class="rowDiv">
        <div class="service-sec center-position">
            <p class="center-position"> 
            <a href="./login">
            <img src={driving} alt="Driving School"/> 
            </a>
            </p>
            <h5 class="center-position">Driving licence</h5>
            <p class="left-position">One place for application of Driving School License</p> 
            <a href="./login" class="bttn-more">More</a>
        </div>
        </div>

        <div class="rowDiv">
            <div class="service-sec center-position">
                <p class="center-position"> 
                <a href="./login">
                <img src={test} alt="Online Test/Appointment"/> 
                </a>
                </p>
                <h5 class="center-position">Online Test</h5>

                <p class="left-position">Book Online test appointments </p>    <br/>
                <a href="./login" class="bttn-more">More</a>
            </div>
        </div>
       
        <div class="rowDiv">
        <div class="service-sec center-position">
            <p class="center-position"> 
            <a href="./login">
            <img src={online} alt="Online Services"/> 
            </a>
            </p>
            <h5 class="center-position">Other Services</h5>
            <p class="left-position">Explore the plethora of services related to Driving License</p>    
            <a href="./login" class="bttn-more">More</a>
        </div>
        </div>
        
    </div>
</div>
<div classname="container" style={{paddingLeft : '200px'}}>
<div class="service-sec center-position div2">
    <img  src={disp} class="img-fluid" alt="Home Page" style={{paddingTop : '35px'}}></img><br></br>
    <a href="/challan/pay" class="bttn-more">   Pay Challan   </a>
    </div>
    </div>
    <div class="liscence-related-services">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="center-position top-space-25"> Other Products & Services </h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-height-2">
                        Easy access to all the necessary information for various transport services
                        </p>
                    </div>
                </div>
            </div>
            
    
    <div classname="container">
        <div class="row homeDiv">

        <div class="rowDiv">
        <div class="service-sec center-position" /*onMouseOver={}*/>
            <p class="center-position"> 
            <a href="./actrulesandpolicies">
            <img src={rules} alt="Learners License"/> 
            </a>
            </p>
            <h5 class="center-position">Acts, Rule and Policies</h5>
            <p class="left-position">Motor Vehicle Rules and related Acts</p>
            <a href="./actrulesandpolicies"class="bttn-more">More</a>
        </div>
        </div>

        <div class="rowDiv">
        <div class="service-sec center-position">
            <p class="center-position"> 
            <a href="./vehicledrivingtips">
            <img src={guide} alt="Driving School"/> 
            </a>
            </p>
            <h5 class="center-position">Citizen Guide</h5>
            <p class="left-position">A guide to acquaint you to the most frequently used services.</p> 
            <a href="./vehicledrivingtips" class="bttn-more">More</a>
        </div>
        </div>

        <div class="rowDiv">
            <div class="service-sec center-position">
                <p class="center-position"> 
                <a href="./trafficsigns">
                <img src={traffic} alt="Online Test/Appointment"/> 
                </a>
                </p>
                <h5 class="center-position">Traffic Guide</h5>

                <p class="left-position"> All you need to know about the Central Motor Vehicles Rules </p>
                <a href="./trafficsigns" class="bttn-more">More</a>
            </div>
        </div>
       
        <div class="rowDiv">
        <div class="service-sec center-position">
            <p class="center-position"> 
            <a href="./feeUSercharges">
            <img src={fees} alt="Online Services"/> 
            </a>
            </p>
            <h5 class="center-position">Fee & Charges</h5>
            <p class="left-position">Explore the plethora of services related to Driving License</p>    
            <a href="./feeUSercharges" class="bttn-more">More</a>
        </div>
        </div>
        
    </div>
</div>
  
</section>
</div>)
}

export default Home;
