import Nav from "../Navbar";
import greenBanner from "../../assets/images/green_banner.png"
import "./style.css"
const Header = () => {
  return (
    <header style={{border: "1px dashed green"}}>
      <img style={{width: "100%", position: "relative"}} src={greenBanner}/>
      <h1 style={{position: 'absolute', top: "35%", left: "30%", color: "white"}}>Corey Q. Yates</h1>
      <h2 style={{position: 'absolute', top: "45%", left: "33%", color: "white"}}>Software Developer</h2>
      <Nav />
    </header>
  )
}

export default Header