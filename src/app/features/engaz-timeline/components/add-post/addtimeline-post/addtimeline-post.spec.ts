import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimelinePost } from './addtimeline-post';

describe('AddtimelinePost', () => {
  let component: AddtimelinePost;
  let fixture: ComponentFixture<AddtimelinePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtimelinePost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtimelinePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
