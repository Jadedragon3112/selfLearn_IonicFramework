import { ROUTE } from './../../shared/const/route';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentRankingComponent } from './agent-ranking/agent-ranking.component';

const routes: Routes = [
    {
        path: "",
        component: AgentRankingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChubbRankingRoutingModule {}