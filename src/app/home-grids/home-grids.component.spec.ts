import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridsComponent } from './home-grids.component';

describe('HomeGridsComponent', () => {
  let component: HomeGridsComponent;
  let fixture: ComponentFixture<HomeGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGridsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
