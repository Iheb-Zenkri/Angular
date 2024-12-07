import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdowComponent } from './profile-dropdow.component';

describe('ProfileDropdowComponent', () => {
  let component: ProfileDropdowComponent;
  let fixture: ComponentFixture<ProfileDropdowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDropdowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropdowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
