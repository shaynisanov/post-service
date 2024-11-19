import {model, Schema} from "mongoose";

const commentSchema = new Schema({
    postID: {
        type: Schema.Types.ObjectId,
        ref: 'Posts',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

const postModel = model("Comments", commentSchema);

export {postModel};
