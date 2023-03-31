import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Common.css';

function Sidebar()
{

return(
		<div className='col-lg-2 '> 
<nav className='sidebar card py-2 mb-4 myBgColor'  style={{height : '100%'}}>
<ul className='nav flex-column'>
	<li class="nav-item">
		<a class="nav-link" href="/profile"> Profile </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#"> Documents <b class="float-end">&raquo;</b> </a>
		<ul class="submenu dropdown-menu">
			<li><a class="nav-link" href="/documents/insert"> Update </a></li>
		    <li><a class="nav-link" href="/documents/viewdocs"> View </a></li>
		</ul>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/temporary/templicence"> Temporary Licence </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/permanent/permlicence"> Download Licence </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/challan/pay"> Pay Challan </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/trafficsigns"> Traffic Guidelines </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/vehicledrivingtips"> Vehicle Driving Guidelines </a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="/actrulesandpolicies"> Rules </a>
	</li>
</ul>
</nav>
</div>);

}


export default Sidebar;