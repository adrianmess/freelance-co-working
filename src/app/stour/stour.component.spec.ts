import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StourComponent } from './stour.component';

describe('StourComponent', () => {
  let component: StourComponent;
  let fixture: ComponentFixture<StourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
