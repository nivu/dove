import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-comp4",
  templateUrl: "./comp4.component.html",
  styleUrls: ["./comp4.component.scss"]
})
export class Comp4Component implements OnInit {
  @ViewChild("bodyTempCanvas", { static: false }) bodyTempCanvas: ElementRef;
  @ViewChild("soundCanvas", { static: false }) soundCanvas: ElementRef;
  @ViewChild("accCanvas", { static: false }) accCanvas: ElementRef;

  bodyTempChart: Chart;
  soundChart: Chart;
  accChart: Chart;

  constructor() {}

  drawBodyTempChart = () => {
    return new Chart(this.bodyTempCanvas.nativeElement, {
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
  };

  drawSoundChart = () => {
    return new Chart(this.soundCanvas.nativeElement, {
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
            label: "dB",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 159, 64, 0.4)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255, 159, 64, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 159, 64, 1)",
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
  };

  drawAccelerometer = () => {
    return new Chart(this.accCanvas.nativeElement, {
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
            label: "X",
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
            data: [45, 39, 50, 71, 53, 35, 48],
            spanGaps: false
          },
          {
            label: "Y",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 99, 132, 0.4)",
            borderColor: "rgba(255,99,132,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,99,132,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          },
          {
            label: "Z",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(153, 102, 255, 0.4)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(153, 102, 255, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 29, 84, 21, 46, 57, 20],
            spanGaps: false
          }
        ]
      }
    });
  };

  ngOnInit() {
    console.log("ionViewDidEnter");

    setTimeout(() => {
      console.log("calling");
      this.bodyTempChart = this.drawBodyTempChart();
      this.soundChart = this.drawSoundChart();
      this.accChart = this.drawAccelerometer();
    }, 1000);
  }
}
