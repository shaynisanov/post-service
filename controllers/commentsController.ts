import {Request, Response} from 'express';
import {commentModel, IComments} from '../models/commentsModel';
import {postModel} from '../models/postsModel';
import {BaseController} from './baseController';

class CommentsController extends BaseController<IComments> {
  constructor() {
      super(commentModel);
  }

  async create(req: Request, res: Response) {
      const postId = req.body.postId;

      try {
        const post = await postModel.findById(postId);
        if (!post) res.status(404).send(`Post with id ${postId} was not found`);
        return super.create(req, res);
      } catch (error) {
        res.status(400).send(error);
      }
  };

  async getAll(req: Request, res: Response) {
    const filter = req.query.filter;

    try {
        if (filter) {
            const item = await this.model.find({ postId: filter });
            res.send(item);
        } else {
            const items = await this.model.find();
            res.send(items);
        }
    } catch (error) {
        res.status(400).send(error);
    }
  };
}

export default new CommentsController();
