import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDoctypeComponent } from './tag-doctype.component';

describe('TagDoctypeComponent', () => {
  let component: TagDoctypeComponent;
  let fixture: ComponentFixture<TagDoctypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDoctypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDoctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
