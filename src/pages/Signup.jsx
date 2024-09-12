import React from 'react'
import Logo from '../assets/Logo.png'

const Signup = () => {
  return (
    <div>
        <div></div>
        <div>
           <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
            <h5>Sign up</h5>
            <div>
                <form>
                    <div>
                        <label htmlFor="">First name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email address</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Date of birth</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div> 
        </div>
        
    </div>
  )
}

export default Signup