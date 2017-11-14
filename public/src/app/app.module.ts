import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { PlayerService } from './player.service'
import { AppComponent } from './app.component';
import { PlayerListComponent } from './manage-player/player-list/player-list.component';
import { AddPlayerComponent } from './manage-player/add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
    ManagePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
