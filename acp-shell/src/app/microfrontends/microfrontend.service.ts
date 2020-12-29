import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { buildRoutes } from "../utils/route-utils";
import { Microfrontend } from "./microfrontend.model";

@Injectable({ providedIn: "root" })
export class MicrofrontendService {
  microfrontends: Microfrontend[];

  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    console.log("initialise");
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      console.log("initialise resolve", this.router.config);
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        remoteEntry: "http://localhost:4201/profile.js",
        remoteName: "profile",
        exposedModule: "p",

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: "Profile",
        routePath: "profile",
        ngModuleName: "ProfileModule",
      },
      {
        // For Loading
        remoteEntry: "http://localhost:4202/remoteEntry.js",
        remoteName: "profile2",
        exposedModule: "p",

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: "Profile2",
        routePath: "profile2",
        ngModuleName: "ProfileModule",
      },
      {
        // For Loading
        remoteEntry: "http://localhost:4202/remoteEntry.js",
        remoteName: "profile2",
        exposedModule: "t",

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: "Test",
        routePath: "test",
        ngModuleName: "TestModule",
      },
    ];
  }
}
