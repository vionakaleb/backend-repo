import express from 'express';

import {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from './userControllers.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;