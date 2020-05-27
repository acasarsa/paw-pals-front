import React from 'react';
import { Link } from 'react-router-dom';

class Auth extends React.Component {

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    

    render(){

        // const {password} = this.state
        const {setLoggedInDog, username, handleUsername, loggedInDog, handleSignOut} = this.props

        if (!loggedInDog ) {
            return (
                <form >
                    <h3>Sign In</h3>
                    <div>
                        <label>Username:</label>
                        <input onChange={handleUsername} type="text" name="username" value={username} placeholder="Enter Username" />
                    </div>
                    {/* <div>
                        <label>Password</label>
                        <input onChange={this.handleChange} type="password" name="password" value={password}  placeholder="Enter password" />
                    </div> */}
                    <button onClick={(event) => setLoggedInDog(event, username)}><Link to="/dogs">Sign In</Link></button>
                </form>
                )
        } else {
            return (
                <form >
                    <h3>Sign Out</h3>
                    <div>
                        <p>Come back soon!</p>
                    </div>
                    <button onClick={(event) => handleSignOut(event)}>Sign Out</button>
                </form>
            )
        }
    }
}
export default Auth;


