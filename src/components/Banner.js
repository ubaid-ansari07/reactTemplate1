import { Component } from "react";

export default class Banner extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 offset-md-3">
                    <div id="bannerimg">
                        
                    </div>
                   </div>
                   <div className="col-md-3 m-auto">
                        <h3 id="ben">&#9995; Ben, a digital nomad</h3>
                        <h3 id="com">hello@company.com</h3>
                   </div>
                </div>
            </div>
        )
    }
}