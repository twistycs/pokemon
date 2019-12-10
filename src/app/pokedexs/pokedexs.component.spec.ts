import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexsComponent } from './pokedexs.component';

describe('PokedexsComponent', () => {
  let component: PokedexsComponent;
  let fixture: ComponentFixture<PokedexsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
