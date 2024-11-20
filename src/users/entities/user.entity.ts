import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; //auto increment int

    @Column()
    name: string;

    @Column()
    something: string;
}
