import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'carMaintainance'})
export class CarMantainance {
    @PrimaryGeneratedColumn()
    service_Id: number;
  
    @Column({ unique: true })
    serviceName: string;
  
    @Column({ type: 'time' })
    timeRequired: string;
  
    @Column({ type: 'text', nullable: true })
    description?: string;
  
    @Column({ type: 'decimal' })
    cost: number;

    @Column({nullable:false ,name:'pincode'})
    location: number;

    @ManyToOne(() => Location, (location) => location.services)
    @JoinColumn({name:"pincode"},)
    loc: Location;

    @ManyToMany(()=>Employee , (emp)=>emp.service)
    @JoinTable()
    emp:Employee
}
 