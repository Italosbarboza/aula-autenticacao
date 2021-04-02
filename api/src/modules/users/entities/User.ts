import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
@Entity("users", { database: "universidade" })
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column("varchar")
    login: string;
  
    @Column("varchar")
    pswd: string;
  }
  
  export default User;