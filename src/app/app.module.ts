import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ComponentsModule } from "./components/components.module";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "m10.cloudmqtt.com",
  protocol: "wss",
  port: 33219,
  path: "/",
  username: "lfejtznj",
  password: "0wmRktvF7k42",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <<<=== add this line
})
export class AppModule {}
