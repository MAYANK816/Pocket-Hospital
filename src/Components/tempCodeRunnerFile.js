 const registerCreds = (e) => {
        setregisterCred({
            ...registerCred,
            [e.target.name]: e.target.value
        });

    }