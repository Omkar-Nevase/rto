
import { Link, Route, Router, Switch } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import Home from "./home";
import Login from "./Login";
import Contact from "./contact";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteRTO from "./ProtectedRouteRTO";
import { Navbar, NavDropdown, Nav} from "react-bootstrap";
import Insert from "./documents/insert";
import Payfee from "./temporary/payfee";
import Appointment from "./temporary/appointment";
import Templicence from "./temporary/templicence";
import Registration from "./Registration"
import Test from "./temporary/test";
import Waitforrto from "./temporary/waitforrto";
import Wait from "./temporary/wait";
import Rtologin from "./rto/rtologin";
import Dashboard from "./rto/dashboard";
import Drivetest from "./rto/drivetest";
import Show from "./documents/show";
import Permappointment from "./permanent/permappointment";
import Permpayfee from "./permanent/permpayfee";
import Permlicence from "./permanent/permlicence";
import Applyforpermlicence from "./temporary/applyforpermlicence";
import Make from "./challan/make";
import Pay from "./challan/pay";
import paid from "./challan/paid";
import SubRtologin from "./subrto/subrtologin";
import Learntest from "./rto/learntest";
import AboutUs from "./about";
import viewdocs from "./documents/viewdocs";
import ProtectedRouteSubRTO from "./ProtectedRouteSubRTO ";
import actrulesandpolicies from "./actrulesandpolicies";
import Vehicledrivingtips from "./vehicledrivingtips";
import TrafficSigns from "./trafficsigns";
import Documents from "./documents/insert";
import WebsitePolicies from "./websitepolicies";
import FeeUSerCharges from "./feeusercharges";



function MainUI()
{
    return<div class="col-lg-auto col-sm-auto">
        <div class="col-lg-auto col-sm-auto">
        <Header></Header>
        </div>
        <div>
            <div class="col-lg-auto col-sm-auto">
            <Navbar variant="dark" expand="lg" className="myHeader col-lg-auto col-sm-auto">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        <Nav.Link href="/actrulesandpolicies">Acts and Policies</Nav.Link>
                        <Nav.Link href="/vehicledrivingtips">Vehicle Driving Guidelines</Nav.Link>
                        <Nav.Link href="/trafficsigns">Traffic Guidelines</Nav.Link>
                        <Nav.Link href="/challan/pay">Pay Challan</Nav.Link>
                        <Nav.Link href="/registration">Registration</Nav.Link>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">User</NavDropdown.Item>
                        <NavDropdown.Item href="/rto/rtologin">RTO</NavDropdown.Item>
                        <NavDropdown.Item href="/subrto/subrtologin">Sub-RTO</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                
                </div>
                
        </div>


        <div class="col-lg-auto col-sm-auto row myDiv ">
        <Switch>
        
        {/* USER */}
        <ProtectedRoute path='/document/insert' component={Insert}/>
        <ProtectedRoute path='/temporary/payfee' component={Payfee}/>
        <ProtectedRoute path='/temporary/appointment' component={Appointment}/>
        <ProtectedRoute path='/temporary/templicence' component={Templicence}/>
        <ProtectedRoute path='/temporary/test' component={Test} />
        <ProtectedRoute path='/temporary/waitforrto' component={Waitforrto}/>
        <ProtectedRoute path='/temporary/wait' component={Wait}/>
        <ProtectedRoute path='/documents/insert' component={Documents}/>
        <ProtectedRoute path="/temporary/applyforpermlicence" component={Applyforpermlicence}/>
        <ProtectedRoute path='/permanent/permappointment' component={Permappointment}/>
        <ProtectedRoute path='/permanent/permpayfee' component={Permpayfee}/>
        <ProtectedRoute path='/permanent/permlicence' component={Permlicence}/>
        <ProtectedRoute path='/permanent/waitforrto' component={Waitforrto}/>


        {/* Open */}
        <Route path='/rto/rtologin' component={Rtologin}/>
        <Route path='/subrto/subrtologin' component={SubRtologin}/>
        <Route path='/contact' exact  component={Contact}  />
        <Route path='/Login' exact  component={Login} />
        <Route path='/' exact  component={Home} />
        <Route path='/registration' component={Registration}/>
        <Route path='/home' exact  component={Home} />
        <Route path='/about' exact  component={AboutUs} />
        <Route path='/show' exact  component={Show} />
        <Route path='/documents/viewdocs' exact  component={viewdocs} />
        <Route path='/actrulesandpolicies' exact  component={actrulesandpolicies} />
        <Route path='/vehicledrivingtips' exact  component={Vehicledrivingtips} />
        <Route path='/trafficsigns' exact  component={TrafficSigns} />
        <Route path='/websitepolicies' exact  component={WebsitePolicies} />
        <Route path='/feeUSercharges' exact  component={FeeUSerCharges} />





        {/* Challan Routes */}
        <Route path='/challan/make' exact  component={Make} />
        <Route path='/challan/pay' exact  component={Pay} />
        <Route path='/challan/paid' exact  component={paid} />


        {/* RTO */}
        <Route path='/rto/learntest' component={Learntest}/>
        <Route path='/rto/dashboard' component={Dashboard}/>
        <Route path='/rto/drivetest' component={Drivetest}/>



        <Route path='*' exact  component={Home} />


        

        </Switch> 
        </div>
        <div class="col-lg-auto col-sm-auto">
        <Footer></Footer>
        </div>


    </div>
}



export default MainUI;
