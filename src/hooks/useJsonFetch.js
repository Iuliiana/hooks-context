//const [data, loading, error] = useJsonFetch(url, opts);
// http://localhost:7070/data

import {useEffect, useState} from "react";

export default function useJsonFetch(url, opts = {}) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url, opts)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    setError('Query error! ' + url + ' empty data.')
                } else if (data.status !== 'ok') {
                    setError('Query Error! Status query - ' + data.status)
                } else {
                    setData(data)
                }
            }).catch(error => {
            setError('Query Error! ' + error.message)
        }).finally(() => {
            setLoading(true)
        })
    }, [])

    return [data, loading, error];
}
