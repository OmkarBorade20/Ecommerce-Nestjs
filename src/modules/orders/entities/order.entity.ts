import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderID: number;

  // @Column()
  // userID:number;

  // @Column()
  // productId:number;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  total: number;

  //unidirectional mapping.
  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: number;

  @Column()
  productId: number;
}
