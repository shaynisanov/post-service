import {model, Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    senderID: {
        type: Number,
        required: true,
    },
});

const postModel = model("Posts", postSchema);

export {postModel};
