import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
  });

  it('creates a service', () => {
    expect(userService).toBeTruthy();
  });

  it('should add a user', () => {
    const user = { id: '1', name: 'John Doe' };
    userService.addIUser(user);
    expect(userService.users).toEqual([user]);
  });
});
