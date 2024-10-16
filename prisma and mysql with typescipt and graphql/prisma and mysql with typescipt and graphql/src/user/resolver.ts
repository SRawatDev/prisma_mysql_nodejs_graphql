
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const queries = {
  users: async () => await prisma.user.findMany(),
  user: async (_: any, { id }: { id: number }) => await prisma.user.findUnique({ where: { id } }),
  salaries: async () => await prisma.salary.findMany(),
  salary: async (_: any, { id }: { id: number }) => await prisma.salary.findUnique({ where: { id } }),
};

const mutations = {
  createUser: async (_: any, { input }: { input: { firstName: string; lastName: string; email: string } }) => {
    return await prisma.user.create({ data: input });
  },
  createSalary: async (_: any, { input }: { input: { userId: number; salary: string } }) => {
    return await prisma.salary.create({ data: input });
  },
};

export const resolver = { queries, mutations };
