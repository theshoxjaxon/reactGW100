import React, { useState, useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Network response was not ok");

                const result = await response.json();
                console.log("Fetched Data:", result);
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };
        getData();
    }, []);
    return (
        <div>
            Navbar
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default Navbar;