import { User } from "@prisma/client";
import prisma from "./db";

export const getUsers = async () => {
  console.log(await prisma.user.findMany());
  return await prisma.user.findMany();
};

export const postUser = async (user: User) => {
  await prisma.user.create({ data: user });
};
