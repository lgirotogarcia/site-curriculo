import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattosComponent } from './cattos.component';

describe('CattosComponent', () => {
  let component: CattosComponent;
  let fixture: ComponentFixture<CattosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
