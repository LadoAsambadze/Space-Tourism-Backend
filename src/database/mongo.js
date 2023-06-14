import mongoose from "mongoose";

const connect = () => {
  const port = process.env.PORT || 3000;

  try {
    mongoose.connect(port);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
