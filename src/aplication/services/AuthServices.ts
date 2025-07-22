import { PrismaClient } from "../../generated/prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "segredo";

export class AuthService {
  async login(login: string, senha: string) {
    if (!login || !senha) {
      throw new Error("Login e senha devem ser informados");
    }

    const admin = await prisma.admin.findFirst({
      where: {
        OR: [
          { email: login },
          { cpf: login },
        ],
      },
      include: {
        tipoUser: true,
      },
    });

    if (!admin) throw new Error("Usuário não encontrado");

    const senhaValida = await bcrypt.compare(senha, admin.senha);
    if (!senhaValida) throw new Error("Senha inválida");

    const payload = {
      id: admin.id,
      email: admin.email,
      tipo: admin.tipoUser?.tipo,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1m" });
    

    // Remove the 'senha' property from the admin object before returning
    // Rename the destructured variable to avoid duplicate identifier error
    // since 'senha' is also a parameter of the function
    // Use a different variable name for the destructured property
    const { senha: senhaHash, ...adminWithoutSenha } = admin;

    return { admin: adminWithoutSenha, token, senha: senhaHash };
  }
}