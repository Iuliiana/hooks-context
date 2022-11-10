import React from 'react';
import {Example} from "../components/Example";

const HookExamples = () => {

    //fixme url в файле .env_default
    const url = process.env.REACT_APP_SUCCESS_URL;
    const url2 = process.env.REACT_APP_ERROR_URL;
    const url3 = process.env.REACT_APP_LOADING_URL;



    return (
        <>
            <Example url={url}/>
            <Example url={url2}/>
            <Example url={url3}/>
        </>
    );
}

export {HookExamples};