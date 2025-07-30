import './Footer.css';

function Footer() {
    return (

        <div className='footer'>
            <p className='footerParagraph'>© 2025 Ereny Remon. All rights reserved.</p>
        
        <div className='footerDiv'>
           <a className='footerLink' href="https://github.com/ErenyRemon"  target="_blank"  rel="noopener noreferrer">  <button className='footerButton'>GitHub</button> </a>
            <a className='footerLink' href="https://www.linkedin.com/in/ereny-remon" target="_blank" rel="noopener noreferrer"><button  className='footerButton'>LinkedIn</button></a>

        </div>
        </div>

    );
}


export default Footer;