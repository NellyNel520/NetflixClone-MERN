const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema(
	{
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "https://ih1.redbubble.net/image.618427315.3222/flat,750x1000,075,t.u3.jpg" },
    isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

module.exports = User