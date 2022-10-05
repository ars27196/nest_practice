import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 
@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    tagId:number;

    @Column()
    tagName: string;
}
