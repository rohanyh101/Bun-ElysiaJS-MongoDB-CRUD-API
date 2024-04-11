import { Elysia } from "elysia";
import * as UserController from '../controllers/userController';
const UserRoutes = new Elysia()

UserRoutes.group('/api/v1/users', (UserRoutes) =>
    UserRoutes
        .get('/', UserController.GetUsers)
        .get('/:user_id', UserController.GetUser)
        .post('/', UserController.AddUser)
        .put('/:user_id', UserController.UpdateUser)
        .delete('/:user_id', UserController.DeleteUser)
);

export default UserRoutes;