import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { AddPlayerComponent } from './manage-player/add-player/add-player.component';
import { PlayerListComponent } from './manage-player/player-list/player-list.component';
import { PlayerStatusComponent } from './player-status/player-status.component'


const routes: Routes = [
  { path: '', redirectTo: '/players/list', pathMatch: 'full'},
  { path: 'players', redirectTo: '/players/list', pathMatch: 'full'},
  { path: 'players', component: ManagePlayerComponent, children: [
    { path: 'list', component: PlayerListComponent },
    { path: 'addplayer', component: AddPlayerComponent }
  ]},
  { path: 'status', redirectTo: '/status/game/1', pathMatch: 'full'},
  { path: 'status/game', redirectTo: '/status/game/1', pathMatch: 'full'},
  { path: 'status/game/:id', component: PlayerStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
