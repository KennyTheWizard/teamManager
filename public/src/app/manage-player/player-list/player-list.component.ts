import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './../../player.service'
import { Player } from './../../player'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerListComponent implements OnInit {

  playerList: Player[];
  constructor(private _players:PlayerService) { }
  
  ngOnInit() {
    this.getPlayers();
  }
  
  getPlayers(){
    this._players.getPlayers().then((resp)=>{
      this.playerList = resp.json();
    }).catch((errors)=>{
      console.error(errors);
    });
  }

  deletePlayer(i){
    if (window.confirm(`Are you sure you want to delete ${this.playerList[i].name}?`)){

      this._players.deletePlayer(this.playerList[i]._id).then((resp)=>{
        // check response code then remove from list
        let respJson = resp.json();
        if (respJson['ok']) {

          this.playerList.splice(i, 1);
        }
      }).catch((errors)=>{
        console.error(errors);
      })
    }
  }
}
