import Link from 'next/link'
const Contact = () => {
    return (  
        <div className="clearfix">
        <div className="box" style="background-color:#bbb"></div>
        <img src="/Logo.png" />
        <h1>Heading One</h1>
        <p>lorem</p>
        
        <div className="container2">
        
        <div><Link href ="/"><a>Home</a></Link></div>
        
        </div> 
        
        <div>
<h1>Welcome to contact page</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
       
    );
}
 
export default Contact;