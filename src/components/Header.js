import { Component } from "react";
import './Style.css'
export default class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="nav">
                <h1>Ben Resume</h1>
                <ul>
                    <li className="nav-pills"><a href="#">Introduction</a></li>
                    <li className="nav-pills"><a href="#">About Me</a></li>
                    <li className="nav-pills"><a href="#">Reviews</a></li>
                    <li className="nav-pills"><a href="#">Contact</a></li>
                </ul>
                <span id="sp"><a href="#" id="download">Download CV</a></span>
            </div>
        )
    }
}