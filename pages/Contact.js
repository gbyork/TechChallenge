import Link from 'next/link'
import image from 'next/image'
const Contact = () => {
    return (  
        
        
        
          <div>
          <div className="clearfix">
          <div className="box" style={{background:'#222222'}}>
          
          
          <div><img src="/Logo.png"/></div>
          
          <br></br>
          <h1>Heading 1</h1>
          <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p1>
          </div>
          
          <div className="box" style={{background:'white'}}>
          
           <div style={{paddingTop:'75px'}}></div>
           <div className="home" style={{paddingLeft:'340px'}}><Link href ="/"><a>Home</a></Link></div>

            
          <h2>Heading 2</h2>
          <form method="POST" action="/api/user">
          <input type="text" name="FirstName" placeholder="First Name"/>
          <gap> </gap>
          <input type="text" name="LastName" placeholder="Last Name"/>
          
          <br></br>
          <br></br>
          <input type="text" name="Title" placeholder="Title"/>
          
          <gap> </gap>
          <input type="text" name="Email" placeholder="Email"/>
          
          <br></br>
          <br></br>
          <div style={{paddingLeft:'90px'}}>
          <input type="text" name="Message" placeholder="Message"/>
          </div>
          <br></br>
          <div style={{paddingLeft:'130px'}}>
          <br></br>    
          <input type="submit" value="Submit"/>
          </div>
          </form>
          </div>
        </div>
        </div>
        
        

        
        
       
        
     
    );
}
 
export default Contact;