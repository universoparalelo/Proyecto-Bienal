const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;



export function query(url){
    return fetch(`${API_URL}/${url}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    }).then(res => res.json());
}