import React from 'react';
import FormSignIn from "./FormSignIn/FormSignIn";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function SignInPage() {
    let {userInfo} = useSelector(state => state.userSlice);
    const history = useHistory();
    return (
        userInfo ?
            <>
                {history.push('/')}
            </>
            :
            <div className='h-screen px-32 py-16 bg-gray-200'>
                <FormSignIn/>
            </div>
    );
}

export default SignInPage;