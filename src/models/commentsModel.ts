import mongoose, {model, Schema, Types} from 'mongoose';

interface IComments {
  postId: Types.ObjectId;
  content: string;
}

const commentSchema = new Schema<IComments>({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const commentModel = model('Comments', commentSchema);

export type {IComments};
export {commentModel};
