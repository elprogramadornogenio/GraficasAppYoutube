import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-grafica-base',
  templateUrl: './grafica-base.component.html',
  styles: [
  ]
})
export class GraficaBaseComponent implements OnInit {

  constructor(private graficaService: GraficasService) { }

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  ngOnInit(): void {
    this.graficaService.getDiosesBarra(2).subscribe(({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartDatasets.push({ data: values, label: 'Poder Dioses Norticos' });
      this.chart?.update();
    });
  }

  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [], label: '' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

}
