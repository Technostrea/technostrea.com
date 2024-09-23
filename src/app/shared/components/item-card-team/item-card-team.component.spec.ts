import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardTeamComponent } from './item-card-team.component';

describe('ItemCardTeamComponent', () => {
  let component: ItemCardTeamComponent;
  let fixture: ComponentFixture<ItemCardTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
