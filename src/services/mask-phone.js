const maskPhone = (phone) => {
    let maskedPhone = phone.replace(/\D/g, '').replace(/^[0-9]/, '+7 ').slice(0, 13);
    if (maskedPhone.length > 9) {
        return maskedPhone.slice(0, 6) + "-" + maskedPhone.slice(6, 9) + "-" + maskedPhone.slice(9);
    } else if (maskedPhone.length > 6) {
        return maskedPhone.slice(0, 6) + "-" + maskedPhone.slice(6);
    } else {
        return maskedPhone;
    }
};

export default maskPhone;