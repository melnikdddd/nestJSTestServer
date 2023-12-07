import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Id, Tasks } from "../interfaces/todos.interfaces";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: Id;

  @Column("text", { array: true })
  tasks: Tasks;

  @Column("integer", { array: true })
  parentsId: Id[];

  @Column("integer", { array: true })
  childrenId: Id[];
}
