import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    CommonModule
  ],
  declarations: [
    AboutComponent,
    FeaturesComponent
  ]
})
export class StaticModule { }
