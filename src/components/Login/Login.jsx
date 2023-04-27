import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    
  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        
    })
    .catch(error => console.error(error))
  }
    return (
        <div className='mb-4 '>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success text-bold w-3/4 mx-4"><p className='px-2'></p> Login with google</button>
       
        </div>
    );
};

export default Login;