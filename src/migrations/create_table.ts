import { Users } from "../models/users.model";

console.log("======Create User Table======");

const create_table_users = async() => {
    await Users.sync({force : true})
    .then(() => {
        console.log("✅Success Create User Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create User Table : ", err);
    })
}

create_table_users();