import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  version = "acp-app ProfileComponent. jquery version:  " + $().jquery;
  constructor() {}

  ngOnInit(): void {}
}
