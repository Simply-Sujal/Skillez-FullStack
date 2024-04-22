const { response } = require("express");
const User = require("../models/user-models");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ msg: "No User Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}


// user delete logic 
const deletUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ msg: "User deleted successfully." })
    } catch (error) {
        next(error)
    }
}


// updating the user details
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({ _id: id },
            {
                $set: updatedUserData
            })

        res.status(200).json(updatedData);
    } catch (error) {
        next(error)
    }
}


// getting user id 
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}



module.exports = { getAllUsers, deletUserById, getUserById, updateUserById };