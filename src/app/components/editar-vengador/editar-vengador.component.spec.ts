import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVengadorComponent } from './editar-vengador.component';

describe('EditarVengadorComponent', () => {
  let component: EditarVengadorComponent;
  let fixture: ComponentFixture<EditarVengadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVengadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarVengadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
