import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'noticias'})
export class NoticiasQplan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column({nullable: true})
  authorStrategy: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  password: string
  
  @Column()
  url: string;

  @Column()
  urlToImage: string;

  @Column()
  publishedAtl: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column()
  content: string;

}