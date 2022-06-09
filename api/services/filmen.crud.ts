export const insertNewUser = async (dataUser, Filmen) => {
    const newUser = new Filmen(dataUser);
    return newUser.save();
};

export const loginUser = async (data, Filmen) => {
    const result = await Filmen.findOne({
        $and: [{ email: data.email }],
    });
    return result;
};

export const addFavorite = async (userId, itemId, Filmen) => {
    const result = await Filmen.findOneAndUpdate(
        { _id: userId },
        { $push: { favourite: itemId } },
        { new: true }
    );
    return result;
};

export const getUsers = async (Filmen) => Filmen.find();
