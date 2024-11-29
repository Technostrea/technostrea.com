import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertisesComponent } from './expertises.component';

describe('ExpertisesComponent', () => {
  let component: ExpertisesComponent;
  let fixture: ComponentFixture<ExpertisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
