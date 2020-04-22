import { Note } from './note.interface';

export interface User {
  id?: string,
  username: string,
  password: string,
  email?: string,
  firstName?: string,
  lastname?: string,
  noteList?: Note[]
}