import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async obtenerMascotas() {
    return await this.prismaService.mascotaAdoptada.findMany();
  }

  async obtenerAnimales() {
    return await this.prismaService.animal.findMany();
  }

  async obtenerAnimalPorTipo(tipo: string) {
    console.log(tipo);
    return await this.prismaService.tipoAnimal.findMany({
      where: {
        description: tipo,
      },
    });
  }

  // TODO: validar con dto
  async crearAnimal(dto: Record<string, any>) {
    const { rehabilitado, tipo } = dto;
    return await this.prismaService.animal.create({
      data: {
        rehabilitado,
        // creamos un valor remoto / iniciamos transacción
        TipoAnimal: {
          create: {
            description: tipo,
          },
        },
      },
    });
  }

  async crearTipoAnimal(dto: Record<string, any>) {
    const { tipo } = dto;
    return await this.prismaService.tipoAnimal.create({
      data: {
        description: tipo,
      },
    });
  }
}
