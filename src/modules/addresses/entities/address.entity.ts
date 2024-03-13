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
export class Address {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  pincode: number;

  @CreateDateColumn()
  created_on?: Date;

  @UpdateDateColumn()
  update_on?: Date;

  @Column()
  isActive?: number;

  //bidirectional Mapping.
  @ManyToOne(() => User, (user) => user.addresses)
  user?: User;
}
