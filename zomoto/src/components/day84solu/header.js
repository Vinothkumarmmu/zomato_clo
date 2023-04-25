import React from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import 'C:/Users/vinoth/vinoth/day82/backend/zomoto/src/styles/filterpage.css';
import Modal from 'react-modal';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';





// const clientId="425803375134-bh144a01fa25mqcsua20gjgc8it5u0gh.apps.googleusercontent.com"
// const facebookId="2446997998791159"
const socialStyles = {

    marginLeft: '20px',
    borderRadius: '5px',

}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: '',
            display: 'none',
            LoginIsOpen: false,
            isLoggedIn: false,
            loggedInUser: undefined,

            SignUpIsOpen: false,
        }
    }


    handleLogin = () => {
        this.setState({ LoginIsOpen: true, isLoggedIn: true })
    }
    handleCancel = () => {
        this.setState({ LoginIsOpen: false ,SignUpIsOpen:false})
    }
    handleLogout = () => {
        this.setState({ isLoggedIn: false, loggedInUser: undefined, LoginIsOpen: false })
    }

    handleSigup = () => {
        this.setState({ SignUpIsOpen: true })
    }


    componentDidMount() {
        const pathway = window.location.pathname;
        let bg='';
        let display='';
        if (pathway == '/' || pathway === '/home') {
            bg = '#ff0000';
            display = 'none';
        } else {
            bg = '#ff0000';
            display = 'inline-block';
        }
        this.setState({ backgroundColor: bg, display: display })
    }



    responseGoogle = (response) => {
        this.setState({ isLoggedIn: true, loggedInUser: response.profileObj.name, LoginIsOpen: false })
    }

    render() {
        let { backgroundColor, display, LoginIsOpen, isLoggedIn, loggedInUser, SignUpIsOpen } = this.state;
        return (
            <div>
                <div className="container-fluid head" style={{ backgroundColor: backgroundColor }}>
                    <div className="box" style={{ display: display }}>vk!</div>
                    {(!isLoggedIn) ?
                        <div>
                            <button className="btn btn-light mx-2" onClick={this.handleLogin}>login</button>
                            <button className="btn btn-light" onClick={this.handleSigup}>Create an Account</button></div>
                        : <div>
                            <button className="btn btn-light mx-2" >{loggedInUser}</button>
                            <button className="btn btn-light" onClick={this.handleLogout}>Logout</button></div>
                    }
                </div>
                {/* signup */}
                <Modal isOpen={SignUpIsOpen} style={customStyles}>
                    <form style={{ backgroundColor: "lightgray", border: "2px dashed black", padding: "20px", height: "600px", width: "550px" }}>
                        <div style={{ display: "flex" }}>
                            <h1 style={{ fontWeight: 'bold', color: "red" }}>SignUp</h1>
                            <button style={{ color: "red", marginLeft: "60%", marginTop: "20px"}} onClick={this.handleCancel}>X</button>
                        </div>
                        <h3 style={{ fontWeight: 'bold'}}>Please fill this form to create an account.</h3>
                        <hr/>
                        <div style={{fontWeight:'bold'}}>
                            First Name:<input type='text' placeholder="First Name" style={{marginLeft:'200px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div style={{fontWeight:'bold'}}>
                            Last Name:<input type='text' placeholder="Last Name" style={{marginLeft:'203px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div style={{fontWeight:'bold'}}>
                            Phone Number:<input type='number' placeholder="Phone Number" style={{marginLeft:'168px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div style={{fontWeight:'bold'}}>
                           Email:<input type='email' placeholder="Email" style={{marginLeft:'240px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div style={{fontWeight:'bold'}}>
                           Password:<input type='password' placeholder="Password" style={{marginLeft:'210px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div style={{fontWeight:'bold'}}>
                           Confirm Password:<input type='password' placeholder="re-enter password" style={{marginLeft:'146px',borderRadius:'2px'}}/>
                        </div>
                        <br />
                        <div>By creating an account you agree to our<a href="#">Terms & Privacy.</a></div>
                        <button style={{backgroundColor:'red',color:'white',borderRadius:'3px',marginLeft:'80%'}}>PROCEED</button>

                    </form>

                </Modal>
                {/* login */}
                <Modal isOpen={LoginIsOpen} style={customStyles}>
                    <form style={{ backgroundColor: "lightgray", border: "2px dashed black", padding: "20px", height: "450px", width: "250px" }}>
                        <div style={{ display: "flex" }}>
                            <h2>Login</h2>
                            <button style={{ color: "red", marginLeft: "50%", marginTop: "20px" }} onClick={this.handleCancel}>X</button>
                        </div>
                        <div style={{ color: "blue" }} ><span>Email</span>
                            <input type="email" placeholder="Email" style={{ borderRadius: "5px", color: "red" }} required />
                            <span>Password</span>
                            <input type="password" placeholder="Password" style={{ borderRadius: "5px", color: "red" }} required />
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button style={{ backgroundColor: "sandybrown", borderRadius: "5px" }}>Submit</button>
                                <button style={{ backgroundColor: "sandybrown", borderRadius: "5px" }} onClick={this.handleCancel}>Cancel</button>
                            </div>
                            <a href="#">Forget Password</a>
                            <br />
                            <button style={{ backgroundColor: "lightblue", borderRadius: "5px", marginLeft: "27px" }}>Create New Account</button>
                        </div>
                        <FacebookLogin
                            style={socialStyles}
                            appId="2446997998791159"
                            onSuccess={(response) => {
                                console.log('Login Success!', response);
                            }}
                            onFail={(error) => {
                                console.log('Login Failed!', error);
                            }}
                            onProfileSuccess={(response) => {
                                console.log('Get Profile Success!', response);
                            }}
                        /><br /><br />
                        {/* <button style={{ backgroundColor: "gray", borderRadius: "5px", marginLeft: "5px" }}><i class="bi bi-facebook"></i> Continue with Facebook</button> */}
                        {/* <button style={{ backgroundColor: "gray", borderRadius: "5px", marginLeft: "10px" }}><i class="bi bi-google"></i> Continue with Google</button> */}
                        <GoogleOAuthProvider clientId="425803375134-bh144a01fa25mqcsua20gjgc8it5u0gh.apps.googleusercontent.com">
                            <GoogleLogin

                                buttonText={"Login"}
                                onSuccess={this.responseGoogle}
                                onError={this.responseGoogle}
                                isLoggedIn={true}
                                cookiePolicy={"single_host_origin"}
                            />
                        </GoogleOAuthProvider>



                    </form>

                </Modal>
            </div>
            //  
            //  
        )

    }
}


export default Header;