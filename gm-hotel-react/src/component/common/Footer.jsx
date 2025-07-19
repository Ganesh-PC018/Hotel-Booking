
function Footer(){ 
    return(
        <footer className="footer-container">
            <span className='my-footer'>
                <strong>GM International</strong> | All Right Reserved &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
}   
export default Footer;