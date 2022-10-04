import {Entity, PrimaryGeneratedColumn, Column } from 'typeOrm';

@Entity({name: 'user'})
export class User{

    @PrimaryGeneratedColumn()
    userid: number

    @Column()
    username:string;  
    @Column() 
    password:string;
    @Column({default: new Date()})
    createdAt:Date;
};