import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Diego", email: "diego@mail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Silas Rodrigues",
        email: "contact@silasrodrigues.me",
      },
      message: {
        subject: "Bem-vindo",
        body: "Testando mensagem",
      },
    });

    return res.send();
  },
};
