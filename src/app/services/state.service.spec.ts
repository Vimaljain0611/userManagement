import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { NgxsModule, Store } from '@ngxs/store';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[NgxsModule,StoreModule.forRoot({})],
      providers:[Store]
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
