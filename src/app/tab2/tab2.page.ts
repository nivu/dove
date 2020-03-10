import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  active: string = "fever";
  constructor() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
    this.active = ev.detail.value;
  }
}
