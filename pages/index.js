import styles from '../styles/Home.module.css'
import Link from 'next/link'


import Image from 'next/image'





var Userlist1 = [{'ID': 1,
'FirstName': 'Matt',
'LastName': 'Johnson'
},
{'ID': 1,
'FirstName': 'Matt',
'LastName': 'Johnson'
},
{'ID': 2,
'FirstName': 'Bart',
'LastName': 'Paden'
},
{'ID': 3,
'FirstName': 'Ryan',
'LastName': 'Doss'
},
{'ID': 4,
'FirstName': 'Jared',
'LastName': 'Malcolm'
},

];




var Userlist2 = [{'ID': 1,
'FirstName': 'Matt',
'LastName': 'Johnson'
},
{'ID': 2,
'FirstName': 'Bart',
'LastName': 'Paden'
},
{'ID': 2,
'FirstName': 'Bart',
'LastName': 'Paden'
},
{'ID': 5,
'FirstName': 'Jordan',
'LastName': 'Heigle'
},
{'ID': 5,
'FirstName': 'Jordan',
'LastName': 'Heigle'
},
{'ID': 6,
'FirstName': 'Tyler',
'LastName': 'Viles'
},
];

var Userlist3 = Userlist1.concat(Userlist2)
var Finallist = Userlist3.filter((item, pos) => Userlist3.indexOf(item) === pos)
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
    <p1>Click this link to display users</p1>
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