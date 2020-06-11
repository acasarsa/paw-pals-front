import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom'



class Auth extends React.Component {

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    style =  () =>  {
        return {
   background: 'palevioletred',
   fontSize: '1em',
   margin: '1em',
   padding: '0.25em 1em',
   border: "2px solid palevioletred",
   borderRadius: "3px",
   width: "fit-content",
   cursor:  "pointer",
   color: "white"
   }
}

    render(){

        // const {password} = this.state
        const {setLoggedInDog, username, handleUsername, loggedInDog, handleSignOut} = this.props

        if (!loggedInDog ) {
            return (
                <form >
                    <h3>Sign In</h3>
                    <div>
                        <label>Username:</label>
                        <input onChange={handleUsername}
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter Username" />
                    </div>
                    {/* <div>
                        <label>Password</label>
                        <input onChange={this.handleChange} type="password" name="password" value={password}  placeholder="Enter password" />
                    </div> */}
                    <button  style={this.style()}   onClick={(event) => setLoggedInDog(event, username)}> Sign In </button>
                </form>
                )
        } 
    
        else {
            return <Redirect to={`/dogs/`}/>;
        }
    }
}
export default Auth;
// return (
//     <form >
//         <h3>Sign Out</h3>
//         <div>
//             <p>Come back soon!</p>
//         </div>
//         <button onClick={(event) => handleSignOut(event)}>Sign Out</button>
//     </form>
// )

