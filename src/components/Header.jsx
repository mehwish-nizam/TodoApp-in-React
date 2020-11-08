import React, {Component} from "react"
import "../App.css"

class Header extends Component{
    render(){
        return(
            <div>
            <h1 className = "header">{this.props.currentPage}</h1>
            <button onClick = {()=>this.props.get_data("Insta")}>Change</button>
            </div>
        )
        }
}
export default Header;