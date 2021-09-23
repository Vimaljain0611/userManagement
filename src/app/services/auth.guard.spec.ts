import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserData } from './../models/userData';
import { AuthGuard } from './auth.guard';


describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forChild([]), RouterTestingModule.withRoutes([]),NgxsModule.forRoot([]),],


providers:[Store]
    }).compileComponents();

    guard = TestBed.inject(AuthGuard);

  });

  describe('canActivate',()=>{
    it('check user authenticated',()=>{
      const userData:UserData[] = [{id:'111',name:'vimal',email:'vj@gmail',password:'1223'}]
      jest.spyOn(guard.authService,'getAuthUser').mockReturnValueOnce(userData);
      guard.canActivate()
      expect(guard.canActivate()).toBe(true);
    })
    it('check user not authenticated',()=>{
     jest.spyOn(guard.authService,'getAuthUser').mockReturnValueOnce([]);
      guard.canActivate()
      expect(guard.canActivate()).toBe(false);
    })
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
