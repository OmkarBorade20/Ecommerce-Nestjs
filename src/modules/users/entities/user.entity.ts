import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    age:number;

    @Column()
    gender:string;

    @Column()
    city:string;

    @Column()
    phone:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    role:string;
} 