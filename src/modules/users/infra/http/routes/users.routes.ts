import { Router } from 'express';
import multer from 'multer';
import UploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/usersController';
import UserAvatarController from '../controllers/userAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(UploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
