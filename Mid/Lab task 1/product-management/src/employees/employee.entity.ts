import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string; // dummy password (lab only)

  @Column('int')
  age: number;

  @Column('int')
  yearsOfWorking: number;
}
