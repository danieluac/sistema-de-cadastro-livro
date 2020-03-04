import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraComponent } from './editora.component';

describe('EditoraComponent', () => {
  let component: EditoraComponent;
  let fixture: ComponentFixture<EditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
