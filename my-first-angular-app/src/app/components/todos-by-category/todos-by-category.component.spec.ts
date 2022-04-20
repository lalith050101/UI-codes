import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosByCategoryComponent } from './todos-by-category.component';

describe('TodosByCategoryComponent', () => {
  let component: TodosByCategoryComponent;
  let fixture: ComponentFixture<TodosByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
