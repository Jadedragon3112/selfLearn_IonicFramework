import { ROUTE } from './../../shared/const/route';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentRankingComponent } from './agent-ranking/agent-ranking.component';
import { ChubbLevelViewPageComponent } from './chubb-level-view-page/chubb-level-view-page.component';

const routes: Routes = [
    {
        path: "",
        component: AgentRankingComponent
    },
    {
        path: ROUTE.LEVEL,
        component: ChubbLevelViewPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChubbRankingRoutingModule {}