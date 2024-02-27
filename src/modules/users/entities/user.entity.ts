import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Exclude }from "class-transformer"

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
    @Exclude()
    password:string;

    @Column()
    role:string;
} 