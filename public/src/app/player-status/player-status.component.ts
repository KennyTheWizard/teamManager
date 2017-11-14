import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './../player.service'
import { Player } from './../player'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerStatusComponent implements OnInit {

  playerList: Player[];
  gameID: string;
  gameInd: number;
  constructor(private _players:PlayerService, private _route:ActivatedRoute, private _routes: Router) { }
  
  ngOnInit() {
    this._players.getPlayers().then((resp)=>{
      this.playerList = resp.json();
    }).catch((errors)=>{
      console.error(errors);
    })

    this._route.paramMap.subscribe((params)=>{
      this.gameID = params.get('id');
      if (isNaN(Number(this.gameID))){
        this._routes.navigate(['/status/game/1']);
      }
      this.gameInd = Number(this.gameID) - 1;

    }, (errors) => {
      console.error(errors);
    });

  }
  setPlaying(i){
    let editedPlayer = this.playerList[i];
    editedPlayer.status[this.gameInd] = 1;
    this._players.editPlayer(editedPlayer).then((resp)=>{
      // check resp code
      this.playerList[i].status[this.gameInd] = 1;
    }).catch((errors)=>{
      console.error(errors);
    })
  }
  setNotPlaying(i){
    let editedPlayer = this.playerList[i];
    editedPlayer.status[this.gameInd] = -1;
    this._players.editPlayer(editedPlayer).then((resp)=>{
      // check resp code
      this.playerList[i].status[this.gameInd] = -1;
    }).catch((errors)=>{
      console.error(errors);
    })
  }
  setUnd(i){
    let editedPlayer = this.playerList[i];
    editedPlayer.status[this.gameInd] = 0;
    this._players.editPlayer(editedPlayer).then((resp)=>{
      // check resp code
      this.playerList[i].status[this.gameInd] = 0;
    }).catch((errors)=>{
      console.error(errors);
    })
  }
  


}
