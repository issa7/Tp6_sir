import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssaBAKComponent } from './issa-bak.component';

describe('IssaBAKComponent', () => {
  let component: IssaBAKComponent;
  let fixture: ComponentFixture<IssaBAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssaBAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssaBAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
