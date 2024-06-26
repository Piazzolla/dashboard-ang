import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/request-response';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  })

  public users = computed( () => this.#state().users)
  public loading = computed( () => this.#state().loading)

  constructor() {
    this.#http.get<UsersResponse>('https://reqres.in/api/users').pipe( delay(1500))

      .subscribe(
        res => {
          this.#state.set({
            loading: false,
            users: res.data
          })
        }
      )
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
