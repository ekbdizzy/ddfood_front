import { categories } from "../services/mock-data";

const initialState = {
    // cart: [
    //     {
    //         id: 2,
    //         name: 'Пирожок с куриным филе, Fit&Sweet, 70 гр',
    //         price: 70,
    //         totalPrice: 140,
    //         quantity: 2
    //     },
    //     {
    //         id: 3,
    //         name: 'Напиток Алоэ Вишня, Lotte, 240 мл',
    //         price: 90,
    //         totalPrice: 90,
    //         quantity: 1
    //     }
    // ],
    categories: [],
    loading: false,
    error: null
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_CATEGORIES_REQUEST':
            return {
                categories: [],
                loading: true,
                error: null
            };


        case 'FETCH_CATEGORIES_SUCCESS':
            console.log('success');
            return {
                categories: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_CATEGORIES_FAILURE':
            console.log('Error');

        default:
            return state;
    }
};


export default reducer;