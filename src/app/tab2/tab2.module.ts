import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { Comp1Component } from "../comp1/comp1.component";
import { Comp2Component } from "../comp2/comp2.component";
import { Comp3Component } from "../comp3/comp3.component";
import { Comp4Component } from "../comp4/comp4.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ]
})
export class Tab2PageModule {}
