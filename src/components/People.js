import { Component } from "react";

export default class People extends Component{
    constructor(){
        super()
    }
    render(){
        return(<div className="container-fluid" style={{backgroundColor:'whitesmoke',marginTop:'50px'}}>
            <div className="row">
                <div className="col-md-7 m-auto p-5">
                    <div className="row text-center">
                        <h1>What People say</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div id="test1"></div>
                                </div>
                                <div className="col-sm-8">
                                    <p>Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                                    <h3>Ben</h3>
                                    <p>Art Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row">
                                <div className="col-sm-4">
                                <div id="test2"></div>
                                </div>
                                <div className="col-sm-8">
                                <p>Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                                <h3>Marie</h3>
                                    <p>Markiting Consultant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row">
                                <div className="col-sm-4">
                                <div id="test3"></div>
                                </div>
                                <div className="col-sm-8">
                                <p>Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                                <h3>Jen</h3>
                                <p>Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}