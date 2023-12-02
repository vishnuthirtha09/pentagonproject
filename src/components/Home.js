import React from 'react'
import "../css/Home.css"
import image from './image/cattto.jpg'
 const Home = () => {
return (
    <div >
         <body>
        <p><h1><center>WELCOME TO OUR BOOK STORE</center></h1></p>
        <center>
        <img style={{paddingTop: '360px'}} src={image} alt="/" />
        </center>
        </body>
    </div>
  )
}  

export default Home ;