import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { GraficaLineaComponent } from './pages/grafica-linea/grafica-linea.component';
import { GraficaPieComponent } from './pages/grafica-pie/grafica-pie.component';
import { GraficaBarComponent } from './pages/grafica-bar/grafica-bar.component';
import { GraficaRadarComponent } from './pages/grafica-radar/grafica-radar.component';
import { GraficaBaseComponent } from './pages/grafica-base/grafica-base.component';
import { GraficaPolarComponent } from './pages/grafica-polar/grafica-polar.component';
import { GraficaBubbleComponent } from './pages/grafica-bubble/grafica-bubble.component';
import { GraficaScatterComponent } from "./pages/grafica-scatter/grafica-scatter.component";




const router: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'linea',
                component: GraficaLineaComponent
            },
            {
                path: 'pie',
                component: GraficaPieComponent
            },
            {
                path: 'bar',
                component: GraficaBarComponent
            },
            {
                path: 'radar',
                component: GraficaRadarComponent
            },
            {
                path: 'base',
                component: GraficaBaseComponent
            },
            {
                path: 'polar',
                component: GraficaPolarComponent
            },
            {
                path: 'bubble',
                component: GraficaBubbleComponent
            },
            {
                path: 'scatter',
                component: GraficaScatterComponent
            },
            {
                path: '**',
                redirectTo: 'linea'
            }
        ]
    }
]



@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})


export class GraficasRoutingModule {}