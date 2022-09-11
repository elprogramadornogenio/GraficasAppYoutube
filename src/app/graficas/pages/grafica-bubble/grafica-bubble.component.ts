import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafica-bubble',
  templateUrl: './grafica-bubble.component.html',
  styles: [
  ]
})
export class GraficaBubbleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 30,
      },
      y: {
        min: 0,
        max: 30,
      }
    }
  };
  public bubbleChartLegend = true;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

}
