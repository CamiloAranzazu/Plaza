import { Injector } from '@angular/core';

let injectorRef: Injector;

export function appInjector(injector?: Injector): Injector {
  if (!injector) return injectorRef;
  injectorRef = injector;
  return injectorRef;
}
