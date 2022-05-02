declare namespace Lottie {
  export interface AnimationItem {
    animType: string;
    animationData: object;
    animationID: string;
    assets: any[];
    assetsPath: string;
    autoloadSegments: boolean;
    autoplay: boolean;
    currentFrame: number;
    currentRawFrame: number;
    fileName: string;
    firstFrame: number;
    frameModifier: number;
    frameMult: number;
    frameRate: number;
    imagePreloader: any; // TODO: check and declare type
    isLoaded: boolean;
    isPaused: boolean;
    loop: boolean | number;
    name: string;
    path: string;
    playCount: number;
    playDirection: number;
    playSpeed: number;
    projectInterface: any | (() => void);
    renderer: any; // TODO: check and declare 'SVGRenderer'
    segmentPos: number;
    segments: (number | any)[];
    subframeEnabled: boolean;
    timeCompleted: number;
    totalFrames: number;
    wrapper: HTMLElement;

    play();

    stop();

    pause();

    // one param usually pass as location.href. Its useful when you experience mask issue in safari where your url does not have # symbol.
    setLocationHref(href: string);

    // one param speed (1 is normal speed)
    setSpeed(speed: number);

    // first param is a numeric value. second param is a boolean that defines time or frames for first param
    goToAndStop(value: number, isFrame?: boolean);

    // first param is a numeric value. second param is a boolean that defines time or frames for first param
    goToAndPlay(value: number, isFrame?: boolean);

    // one param direction (1 is normal direction)
    setDirection(direction: number);

    // first param is a single array or multiple arrays of two values each(fromFrame,toFrame), second param is a boolean for forcing the new segment right away
    playSegments(segments: number[] | number[][], forceFlag: boolean);

    // If false, it will respect the original AE fps. If true, it will update as much as possible. (true by default)
    setSubframe(flag: boolean);

    // To destroy and release resources.
    destroy();

    // To add events on animations process
    addEventListener(
      event_name: AnimationEventName,
      callback: (event?: any) => void
    );
  }

  export type AnimationEventName =
    | 'complete'
    | 'loopComplete'
    | 'enterFrame'
    | 'segmentStart'
    | 'config_ready'
    | 'data_ready'
    | 'DOMLoaded'
    | 'destroy';

  export interface AnimationConfig {
    // an Object with the exported animation data.
    animationData?: any;

    // the relative path to the animation object. (animationData and path are mutually exclusive)
    path?: string;

    // true / false / number
    loop?: boolean | number;


    // true / false it will start playing as soon as it is ready
    autoplay?: boolean;

    autoloadSegments?: boolean;

    // animation name for future reference
    name?: string;

    // 'svg' / 'canvas' / 'html' to set the renderer
    renderer?: string;

    // the dom element on which to render the animation
    container?: any;
  }
}

declare class LottyPlayer {
  // optional parameter name to target a specific animation
  play(name?: string);

  // optional parameter name to target a specific animation
  stop(name?: string);

  // first param speed (1 is normal speed) with 1 optional parameter name to target a specific animation
  setSpeed(speed: number, name?: string);

  // first param direction (1 is normal direction.) with 1 optional parameter name to target a specific animation
  setDirection(direction: number, name?: string);

  // looks for elements with class "lottie"
  searchAnimations(
    animationData?: any,
    standalone?: boolean,
    renderer?: string
  );

  // returns an animation instance to control individually.
  loadAnimation(params: Lottie.AnimationConfig): Lottie.AnimationItem;

  // To destroy and release resources. The DOM element will be emptied.
  destroy(name?: string);

  // you can register an element directly with registerAnimation. It must have the "data-animation-path" attribute pointing at the data.json url
  registerAnimation(element: any, animationData?: any);

  // default 'high', set 'high','medium','low', or a number > 1 to improve player performance. In some animations as low as 2 won't show any difference.
  setQuality(quality: string | number);
}

declare const Lottie: LottyPlayer;

declare module 'lottie-web' {
  export = Lottie;
}
