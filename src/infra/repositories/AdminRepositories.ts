import { Admin } from "../../domain/entities/Admin";
import { Propriedade } from "../../domain/entities/Propriedade";
import { TipoUser } from "../../domain/entities/TipoUser";
import { IAdminRepositories } from "../../domain/gateway/IAdminRepositories";
import { PrismaClient } from "../../generated/prisma";

export class AdminRepositories implements IAdminRepositories {
  private constructor(private readonly prisma: PrismaClient) {}

  public static create(prisma: PrismaClient): AdminRepositories {
    return new AdminRepositories(prisma);
  }

  // Método privado para mapear resultado Prisma -> entidade de domínio
  private mapToDomain(data: any): Admin {
    if (!data) {
      throw new Error("Admin não encontrado");
    }

    return Admin.with({
      id: data.id,
      nome: data.nome,
      email: data.email,
      cpf: data.cpf,
      senha: data.senha,
      ativado: data.ativado,
      tipoUserId: data.tipoUserId || null,
      tipoUser: data.tipoUser ? TipoUser.with(data.tipoUser) : undefined,
      propriedade: data.propriedade ? Propriedade.with(data.propriedade) : undefined,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    });
  }

  async create(admin: Admin): Promise<Admin> {
    try {
      const adminCreated = await this.prisma.admin.create({
        data: {
          nome: admin.nome,
          email: admin.email,
          cpf: admin.cpf,
          ativado: admin.ativado,
          senha: admin.senha,
          tipoUserId: admin.tipoUserId || null,
        },
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      return this.mapToDomain(adminCreated);
    } catch (error) {
      console.error("Erro ao criar admin:", error);
      throw new Error("Erro ao criar admin");
    }
  }

  async findAll(): Promise<Admin[]> {
    try {
      const admins = await this.prisma.admin.findMany({
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      return admins.map(this.mapToDomain.bind(this));
    } catch (error) {
      console.error("Erro ao buscar admins:", error);
      throw new Error("Erro ao buscar admins");
    }
  }

  async findByEmail(email: string): Promise<Admin | null> {
    try {
      const admin = await this.prisma.admin.findUnique({
        where: { email },
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      if (!admin) return null;
      return this.mapToDomain(admin);
    } catch (error) {
      console.error("Erro ao buscar admin por email:", error);
      throw new Error("Erro ao buscar admin");
    }
  }

  async findById(id: number): Promise<Admin | null> {
    try {
      const admin = await this.prisma.admin.findUnique({
        where: { id },
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      if (!admin) return null;
      return this.mapToDomain(admin);
    } catch (error) {
      console.error("Erro ao buscar admin por ID:", error);
      throw new Error("Erro ao buscar admin");
    }
  }

  async update(admin: Admin): Promise<Admin> {
    try {
      const adminUpdated = await this.prisma.admin.update({
        where: { id: admin.id! },
        data: {
          nome: admin.nome,
          email: admin.email,
          cpf: admin.cpf,
          ativado: admin.ativado,
          senha: admin.senha,
          tipoUserId: admin.tipoUserId || null,
        },
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      return this.mapToDomain(adminUpdated);
    } catch (error) {
      console.error("Erro ao atualizar admin:", error);
      throw new Error("Erro ao atualizar admin");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.admin.delete({ where: { id } });
    } catch (error) {
      console.error("Erro ao deletar admin:", error);
      throw new Error("Erro ao deletar admin");
    }
  }

  async findByCPF(cpf: string): Promise<Admin | null> {
    try {
      const admin = await this.prisma.admin.findUnique({
        where: { cpf },
        include: {
          tipoUser: true,
          propriedade: true,
        },
      });

      if (!admin) return null;
      return this.mapToDomain(admin);
    } catch (error) {
      console.error("Erro ao buscar admin por CPF:", error);
      throw new Error("Erro ao buscar admin");
    }
  }

  // Método genérico para login (reutilizando findByEmail e findByCPF)
private async findByField(field: "email" | "cpf", value: string): Promise<Admin> {
  try {
    // Monta filtro parcial conforme o campo
    const where: Partial<Record<"email" | "cpf", string>> = {};
    where[field] = value;

    const admin = await this.prisma.admin.findFirst({
      where,
      include: {
        tipoUser: true,
        propriedade: true,
      },
    });

    if (!admin) throw new Error("Admin não encontrado");
    return this.mapToDomain(admin);
  } catch (error) {
    console.error(`Erro ao buscar admin por ${field}:`, error);
    throw new Error("Falha no login");
  }
}

  public async loginEmail(email: string): Promise<Admin> {
    return this.findByField("email", email);
  }

  public async loginCpf(cpf: string): Promise<Admin> {
    return this.findByField("cpf", cpf);
  }
}
