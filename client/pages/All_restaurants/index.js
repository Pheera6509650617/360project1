import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";

function All_restaurants({ global, pageData, preview }) {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/api/articles/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network ERROR!!!!');
            }
            return response.json();
        })
        .then((data) => {
            console.log('API Response:', data);
            setData(data);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    if(!data) {
        return <Layout global={global} type="restaurant-page" pageData={pageData} preview={preview}>Loading...</Layout>;
    }

    return(
        <Layout
            global={global}
            type="restaurant-page"
            pageData={pageData}
            preview={preview}
        >
            <div className="ml-10">
                <h1>Welcome to All restaurant</h1>
                <h1>{data.data.attributes.title}</h1>
            </div>
        </Layout>
    )
}

export default All_restaurants;