import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";


const Example = (props) => {
    const [data, loading, error] = useJsonFetch(props.url, {})
    return (
        <>
            <h5>{props.url}</h5>

            {!loading && 'Загрузка ..........'}
            <pre>{JSON.stringify({data, loading, error}, null, ' ')}</pre>
            <hr/>
        </>
    );
}

export {Example};
