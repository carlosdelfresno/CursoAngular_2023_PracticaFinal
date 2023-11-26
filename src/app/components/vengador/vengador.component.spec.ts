import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VengadorComponent } from './vengador.component';

describe('VengadorComponent', () => {
  let component: VengadorComponent;
  let fixture: ComponentFixture<VengadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VengadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VengadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
