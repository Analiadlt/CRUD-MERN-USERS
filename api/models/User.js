const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        idusuario: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        phone: {
            type: String,
            require: true,
            max: 12
        }
    }, { timestamps: false, versionKey: false }
)

module.exports = User = mongoose.model('users', userSchema);
