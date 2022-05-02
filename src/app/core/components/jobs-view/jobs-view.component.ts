import {
  Component,
  ElementRef,
  HostBinding,
  OnInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LottiePlayerConfig } from 'src/app/shared/components/lottie-player/lottie-player.component';
import { JobsService } from './../../services/jobs/jobs.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.scss']
})
export class JobsViewComponent implements OnInit {
  public animation = 'loading';
  public animationConfig: LottiePlayerConfig;

  constructor(
    public service: JobsService,
    public element: ElementRef,
    public sanitizer: DomSanitizer
  ) {
    this.animationConfig = {
      path: 'assets/lottie/customs/loader.json',
      type: 'loop',
      segments: {
        loading: [0, 120],
        success: [240, 400],
        error: [660, 825]
      }
    };
  }

  ngOnInit() {}

  @HostBinding('style') get styles() {
    const display = this.service.hasJobs ? 'flex' : 'none';
    return this.sanitizer.bypassSecurityTrustStyle(`display: ${display}`);
  }
  
}
