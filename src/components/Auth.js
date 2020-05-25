import React from 'react';



class Auth extends React.Component {
    state = {
        username: '',
        password: ''
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = this.state
        let newLogin = {username, password}
        fetch("http://localhost:3000/api/v1/dogs", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({newLogin})
        })
        .then(resp => resp.json())
        .then(data => console.log(data)) 
    }
    

    addInfo = (event) => {
        const {value} = event.target
        this.setState({[event.target.name]: value})
    }

    render(){
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            <div>
                <label>Username:</label>
                <input onChange={this.addInfo} type="text" name="username" placeholder="Enter Username" />
            </div>

            <div>
                <label>Password</label>
                <input onChange={this.addInfo} type="password" name="password"  placeholder="Enter password" />
            </div>

            <button type="submit">Sign In</button>
          
        </form>
       )  
    }
}
export default Auth;
// onClick={() => history.push('/dogs')}


