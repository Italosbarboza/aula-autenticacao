import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '../../../config/auth';

export default async (req: Request, res: Response, next: NextFunction) => {

    const tokenHeader = req.headers.authorization;

    if(!tokenHeader) {
        return res.status(401).json({error: 'Token not found'});
    }

    const [, token] = tokenHeader.split(' ');

    try {
        const decoded = verify(token, auth.jwt.secret);

        return next();
    } catch (error) {
        return res.status(401).json({error: 'Token invalid'});
    }

}