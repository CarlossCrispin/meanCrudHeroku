import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
];
// const routes: Route[] =[
//   {path :'',component:HolaComponent},
//   {path : 'about', component:AboutComponent},
//   {path : 'datos', component:FormularioComponent}
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
