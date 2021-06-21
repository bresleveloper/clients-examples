import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextKolkovComponent } from './rich-text-kolkov.component';

describe('RichTextKolkovComponent', () => {
  let component: RichTextKolkovComponent;
  let fixture: ComponentFixture<RichTextKolkovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichTextKolkovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextKolkovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
