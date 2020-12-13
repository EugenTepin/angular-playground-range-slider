import { Directive, HostListener, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
  selector: "[appMousePosition]"
})
export class MosuePositionDirective {
  @HostListener("mousemove", ["$event"]) onMouseMove(event) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    const y = event.clientY - rect.top; //y position within the element.
    const styleList = [`--x: ${x};`, ` --y: ${y};`];

    this.el.nativeElement.style.setProperty("--x", x);
    // .cssText = this.sanitizer.bypassSecurityTrustStyle(

    // );
    //this.mouseX = event.clientX;
    //this.mouseY = event.clientY;
  }
  constructor(public sanitizer: DomSanitizer, private el: ElementRef) {}
}
