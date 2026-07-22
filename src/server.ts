/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL as string);
    console.log("Connected to DB!!");

    server = app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejecttion detected... server shutting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("uncaughtException detected... server shutting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM detected... server shutting down..");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("SIGINT detected... server shutting down..");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

//  unhandled rejection error
// throw new Error("I forgot to handle this error");

// uncaught rejection error
// Promise.reject(new Error("I forgot to catch "));

// signal termination sigterm
