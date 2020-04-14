import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (request, response) => {
  return response.json({ mesage: 'Hello World' });
});

export default appointmentsRouter;
