export const tokenError = {
    message: "token missing or invalid",
    status: "401",
    name: "Unauthorized",
};
export const unAuthorized = {
    message: "Unauthorized",
    status: "401",
    name: "Unauthorized",
};
export const createUserError = {
    message: "The user must have email, name and passwd",
    status: "400",
    name: "User creation error",
};
export const errUpdateUser = {
    message: "The user has not been updated",
    status: "500",
    name: "User update error",
};
export const loginError = {
    message: "User or passwd invalid",
    status: "401",
    name: "Unauthorized ",
};
export const errUpdateRenter = {
    message: "It is necessary to add the user email and apartment id ",
    status: "400",
    name: "Bad Request ",
};
export const errCreateApartment = {
    message: "It is necessary to add address, province and cp of the apartment",
    status: "400",
    name: "Bad Request ",
};
export const errUpdateApartment = {
    message: "Body empty",
    status: "400",
    name: "Bad Request ",
};
