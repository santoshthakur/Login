import React,{Component} from 'react'
import Logo from '../images/Logo.png'
import { NavLink } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            cmp:"Company"  
        }
    }
    render(){
        return(
            <nav className="navbartop bg-w">
                <div className="df df-jc df-ai wd htg">
                <div><img src={Logo} alt={this.props.cmp} /></div>
                <div>
                <ul className="pages">
                    <li><NavLink to="/"  exact={true}>Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>

                    <li><NavLink to="/contact">Contact Us</NavLink></li>

                </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header