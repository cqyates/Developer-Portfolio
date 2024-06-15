import Nav from "../Navbar";
import greenBanner from "../../assets/images/green_banner.png"
import "./style.css"
const JumboTron = () => {
  return (
    <section style={{width: "100%", position: "relative", border: "1px solid pink"}}>
      <img style={{width: "100%", borderRadius: "10px", boxShadow: "1px 3px 12px white"}} src={greenBanner}/>
      <h1 style={{position: 'absolute'}}>Corey Q. Yates</h1>
      <h2 style={{position: 'absolute'}}>Software Developer</h2>
      <Nav/>
    </section>
  )
}

export default JumboTron