import { Hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity({"name":"user"})
export class User {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    email:string;

    @BeforeInsert()
    async hashPassword() {
    this.password =await new Hash(this.password, 10);
    }
}
