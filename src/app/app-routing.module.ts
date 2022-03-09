import { ContainerResultadoComponent } from './container-resultado/container-resultado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'result', component: ContainerResultadoComponent },
        { path: '', component: ContainerComponent },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
