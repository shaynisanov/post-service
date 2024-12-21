import {Request, Response} from 'express';
import {userModel} from '../models/usersModel';
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await userModel.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const user = await userModel.findOne({ username: req.body.username,
                                               email: req.body.email });
        if (!user) {
            res.status(400).send('wrong username or password');
            return;
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).send('wrong username or password');
            return;
        }
        // TODO: Generate tokens
        res.status(200).send("user login successfully");
    } catch (err) {
        res.status(400).send(err);
    }
};

// TODO: needs to be completed after verification and JWT implimintation
const logout = async (req: Request, res: Response) => {
    res.status(200).send("logout successfully")
};

export default {register, login, logout};