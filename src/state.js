export const initialState = {
    shoes: []
};

export const fetchShoes = () => fetch('/shoes.json')
    .then(r => {
        if (r.ok) {
            return r.json();
        }
        throw new Error(`fetch error: ${r.status}`);
    });