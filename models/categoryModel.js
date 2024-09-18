import mongoose, { trusted } from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    }
})

export default mongoose.model('Category', categorySchema);454qw w3w2