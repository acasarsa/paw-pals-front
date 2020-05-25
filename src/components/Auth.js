import React from 'react';

class Auth extends React.Component {

    state = {
        // username: '',
        password: '',
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render(){

        const {password} = this.state
        const {setCurrentUser, username, handleUsername} = this.props
        console.log(this.props)
        return (
        <form >
            <h3>Sign In</h3>
            <div>
                <label>Username:</label>
                <input onChange={handleUsername} type="text" name="username" value={username} placeholder="Enter Username" />
            </div>
            <div>
                <label>Password</label>
                <input onChange={this.handleChange} type="password" name="password" value={password}  placeholder="Enter password" />
            </div>
            <button onClick={() => setCurrentUser(username)}>Sign In</button>
        </form>
        )
    }
}
export default Auth;

// onSubmit={this.handleSubmit}