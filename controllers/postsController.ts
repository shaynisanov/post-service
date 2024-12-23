import {Request, Response} from 'express';
import {postModel, IPost} from '../models/postsModel.js';
import {BaseController} from './baseController.js';

class PostsController extends BaseController<IPost> {
  constructor() {
    super(postModel);
  }

  async getAll(req: Request, res: Response) {
    const filter = req.query.filter;

    try {
      if (filter) {
        const items = await this.model.find({senderId: filter});
        res.send(items);
      } else {
        const items = await this.model.find();
        res.send(items);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new PostsController();
