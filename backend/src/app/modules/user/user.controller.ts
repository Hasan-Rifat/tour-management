import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserService } from "./user.services";
import { sendResponse } from "../../utils/sendResponse";

const createUser = async (req: Request, res: Response) => {
  const data = await UserService.createUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User created successfully",
    data: data,
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Users Retrieved Succes",
    data: result.data,
    meta: result.meta,
  });
};

export const userController = {
  createUser,
  getAllUsers,
};
