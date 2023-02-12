import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InvestimentStatementComponent } from './investiment-statement.component'

describe('InvestimentStatementComponent', () => {
  let component: InvestimentStatementComponent
  let fixture: ComponentFixture<InvestimentStatementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestimentStatementComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InvestimentStatementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
