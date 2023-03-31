import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Common.css'
import rto from './logos/rto1.jpg'
import g20 from './logos/g20-logo.png'


function Header()
{
    return(
        <div className='row-row-cols-auto'>
            <div className='myHeader'></div>
            <div className='headerStrip'>
                <div className='col-lg-auto col-sm-auto'>
                <img src={rto} alt="RTO" className='headerLogo'/></div>
                <div className='col-lg-auto col-sm-auto'>
                <h1 className='headerContent ' style={{paddingLeft : '15px'}}>RTO Management System</h1>
                </div>
                <div className='col-lg-auto col-sm-auto'>
                <img src={g20} alt="G20" className='headerLogo1'/></div>
        </div>
    </div>
    )
    
}


export default Header;