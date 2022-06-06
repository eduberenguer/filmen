export const insertNewUser = async (dataUser, Filmen) => {
    const newUser = new Filmen(dataUser);
    return newUser.save();
};

export const loginUser = async (data, Filmen) => {
    const result = await Filmen.findOne({
        $and: [{ email: data.email, password: data.password }],
    });
    return result;
};

export const getUsers = async (Filmen) => Filmen.find();
