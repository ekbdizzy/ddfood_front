import { categories, products, itemsList } from "./mock-data";

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

    getItemsList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 2) {
                    reject(new Error('Upload error'));
                } else {
                    resolve(itemsList);
                }
            }, 700);
        })
    }

}