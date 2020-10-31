import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
