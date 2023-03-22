import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
  nom: string;

  @Column()
  prix: number;

  @Column()
  quantite: number;
}
