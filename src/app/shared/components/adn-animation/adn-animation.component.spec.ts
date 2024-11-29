import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnAnimationComponent } from './adn-animation.component';

describe('AdnAnimationComponent', () => {
  let component: AdnAnimationComponent;
  let fixture: ComponentFixture<AdnAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdnAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdnAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
