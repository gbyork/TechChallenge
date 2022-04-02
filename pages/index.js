import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
export default function Home() {
    return (

    <div>
    <div className="main_heading">
    <div>
    <img src="/Logo.png"/>
    <div className="container1">
    
    <div><Link href ="/Contact"><a>Contact</a></Link></div>
    
    </div>

    <div className="grid-container">
        <div><img src="/Talkie.png" width={72} height={75}/>
        <h1>Heading 1</h1>
        <p style={{color:'grey'}}>ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris nisi ut aliquip ex ea commodo consequat.,consectetur adipiscing elit consequat quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
        <button style={{background:'gold'}}>Learn More</button>
        </div>
        <div> <img src="/Rabbit.png" width={72} height={75}/>
        <h1>Heading 1</h1>
        <p style={{color:'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat.ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button style={{background:'gold'}}>Learn More</button>
        </div>
        <div> <img src="/Shield.png" width={72} height={75}/>
        <h1>Heading 1</h1>
        <p style={{color:'grey'}}>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button style={{background:'gold'}}>Learn More</button>
        </div>
    </div>

    </div>
    </div>
    <div>
    <h1>Home Page</h1>     
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    </div>
    
    </div>
    )}