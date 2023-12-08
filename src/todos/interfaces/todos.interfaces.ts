export type Id = number;
export type Task = string;

export interface ITodo {
  id: Id;
  tasks: Task[];
  parentsId: Id[];
  childrenId: Id[];
}