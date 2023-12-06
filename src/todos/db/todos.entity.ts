import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Id, Tasks } from '../todos.interfaces';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: Id;

  @Column('text', { array: true })
  tasks: Tasks;

  @Column('number', { array: true })
  parentsId: Id[];
}
