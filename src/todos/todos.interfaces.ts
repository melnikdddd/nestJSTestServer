export type Id = number;
export type Tasks = Array<string>;

export interface ITodo {
  id: Id;
  tasks: Tasks;
  parentId: Id[];
}