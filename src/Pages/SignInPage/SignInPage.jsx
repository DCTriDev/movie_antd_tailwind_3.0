import React from 'react';
import FormSignIn from "./FormSignIn/FormSignIn";

function SignInPage(props) {
    return (
        <div className='h-screen px-32 py-16 bg-gray-200'>
            <FormSignIn/>
        </div>
    );
}

export default SignInPage;