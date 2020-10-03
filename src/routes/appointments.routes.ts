import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider,  } = request.body;

  return response.json({ message: 'hello world' });
});

export default appointmentsRouter;
