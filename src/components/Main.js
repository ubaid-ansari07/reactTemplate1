import { Component } from "react";

export default class Main extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 text-left" id="content1">
                        <h1>This is Ben's Resume</h1>
                        <p>Ben Resume HTML Template is brought to you by Tooplate website. You can feel free to edit and use this page for your small site. You are allowed to use this HTML template for any kind of purpose.</p>
                        <p>However, please do not re-distribute the downloadable template ZIP file on any template collection website. This is strongly prohibited. Please contact Tooplate for more information.</p>
                        <ul id="uu">
                            <li><b>Full Name :</b>&nbsp;&nbsp;&nbsp;&nbsp; Ben Wilson </li>
                            <li><b>Date of Birth</b>:&nbsp;&nbsp;&nbsp;&nbsp; 26 September 1999</li>
                            <li><b>Website</b> :&nbsp;&nbsp;&nbsp;&nbsp; company.co</li>
                            <li><b>Email</b> :&nbsp;&nbsp;&nbsp;&nbsp; hello@company.co</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div id="mainimg">
                            
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <h1>Integer volutpat</h1>
                        <p>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                    </div>
                    <div className="col-md-4">
                        <h1>Mauris semper</h1>
                        <p>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                    </div>
                    <div className="col-md-4">
                        <h1>Integer id neque</h1>
                        <p>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                    </div>
                </div>
            </div>
        )
    }
}