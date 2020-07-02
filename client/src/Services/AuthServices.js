export default {
    signin: user => {
        return fetch('/api/user', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)
    },

    signup: user => {
        return fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)

    },

    signout: () => {
        return fetch('/user/signout')
            .then(res => res.json())
            .then(data => data)
    },

    isAuthenticated: () => {
        return fetch('/user/authenticated')
            .then(res => {
                if (res.status === 200)
                    return { isAuthenticated: true, user: { email: "CurbSide@CSadmin.com", role: "Admin" } };

                // return res.json().then(data=>data);
                else
                    return { isAuthenticated: false, user: { email: "", role: "" } };
            });
    }
}