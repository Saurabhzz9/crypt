import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {path:'',redirectTo:'crypt/coin-list',pathMatch:'full'},
  {path:'crypt/coin-list', component: CoinListComponent},
  {path:'crypt/coin-detail/:id', component:CoinDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
