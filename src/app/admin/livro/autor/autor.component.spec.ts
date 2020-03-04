import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorComponent } from './autor.component';

describe('AutorComponent', () => {
  let component: AutorComponent;
  let fixture: ComponentFixture<AutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
