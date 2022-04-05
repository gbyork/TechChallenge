import styles from '../styles/Home.module.css'
import Link from 'next/link'


import Image from 'next/image'





var Userlist1 = ['Matt Johnson , ','Matt Johnson , ','Bart Paden , ','Ryan Doss , ','Jared Malcolm , '];




let Userlist2 = [
'Matt Johnson , ','Bart Paden , ','Bart Paden , ','Jordan Heigle , ','Jordan Heigle , ','Tyler Viles '];


var Userlist3 = Userlist1.concat(Userlist2)
var Finallist = Userlist3.filter((Name, pos) => Userlist3.indexOf(Name) === pos)
console.log(Finallist);


 


export default function Home() {
    return (
    
    <div className="main_color">
   
    <div className="main_heading">
    
    <img src="/Logo.png"/>
    <div>
    
    <div className="container1">
    
    <div><Link href ="/Contact"><a>Contact</a></Link></div>
    
    </div>

    <div className="grid-container">
        <div><img src="/Talkie.png" width={33} height={57}/>
        <h2>Heading 2</h2>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p2>
        <br></br>
        <br></br>
        <button>Learn More</button>
        </div>
        <div> <img src="/Rabbit.png" width={53} height={57} />
        <h2>Heading 2</h2>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p2>
        <br></br>
        <br></br>
        <button>Learn More</button>
        </div>
        <div> <img src="/Shield.png" width={53} height={57}/>
        <h2>Heading 2</h2>
        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p2>
        <br></br>
        <br></br>
        <button>Learn More</button>
        </div>
    </div>

    </div>
    
    <div>
    
    <h1>Heading 1</h1>     
    <p1>Below are users</p1>
    <div><p1>{Finallist}</p1></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    )}