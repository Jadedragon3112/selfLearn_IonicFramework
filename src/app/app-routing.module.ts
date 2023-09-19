import { ROUTE } from './shared/const/route';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE.HOME,
    pathMatch: "full"
  },
  {
    path: ROUTE.HOME,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: ROUTE.AGENT_RANK,
    loadChildren: () => import('./modules/chubb-rank/chubb-rank.module').then( m => m.ChubbRankModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
