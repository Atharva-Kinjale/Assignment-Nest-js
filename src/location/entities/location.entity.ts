
import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("locations")
export class Location {
@PrimaryColumn({unique:true})
pincode  :number;

@Column()
city:string;

@Column()
state:string;

@Column()
country:string;

@CreateDateColumn()
CreatedAt: Date; 

@Column({ nullable: true, default: null })
CreatedBy: number | null;

@UpdateDateColumn()
UpdatedAt: Date;

@Column({ nullable: true, default: null })
UpdatedBy: number | null;

@DeleteDateColumn()
DeletedAt: Date;

@OneToMany(() => User, (user) => user.location)
@JoinColumn({name:"pincode"})
users: User[];

@OneToMany(() => CarMantainance, (service) => service.loc)
@JoinColumn({name:"pincode"})
services: CarMantainance[];
}
  