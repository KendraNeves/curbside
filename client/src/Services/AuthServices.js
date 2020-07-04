// Fetch Requests container

export default {
    signin: user => {
        return fetch('/api/user/signin', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)
    },

    signup: user => {
        return fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)

    },

    signout: () => {
        return fetch('/api/user/signout')
            .then(res => res.json())
            .then(data => data)
    },

    isAuthenticated: () => {
        return fetch('/api/user/authenticated')
            .then(res => {
                if (res.status === 200)
                    return { isAuthenticated: true, user: { email: "CurbSide@CSadmin.com", role: "Admin" } };

                // return res.json().then(data=>data);
                else
                    return { isAuthenticated: false, user: { email: "", role: "" } };
            });
    }
}