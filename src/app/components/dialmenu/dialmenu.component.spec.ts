import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialmenuComponent } from './dialmenu.component';

describe('DialmenuComponent', () => {
  let component: DialmenuComponent;
  let fixture: ComponentFixture<DialmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialmenuComponent]
    });
    fixture = TestBed.createComponent(DialmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
