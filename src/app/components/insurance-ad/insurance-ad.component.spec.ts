import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAdComponent } from './insurance-ad.component';

describe('InsuranceAdComponent', () => {
  let component: InsuranceAdComponent;
  let fixture: ComponentFixture<InsuranceAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
