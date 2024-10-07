import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardValueComponent } from './item-card-value.component';

describe('ItemCardValueComponent', () => {
  let component: ItemCardValueComponent;
  let fixture: ComponentFixture<ItemCardValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
