import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTutorialsComponent } from './bootstrap-tutorials.component';

describe('BootstrapTutorialsComponent', () => {
  let component: BootstrapTutorialsComponent;
  let fixture: ComponentFixture<BootstrapTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
