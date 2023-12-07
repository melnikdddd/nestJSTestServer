export type Id = number;
export type Tasks = Array<string>;

export interface ITodo {
  id: Id;
  tasks: Tasks;
  parentsId: Id[];
  childrenId: Id[];
}