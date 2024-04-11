import { t } from "elysia";
import User from "../models/userModel";

export const GetUsers = async ({ set }: any) => {
    try {
        const users = await User.find({})
        set.status = 200;
        return users
    } catch (err: any) {
        set.status = 500;
        return ({ message: "Internal Server Error" });
    }
}

export const GetUser = async ({ params: { user_id }, set }: any) => {
    try {
        const user = await User.findById(user_id);
        set.status = 200;
        return user;
    } catch (err: any) {
        set.status = 500;
        return ({ message: "Internal Server Error" });
    }
}

export const AddUser = async ({ body, set }: any) => {
    body: t.Object({
        name: t.String(),
        age: t.Integer(),
        email: t.String(),
        password: t.String(),
        admin: t.Boolean()
    });

    try {
        const newUser = new User(body);
        await newUser.save();
        set.status = 200;
        return ({ message: "user inserted successfully"});
    } catch (err: any) {
        set.status = 500;
        return ({ message: "Internal Server Error" });
    }
}

export const UpdateUser = async ({ body, set, params: { user_id } }: any) => {
    body: t.Object({
        name: t.String(),
        age: t.Integer(),
        email: t.String(),
        password: t.String(),
        admin: t.Boolean()
    });

    try {
        const foundUser = await User.findById(user_id)
        if(!foundUser) {
            set.status = 400;
            return ({ message: "user doesn't exists" });
        }

        await User.findByIdAndUpdate(user_id, body)
        set.status = 200;
        return ({ message: "user info updated successfully" });
    } catch (err: any) {
        set.status = 500;
        return ({ message: "Internal Server Error" });
    }
}

export const DeleteUser = async ({ params: { user_id }, set }: any) => {
    try {
        const foundUser = await User.findById(user_id);
        if(!foundUser) {
            set.status = 400;
            return ({ message: "user doesn't exist" });
        }

        await User.findByIdAndDelete(user_id)
        set.status = 200;
        return ({ message: "user deleted successfully" });
    } catch (err: any) {
        set.status = 500;
        return ({ message: "Internal Server Error" });
    }
}