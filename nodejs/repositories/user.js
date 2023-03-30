const login = async ({email, password}) => {
    console.log('login user: ', email, password);
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {
    console.log('register user with params: ' + name + email + password+phoneNumber + address);
}


export default {
    login,
    register
}