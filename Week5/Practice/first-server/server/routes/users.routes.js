import { Router } from "express";
import userController from "../controllers/user.controllers.js";
//import { users } from "../server.js";

const router = Router();

// Route to handle GET and POST on /users
router
  .route("/users")
  .get(userController.getAllUsers)
  .post(userController.createNewUser);

// Route to handle PUT on /api/users/:id
router
  .route("/users/:id")
  .put(userController.updateUser)
  .patch(userController.updateOneUser);

// Route to handle DELETE on /api/users/:firstName
router.route("/users/:firstName").delete(userController.deleteUser);

export default router;
