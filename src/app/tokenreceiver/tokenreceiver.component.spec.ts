import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenreceiverComponent } from './tokenreceiver.component';

describe('TokenreceiverComponent', () => {
  let component: TokenreceiverComponent;
  let fixture: ComponentFixture<TokenreceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenreceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenreceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
