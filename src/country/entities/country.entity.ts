import { Leader } from "src/leader/entities/leader.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Countries"})
export class Country {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @OneToOne(()=>Leader,(leader)=>leader.country)
    // @JoinColumn({name:'country_id'})
    leader:Leader;
}
