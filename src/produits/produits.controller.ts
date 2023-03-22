import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ProduitsService } from './produits.service';
  import { Produit } from './entities/entity.produit';
  import { CreateProduitDto } from './create-produit.dto';
  
  @Controller('produits')
  export class ProduitsController {
    constructor(private readonly produitsService: ProduitsService) {}
  
    @Get()
    async findAll(): Promise<Produit[]> {
      return this.produitsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Produit> {
      return this.produitsService.findOne(id);
    }
  
    @Post()
    async create(@Body() createProduitDto: CreateProduitDto): Promise<Produit> {
      return this.produitsService.create(createProduitDto);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() produit: Produit,
    ): Promise<Produit> {
      return this.produitsService.update(id, produit);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.produitsService.remove(id);
    }
  }
  