import { Router } from "express";
import sessionsRoutes from '../../../../modules/users/routes/sesssions.routes';

const routes = Router();

routes.use('/user', sessionsRoutes);

export default routes;
