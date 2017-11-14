import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './../../player.service'
import { Player } from './../../player'
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPlayerComponent implements OnInit {

  newPlayer = new Player();
  constructor(private _players:PlayerService, private _routes:Router) { }

  ngOnInit() {
  }

  addNewPlayer(){
    this.newPlayer.status = [0, 0, 0];
    this._players.addPlayer(this.newPlayer).then(()=>{
      return this._routes.navigate(['/players/list']);
    }).catch((errors)=>{
      console.error(errors);
    })
  }
}
