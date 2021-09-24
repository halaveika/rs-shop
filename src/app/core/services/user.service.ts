import { Injectable } from '@angular/core';
import { TOKEN } from '@app/shared/constansts';

@Injectable()
export class UserService {

  constructor() {
  }

  removeToken(){
    if(localStorage.getItem(TOKEN)) {localStorage.removeItem(TOKEN)}
  }
}
