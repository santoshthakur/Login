import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class FormLogin extends Component {
    constructor(props){
        super(props)
        let loggedIn= true;
        this.state={
            username:'',
            password:'',
            loggedIn:'',
            errorMessage:''

        }
        this.submitHandler=this.submitHandler.bind(this)
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
    }
    submitHandler(e){
        e.preventDefault()
        const {username,password,loggedIn,errorMessage}= this.state;
        if(loggedIn){
            return <Redirect to="/welcom"  />
        }
        if(username === "Santosh" && password === "123456" ){
            this.setState({
                loggedIn:true
            })
        }
        else if(username !== "Santosh" && password !== "123456"){
            this.setState({
                errorMessage:'Enter correct user/password'
            })
        }
    }
    render() {
        const {username,password,errorMessage}= this.state
        return (
            <form className="frmsp" onSubmit={this.submitHandler}>
                <div className="errormes">{errorMessage}</div>
               <div className="divRow"><input type="text" placeholder="User Name" name="username" value={username} onChange={this.changeHandler}  className="iput"/></div>
               <div className="divRow"><input type="text" placeholder="Password" name="password" value={password} onChange={this.changeHandler} className="iput"/></div>
               <button className="btn">Submit</button> 
            </form>
        )
    }
}

export default FormLogin
