import {  Router } from 'express';
import AuthenticateService from '../services/AuthenticateService';
import GetService from '../services/GetService';
import authMiddleware from '../middlewares/auth';

const sessionRouter = Router();

sessionRouter.post('/sessions', async (request, response) => {
    const { login, pswd } = request.body;

    const authenticateService = new AuthenticateService();

    const user = await authenticateService.execute({login, pswd});

    response.json(user);
})

sessionRouter.use(authMiddleware);

sessionRouter.get('/',  async (request, response) => {
    const getService = new GetService();

    const users = await getService.execute();

    response.json(users);
})

export default sessionRouter;