import { categories, products, cartItems } from "./mock-data";

export default class MockService {

    getCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 2) {
                    reject(new Error('Upload error'));
                } else {
                    resolve(categories);
                }
            }, 700);
        })
    }

    getProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 2) {
                    reject(new Error('Upload error'));
                } else {
                    resolve(products);
                }
            }, 700);
        })
    }

    getCartItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 2) {
                    reject(new Error('Upload error'));
                } else {
                    resolve(cartItems);
                }
            }, 700);
        })
    }

}