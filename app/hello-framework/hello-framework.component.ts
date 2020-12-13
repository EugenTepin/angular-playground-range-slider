import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  ElementRef
} from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "hello-framework",
  styleUrls: ["./hello-framework.component.scss"],
  templateUrl: "./hello-framework.component.html"
})
export class HelloFrameworkComponent {
  public mouseX: number;
  public y: number;
  maxActive = false;
  minActive = false;
  min: number = 0;
  max: number = 100;
  get minPosition() {
    return this.min + "%";
  }
  get maxPosition() {
    return this.max + "%";
  }

  @HostListener("mousemove", ["$event"]) onMouseMove(event) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    const y = event.clientY - rect.top; //y position within the element.
    this.el.nativeElement.style.setProperty("--x", x);
    this.el.nativeElement.style.setProperty("--y", y);
  }

  //   get componentVariables(): string {
  //     this.el.nativeElement.style;

  //     return `
  //     --min: ${this.minPosition};
  //     --max: ${this.maxPosition};
  // `;
  //   }
  constructor(public sanitizer: DomSanitizer, private el: ElementRef) {}
  //[attr.style]="sanitizer.bypassSecurityTrustStyle('--custom: ' + someBinding)"
  activate(type) {
    // console.log(event);
    this.maxActive = type === "max";
    this.minActive = type === "min";
  }
  deactivate(type) {
    if (type === "max") {
      this.maxActive = false;
    }

    if (type === "min") {
      this.minActive = false;
    }
  }
}
