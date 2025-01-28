import express from 'express';
const router = express.Router();

// // method for if another file is utilized (see 18-Challenge)
// import userRoutes from './user-routes.js';

// router.use('/users', userRoutes);

// // method if no add'l file is used
// import {
//     createUser,
//     getSingleUser,
//     saveBook,
//     deleteBook,
//     login,
//   } from '../../controllers/user-controller.js';
  
//   // import middleware
//   import { authenticateToken } from '../../services/auth.js';
  
//   // put authMiddleware anywhere we need to send a token for verification of user
//   router.route('/').post(createUser).put(authenticateToken, saveBook);
  
//   router.route('/login').post(login);
  
//   router.route('/me').get(authenticateToken, getSingleUser);
  
//   router.route('/books/:bookId').delete(authenticateToken, deleteBook);

export default router;
