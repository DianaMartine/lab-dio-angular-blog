import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostFormComponent } from './new-post-form.component';

describe('NewPostFormComponent', () => {
  let component: NewPostFormComponent;
  let fixture: ComponentFixture<NewPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
