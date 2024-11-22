import {model, Schema, Types} from "mongoose";

const commentSchema = new Schema({
    postID: {
        type: Types.ObjectId,
        ref: 'Posts',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

const commentModel = model("Comments", commentSchema);

export {commentModel};
