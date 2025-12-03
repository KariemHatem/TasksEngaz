import { TestBed } from '@angular/core/testing';

import { PostItems } from './post-items';

describe('PostItems', () => {
  let service: PostItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
