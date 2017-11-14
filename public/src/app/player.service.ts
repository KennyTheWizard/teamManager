import { Injectable } from '@angular/core';
import { Player } from './player';
import { Http } from '@angular/http';

@Injectable()
export class PlayerService {

  constructor(private _http:Http) { }

  getPlayers(){
    return this._http.get('/players').toPromise();
  }

  editPlayer(editedPlayer:Player){
    return this._http.put('/players/edit/' + editedPlayer._id, editedPlayer).toPromise();
  }

  deletePlayer(id:string){
    return this._http.delete('/players/destroy/' + id).toPromise();
  }

  addPlayer(newPlayer:Player){
    return this._http.post('/players', newPlayer).toPromise();
  }
}
