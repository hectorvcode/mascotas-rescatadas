import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('mascotas')
  async obtenerMascotas() {
    return await this.appService.obtenerMascotas();
  }

  @Get('animal')
  async obtenerAnimales() {
    return await this.appService.obtenerAnimales();
  }

  @Post('animal')
  async crearAnimal(@Body() dto: Record<string, any>) {
    return await this.appService.crearAnimal(dto);
  }

  @Post('tipo-animal')
  async crearTipoAnimal(@Body() dto: Record<string, any>) {
    return await this.appService.crearTipoAnimal(dto);
  }

  @Get('tipo-animal/:tipoAnimal')
  async obtenerAnimalPorTipo(@Param('tipoAnimal') tipoAnimal: string) {
    return await this.appService.obtenerAnimalPorTipo(tipoAnimal);
  }
}
