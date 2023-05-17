import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: "string", require: "true" },
  email: { type: "string", require: "true" },
  password: { type: "string", require: "true" },
});

const User = mongoose.model("User", userSchema);
export default User;
