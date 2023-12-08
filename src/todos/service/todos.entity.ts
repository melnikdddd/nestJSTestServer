import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Id, Task} from "../interfaces/todos.interfaces";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: Id;

    @Column("text", {array: true})
    tasks: Task[];

    //Массив всех родительских айди, начиная от первого Todo
    //Использую для агрегации sql запроса, чтобы упростить удаление
    @Column("integer", {array: true})
    parentsId: Id[];

    //массив дочерних id Todo, использую для упрощения рендеринга на клиенте
    @Column("integer", {array: true})
    childrenId: Id[];
}
