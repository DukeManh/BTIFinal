import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: FormComponent, },
  { path: 'contactus',  component: ContactusComponent, },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
