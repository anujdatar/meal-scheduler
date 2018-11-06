import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerOptionsComponent } from './dinner-options.component';

describe('DinnerOptionsComponent', () => {
  let component: DinnerOptionsComponent;
  let fixture: ComponentFixture<DinnerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
