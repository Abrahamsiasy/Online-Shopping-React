import bcryptjs from "bcryptjs"
const users = [
    {
        firstName: "admin",
        LastName: "admin",
        email: "admin@admin.com",
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true   
    },
    {
        firstName: "user",
        LastName: "1",
        email: "user1@user.com",
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true   
    },
    {
        firstName: "user",
        LastName: "2",
        email: "user2@admin.com",
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true   
    }
]
export default users