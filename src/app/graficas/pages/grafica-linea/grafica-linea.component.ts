import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-grafica-linea',
  templateUrl: './grafica-linea.component.html',
  styles: [
  ]
})
export class GraficaLineaComponent implements OnInit {

  public colors: Color[] = [
    '#3D749C',
    '#E6201E',
    '#72B7E8',
    '#E8E85A',
    '#9E9E3A'
  ];

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getDiosesBarra(1).subscribe(({ labels, values }) => {
      this.lineChartData.labels = labels;
      this.lineChartData.datasets.push({ data: values, label: 'Poder Dioses Norticos', backgroundColor: this.colors, borderColor: this.colors });
      this.chart?.update();
    });
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
