import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produit } from './entities/entity.produit';
import { CreateProduitDto } from './create-produit.dto';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectRepository(Produit)
    private produitsRepository: Repository<Produit>,
  ) {}

  findAll(): Promise<Produit[]> {
    return this.produitsRepository.find();
  }

  findOne(id: string): Promise<Produit> {
    return this.produitsRepository.findOne({ where: { id: parseInt(id) } });
  }

  async create(createProduitDto: CreateProduitDto): Promise<Produit> {
    const produit = new Produit();
    produit.nom = createProduitDto.nom;
    produit.prix = createProduitDto.prix;
    produit.quantite = createProduitDto.quantite;

    return this.produitsRepository.save(produit);
  }

  async update(id: string, produit: Produit): Promise<Produit> {
    const idAsNumber = parseInt(id, 10);
    await this.produitsRepository.update(idAsNumber, produit);
    return this.produitsRepository.findOne({ where: { id: idAsNumber } });
  }

  async remove(id: string): Promise<void> {
    await this.produitsRepository.delete(id);
  }
}
