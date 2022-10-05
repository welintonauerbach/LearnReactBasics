import './app-comp-a.css'
import React, { Component } from "react";

import Elm from '../app-element/AppElement'

export default class DataName extends Component {

    state = {
        name: this.props.name,
        document: this.props.document,
    }

    constructor(props){
        super(props)

        this.setName = this.setName.bind(this)
        this.setDocument = this.setDocument.bind(this)
    }

    setName(e){
        this.setState({name: e.target.value})
    }

    setDocument(e){
        this.setState({document: e.target.value})
    }

    // Será renderizado
    render() {

        const { name, document } = this.state

        return (
            <div>
                <div>
                    <input type="text" placeholder='Nome' value={name} onChange={this.setName}></input>
                    <input type="text" placeholder='Documento' value={document} onChange={this.setDocument}></input>
                    <Elm name={this.props.name} func={this.setName}></Elm>
                </div>
                <h2>Seu Nome: <el-a> {name} </el-a></h2>
                <h3>Seu Documento: <el-b> {document}</el-b></h3>
            </div>
        )
    }
}




//export default 