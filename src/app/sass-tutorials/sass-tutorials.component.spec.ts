import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassTutorialsComponent } from './sass-tutorials.component';

describe('SassTutorialsComponent', () => {
  let component: SassTutorialsComponent;
  let fixture: ComponentFixture<SassTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
