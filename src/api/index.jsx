export const apiGet = (url) => () => fetch(url).then(v => v.json());

export const apiPut = (url, id, obj) => () => fetch(
        `${url}/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: new Headers({'content-type':'application/json'})
        }
    ).then(v => v.json())
    .then(r => {
        console.log("PUT RESPONSE", r);
        if (!r.status) {
            return Promise.reject(r.reason);
        }
        return r.body.customer;
    });

export const apiPost = (url, obj) => () => fetch(
        `${url}`,
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: new Headers({'content-type':'application/json'})
        }
    ).then(v => v.json())
    .then(r => {
        console.log("POST RESPONSE", r);
        if (!r.status) {
            return Promise.reject(r.reason);
        }
        return r.body.customer;
    });
