import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @Input() message!: string;
  @Input() duration: number = 3000; // Duration in milliseconds (default: 3000ms)

  // isVisible: boolean = false;

  // show() {
  //   this.isVisible = true;
  //   setTimeout(() => {
  //     this.isVisible = false;
  //   }, this.duration);
  // }

}
