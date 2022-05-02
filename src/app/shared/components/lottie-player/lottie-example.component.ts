import { Component, OnInit } from '@angular/core';
import { LottieJsons } from 'src/lottie-jsons';
import {
  LottiePlayerType,
  LottiePlayerConfig
} from './lottie-player.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lottie-example',
  template: `
    <p>Current type: {{ types[currentType] }}</p>
    <button (click)="changeConfig()">Change config</button>
    <button (click)="changeType()">Change type</button>
    <br />
  `,
  styles: ['']
})
export class LottieExampleComponent implements OnInit {
  public lottieConfig: LottiePlayerConfig = null;
  public currentType = 0;
  public types: LottiePlayerType[] = [
    'still',
    'loop',
    'hover',
    'click',
    'attent',
    'interactive',
    'toggler'
  ];
  constructor() {}

  ngOnInit() {}

  changeConfig() {
    if ((this.lottieConfig || ({} as any)).name !== 'asdasd')
      this.lottieConfig = {
        type: this.types[this.currentType],
        name: 'asdasd',
        path: `${LottieJsons.page_loader_3}`
      };
    else this.lottieConfig = null;
  }

  changeType() {
    this.currentType++;
    if (this.currentType === this.types.length) this.currentType = 0;
    this.lottieConfig = {
      ...(this.lottieConfig || {}),
      type: this.types[this.currentType]
    };
  }
}
