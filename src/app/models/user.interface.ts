import { Note } from './note.interface';
import { Credentials } from './userCredentials.interface';

export interface User extends Credentials {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  noteList: Note[]
}