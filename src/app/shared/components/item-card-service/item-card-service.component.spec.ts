import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardServiceComponent } from './item-card-service.component';

describe('ItemCardServiceComponent', () => {
  let component: ItemCardServiceComponent;
  let fixture: ComponentFixture<ItemCardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
