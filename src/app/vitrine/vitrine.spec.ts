import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vitrine } from './vitrine';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

describe('Vitrine', () => {
  let component: Vitrine;
  let fixture: ComponentFixture<Vitrine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vitrine, CommonModule, Router],
    }).compileComponents();

    fixture = TestBed.createComponent(Vitrine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
