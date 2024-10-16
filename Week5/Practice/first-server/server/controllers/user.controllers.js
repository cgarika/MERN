import { users } from "../server.js";

const userController = {
  getAllUsers: (req, res) => {
    res.json(users);
  },
  createNewUser: (req, res) => {
    users.push(req.body);
    console.log(req.body);
    res.json(users);
  },
  updateUser: (req, res) => {
    users.forEach((user, idx) => {
      if (user.id == req.params.id) {
        user = { ...user, ...req.body };
        users[idx] = user;
        console.log(user);
      }
    });
    const updateUser = users.find((user) => user.id == req.params.id);
    res.json(updateUser);
  },
  updateOneUser: (req, res) => {
    users.forEach((user, idx) => {
      if (user.id == req.params.id) {
        user.id = req.body.id; // Only updating the 'id'
      }
    });
    const updatedUser = users.find((user) => user.id == req.params.id);
    res.json(updatedUser);
  },
  deleteUser: (req, res) => {
    const userName = req.params.firstName;
    const index = users.findIndex((user) => user.firstName === userName);

    if (index !== -1) {
      users.splice(index, 1);
      res.json(users);
    } else {
      res.status(404).json({ message: `User ${userName} not found.` });
    }
  },
};
export default userController;
