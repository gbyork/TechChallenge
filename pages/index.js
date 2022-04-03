import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
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
    <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p1>
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