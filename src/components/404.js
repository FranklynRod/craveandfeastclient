import { Link } from "react-router-dom";
import './404.css'

const FourZeroFour = () => {
  return(
    <div className="fourohfour">
      <h1 className="fourohfour-header">Oops sorry this page does not exist!</h1>
      <Link to="/"><button className="fourohfour-btn">Enter Here</button></Link>
    </div>
  )}

export default FourZeroFour