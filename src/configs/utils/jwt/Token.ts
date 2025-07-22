import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import { StringValue } from "ms";

dotenv.config();

interface TokenPayload {
  id: number;
  email?: string;
  cpf?: string;
  role?: string | null;
}

export class Token {
  private readonly secret: string;
  private readonly refreshSecret: string;
  private readonly accessExpiresIn: string;
  private readonly refreshExpiresIn: string;

  constructor() {
    const {
      JWT_SECRET,
      JWT_REFRESH_SECRET,
      JWT_EXPIRES_IN,
      JWT_REFRESH_EXPIRES_IN,
    } = process.env;

    if (!JWT_SECRET || !JWT_REFRESH_SECRET || !JWT_EXPIRES_IN || !JWT_REFRESH_EXPIRES_IN) {
      throw new Error(
        "JWT_SECRET, JWT_REFRESH_SECRET, JWT_EXPIRES_IN e JWT_REFRESH_EXPIRES_IN não estão definidos no .env"
      );
    }

    this.secret = JWT_SECRET;
    this.refreshSecret = JWT_REFRESH_SECRET;
    this.accessExpiresIn = JWT_EXPIRES_IN;
    this.refreshExpiresIn = JWT_REFRESH_EXPIRES_IN;
  }

  generateAccessToken(payload: TokenPayload): string {
    const options: SignOptions = { expiresIn: this.accessExpiresIn as StringValue };
    return jwt.sign(payload, this.secret, options);
  }

  generateRefreshToken(payload: TokenPayload): string {
    const options: SignOptions = { expiresIn: this.refreshExpiresIn as StringValue };
    return jwt.sign(payload, this.refreshSecret, options);
  }

  async verifyAccessToken(token: string): Promise<TokenPayload> {
    try {
      return jwt.verify(token, this.secret) as TokenPayload;
    } catch (error) {
      throw new Error("Token de acesso inválido ou expirado");
    }
  }

  async verifyRefreshToken(token: string): Promise<TokenPayload> {
    try {
      return jwt.verify(token, this.refreshSecret) as TokenPayload;
    } catch (error) {
      throw new Error("Token de refresh inválido ou expirado");
    }
  }

  generateTokens(payload: TokenPayload): { accessToken: string; refreshToken: string } {
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload);
    return { accessToken, refreshToken };
  }

  async renewTokens(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = await this.verifyRefreshToken(refreshToken);
    return this.generateTokens(payload);
  }
  
}
