import React from 'react';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }



    loginChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setLocalStorage = e => {
        
        if(this.state.username.length > 0 && this.state.password.length > 0) {
            localStorage.setItem('User Name', this.state.username)
            localStorage.setItem('Password', this.state.password)
        } else {
            alert('fill out the form dum dum')
        }
        
    }
     render() {
        return(
            <div>
                <form onSubmit={this.setLocalStorage}>
                    <input
                    placeholder='User Name'
                    name='username'
                    value= {this.state.username}
                    onChange={this.loginChangeHandler}
                    
                    />
                    
                    <input
                     placeholder='Password'
                     name='password'
                     value= {this.state.username}
                     onChange={this.loginChangeHandler}
                     type='password'
                    />
                    <button>Log In</button>
                    {/* <button type='submit'>Login number 2</button> */}
                </form>
            </div>
        )
    }
}

export default Login;