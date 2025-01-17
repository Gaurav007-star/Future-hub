import mongoose from "mongoose";

const Database = async () => {
  const state = mongoose.connection.readyState;

  if (state === 1) {
    console.log("Already connected...");
    return;
  }

  if (state === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO!, {
      dbName: "future-hub",
      bufferCommands: true,
    });
    console.log("Database connected", connection.connection.port);

  } catch (error: any) {
    console.log("Failed to database connection", error.message);
  }
};

export default Database;
