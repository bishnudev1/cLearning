const Users = require('../models/userModel');

exports.getAllUsers = async (req, res) => {

    const allUsers = await Users.find();

    res.send({
        success: true,
        message: 'You can get all users from this route',
        users: allUsers
    });
}