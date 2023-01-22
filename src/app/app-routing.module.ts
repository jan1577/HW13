import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

const routes: Routes = [
  { path:'addbook', component:AddbookComponent},
  {path:'viewbooks', component:ViewbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

