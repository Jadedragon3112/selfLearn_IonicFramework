import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentRankingComponent } from './agent-ranking/agent-ranking.component';
import { ChubbRankingRoutingModule } from './chubb-rank-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AgentRankingComponent
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
