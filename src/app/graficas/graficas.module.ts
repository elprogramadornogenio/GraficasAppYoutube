import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { GraficasRoutingModule } from './graficas-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { GraficaLineaComponent } from './pages/grafica-linea/grafica-linea.component';
import { GraficaPieComponent } from './pages/grafica-pie/grafica-pie.component';
import { GraficaBarComponent } from './pages/grafica-bar/grafica-bar.component';
import { GraficaRadarComponent } from './pages/grafica-radar/grafica-radar.component';
import { GraficaBaseComponent } from './pages/grafica-base/grafica-base.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraficaPolarComponent } from './pages/grafica-polar/grafica-polar.component';
import { GraficaBubbleComponent } from './pages/grafica-bubble/grafica-bubble.component';
import { GraficaScatterComponent } from './pages/grafica-scatter/grafica-scatter.component';


@NgModule({
  declarations: [
    HomeComponent,
    GraficaLineaComponent,
    GraficaPieComponent,
    GraficaBarComponent,
    GraficaRadarComponent,
    GraficaBaseComponent,
    GraficaPolarComponent,
    GraficaBubbleComponent,
    GraficaScatterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GraficasRoutingModule,
    NgChartsModule,
    FlexLayoutModule
  ]
})
export class GraficasModule { }
