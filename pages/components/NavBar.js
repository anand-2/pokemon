import react from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import pokemon from "../pokemon.png"
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'



function NavbarComponent() {
    return <Navbar bg="dark" variant="dark" className={styles.navBar}>
          <div className={styles.navImg}>
               <img  src="https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw" width="50" height="50" alt="" />
              <img className={styles.navImg} src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"  height="70"  alt="" />
          </div>
 
        <Nav className="mr-auto" />
        <Nav className="navBar">
        </Nav>
          
    </Navbar >
    
}

export default NavbarComponent;