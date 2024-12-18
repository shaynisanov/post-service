import {model, Schema} from 'mongoose';

interface IPost {
  title: string;
  content: string;
  senderId: number;
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  content: String,
  senderId: {
    type: Number,
    required: true,
  },
});

const postModel = model('Posts', postSchema);

export type {IPost};
export {postModel};
