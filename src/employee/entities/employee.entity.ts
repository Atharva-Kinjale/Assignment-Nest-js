import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"employee"})
export class Employee {
    @PrimaryGeneratedColumn()
    employee_Id: number;
  
    @Column({nullable:false,unique:true,name:'user_Id'})
    user_Id: number;

    @OneToOne(()=>User,(user)=>user.employee,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({name:'user_Id'})
      user:User;

    @ManyToMany(()=>CarMantainance , (service)=>service.emp)
    // @JoinTable()
    service:CarMantainance
}
