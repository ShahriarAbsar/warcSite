import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarcDetailsComponent } from './warc-details.component';

describe('WarcDetailsComponent', () => {
  let component: WarcDetailsComponent;
  let fixture: ComponentFixture<WarcDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarcDetailsComponent]
    });
    fixture = TestBed.createComponent(WarcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
