import {
  Component,
  ElementRef,
  Input,
  OnInit,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';
import * as Lottie from 'lottie-web';
import { isNullOrUndefined, isNull } from 'util';
import { LottieJsons } from 'src/lottie-jsons';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lottie-player',
  templateUrl: './lottie-player.component.html',
  styleUrls: ['./lottie-player.component.scss']
})
export class LottiePlayerComponent implements OnInit {
  @Output() loaded: EventEmitter<Lottie.AnimationItem>;

  private playerType: LottiePlayerType = 'still';
  private animation: Lottie.AnimationItem;
  private currentConfig: LottiePlayerConfig;
  private currentSegment: {
    name: string;
    array: [number, number];
  } = null;

  constructor(private el: ElementRef, private http: HttpClient) {
    this.loaded = new EventEmitter<Lottie.AnimationItem>();
  }

  ngOnInit() {
    if (this.isType('toggler'))
      this.animation.setDirection(this.animation.playDirection * -1);
  }

  private eventRegister() {
    this.animation.addEventListener('DOMLoaded', event => {
      if (this.isType('loop')) this.play();
    });
    this.animation.addEventListener('complete', event => {
      if (this.isType('loop')) this.play();
    });
  }

  public load() {
    if (!isNullOrUndefined(this.animation)) this.animation.destroy();
    this.animation = Lottie.loadAnimation(
      (this.currentConfig = {
        ...this.currentConfig,
        loop: false,
        autoplay: false,
        container: this.el.nativeElement,
        autoloadSegments: false
      })
    );
    this.eventRegister();
    this.loaded.emit(this.animation);
  }

  public play(direction: 1 | -1 | number = 1, reset = true) {
    if (reset) this.animation.stop();
    this.animation.setDirection(direction);
    if (!isNull(this.currentSegment))
      this.animation.playSegments(this.currentSegment.array, true);
    else this.animation.play();
  }

  public isType(...t: LottiePlayerType[]): boolean {
    return t.includes(this.playerType);
  }

  @Input()
  set config(c: LottiePlayerConfig) {
    this.playerType = c.type;
    this.http
      .get(c.path || LottieJsons.page_loader)
      .toPromise()
      .then(data => {
        this.currentConfig = {
          ...{
            type: 'still',
            // path: data, // ! TODO: change default lottie animation for other more relative.
            animationData: data,
            renderer: 'svg',
            name: `unamend`
          },
          ...(c as Lottie.AnimationConfig)
        };
        if (this.currentSegment && this.currentSegment.name) {
          this.segment = this.currentSegment.name;
        } else this.load();
      });
  }

  @Input()
  set segment(name: string) {
    if (name) {
      const segments = (this.currentConfig || ({} as any)).segments;
      this.currentSegment = { name, array: null };
      if (segments && segments[name])
        this.currentSegment.array = segments[name];
    } else this.currentSegment = null;
    this.load();
  }

  @HostListener('click', ['event'])
  click(event) {
    if (this.isType('click', 'attent')) {
      this.play();
    }
    if (this.isType('toggler')) {
      this.play(this.animation.playDirection * -1, false);
    }
  }

  @HostListener('mouseenter', ['event'])
  mouseEnter(event) {
    if (this.isType('hover', 'attent')) this.play();
  }

  @HostListener('mouseleave', ['event'])
  mouseOver(event) {
    if (this.isType('attent', 'hover')) this.animation.goToAndStop(0);
  }
}

export type LottiePlayerType =
  | 'still' // *
  | 'loop' // *
  | 'hover' // *
  | 'click' // *
  | 'attent' // *
  | 'toggler' // *
  | 'interactive'; // ?

export interface LottiePlayerConfig extends Lottie.AnimationConfig {
  type: LottiePlayerType;
  segments?: {
    [name: string]: [number, number];
  };
}
