import { Component, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  @ViewChild("bodyTempCanvas", { static: false }) bodyTempCanvas: ElementRef;
  @ViewChild("surrTempCanvas", { static: false }) surrTempCanvas: ElementRef;
  @ViewChild("humidityCanvas", { static: false }) humidityCanvas: ElementRef;
  @ViewChild("thiCanvas", { static: false }) thiCanvas: ElementRef;
  @ViewChild("heartCanvas", { static: false }) heartCanvas: ElementRef;

  bodyTempChart: Chart;
  surrTempChart: Chart;
  humidityChart: Chart;
  thiChart: Chart;
  heartChart: Chart;

  constructor() {}

  ionViewDidEnter() {
    this.bodyTempChart = new Chart(this.bodyTempCanvas.nativeElement, {
      type: "line",
      data: {
        labels: [
          "1:00PM",
          "1:10PM",
          "1:20PM",
          "1:30PM",
          "1:40PM",
          "1:50PM",
          "2:00PM"
        ],
        datasets: [
          {
            label: "Temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

    this.surrTempChart = new Chart(this.surrTempCanvas.nativeElement, {
      type: "line",
      data: {
        labels: [
          "1:00PM",
          "1:10PM",
          "1:20PM",
          "1:30PM",
          "1:40PM",
          "1:50PM",
          "2:00PM"
        ],
        datasets: [
          {
            label: "Temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

    this.humidityChart = new Chart(this.humidityCanvas.nativeElement, {
      type: "line",
      data: {
        labels: [
          "1:00PM",
          "1:10PM",
          "1:20PM",
          "1:30PM",
          "1:40PM",
          "1:50PM",
          "2:00PM"
        ],
        datasets: [
          {
            label: "Humidity",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

    this.thiChart = new Chart(this.thiCanvas.nativeElement, {
      type: "line",
      data: {
        labels: [
          "1:00PM",
          "1:10PM",
          "1:20PM",
          "1:30PM",
          "1:40PM",
          "1:50PM",
          "2:00PM"
        ],
        datasets: [
          {
            label: "THI",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

    this.heartChart = new Chart(this.heartCanvas.nativeElement, {
      type: "line",
      data: {
        labels: [
          "1:00PM",
          "1:10PM",
          "1:20PM",
          "1:30PM",
          "1:40PM",
          "1:50PM",
          "2:00PM"
        ],
        datasets: [
          {
            label: "Heart Beat",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }
}
