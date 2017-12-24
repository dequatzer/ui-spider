import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTutorialsComponent } from './css-tutorials.component';

describe('CssTutorialsComponent', () => {
  let component: CssTutorialsComponent;
  let fixture: ComponentFixture<CssTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
