import mailsign from './logos/icon-mail-circle.jpeg'

function Contact()
{
    return <div><br/>
        <center>
            <h1> Contact Us </h1>
            </center>

        <div class="contact-us-content">
                <div class="left-position"><center><img src={mailsign}/></center></div>
                <h2 class="bottom-space">Write to Us:</h2>
        
            <div class="bottom-space">
                For any query regarding this website, please contact us.:- 
            </div>
            <table class="bottom-space table table-bordered table-responsive table-condensed  table table-width-oneforth">
                <tbody><tr>
                    <td class="font-bold"> Project Partners: </td>
                    <td>
                        <table class="bottom-space table table-responsive table-condensed  table table-width-oneforth">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                        <tr>
                            <td>Pankaj Kare</td>
                            <td>pankajskare18@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Omkar Nevase</td>
                            <td>omkarnevase44@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Vaibhav Metkari</td>
                            <td>vaibhavmetkari70@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Swapnil Jadhav</td>
                            <td>Swapniljadhav@gmail.com</td>
                        </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
                {/* <tr>
                    <td class="font-bold"> Designation:</td>
                    <td>Under Secretary (MVL) </td>
                </tr>
                <tr>
                    <td class="font-bold">Email-id:</td>
                    <td>wim[dot]rth[at]nic[dot]in</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    </div>
}

export default Contact;