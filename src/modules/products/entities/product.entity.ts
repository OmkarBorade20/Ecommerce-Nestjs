import { Comment } from 'src/modules/comments/entities/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  imgurl: string;

  @OneToMany(() => Comment, (comment) => comment.product, {
    eager: true,
    cascade: true,
  })
  comments: Comment[];
}
