import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/request-response';

interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    loading: true,
    users: [],
  })
  constructor() {
    console.log('Cargando data');
  }

}


 /* el # hace que mi estado sea privado
 si pongo private state en vez de # despues de la transpilacion queda como
 class {
  state
 }
y en javascript si se puede acceder

con el # lo hace privado en ecmascript
 */
