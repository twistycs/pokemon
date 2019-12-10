import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexsDetailsComponent } from './pokedexs-details.component';

describe('PokedexsDetailsComponent', () => {
  let component: PokedexsDetailsComponent;
  let fixture: ComponentFixture<PokedexsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
