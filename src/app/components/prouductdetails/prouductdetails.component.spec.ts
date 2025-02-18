import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductdetailsComponent } from './prouductdetails.component';

describe('ProuductdetailsComponent', () => {
  let component: ProuductdetailsComponent;
  let fixture: ComponentFixture<ProuductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuductdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProuductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
