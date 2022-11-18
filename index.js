const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:9000/user-test";

const userSchema = new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String }
});
  
const userModel = mongoose.model("user", userSchema);
const { first_name, last_name, email, password } = {
    first_name: "vikas",
    last_name:"nimse",
    email:"vikas@gmail.com",
    password:"Vikas@123"
};

try {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Successfully connected to database");
    }).catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
    });
    const addUser = async ()=> {
        await userModel.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: password,
        });
    };
    addUser();
    console.log("user added success!");
} catch(err) {
    console.log("error in code");
    console.log(err.stack);
}
