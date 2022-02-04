import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostCardComponent } from './new-post-card.component';

describe('NewPostCardComponent', () => {
  let component: NewPostCardComponent;
  let fixture: ComponentFixture<NewPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
