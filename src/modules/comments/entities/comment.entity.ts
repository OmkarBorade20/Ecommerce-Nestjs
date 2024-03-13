import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => Product, (product) => product.comments)
  product: Product;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
