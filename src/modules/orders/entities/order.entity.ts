import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    orderID:number;

    @Column()
    userID:number;

    @Column()
    productId:number;

    @Column()
    qty:number;

    @Column()
    price:number;

    @Column()
    total:number;

    

}
