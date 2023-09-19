import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentRankingComponent } from './agent-ranking/agent-ranking.component';
import { ChubbRankingRoutingModule } from './chubb-rank-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChubbLevelViewPageComponent } from './chubb-level-view-page/chubb-level-view-page.component';



@NgModule({
  declarations: [
    AgentRankingComponent,
    ChubbLevelViewPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChubbRankingRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class ChubbRankModule { }
