import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardProjectComponent } from './item-card-project.component';

describe('ItemCardProjectComponent', () => {
  let component: ItemCardProjectComponent;
  let fixture: ComponentFixture<ItemCardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
