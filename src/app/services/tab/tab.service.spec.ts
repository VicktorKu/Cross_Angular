import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  fit('Створення екземпляру', () => {
    expect(service).toBeTruthy();
  });

  fit('Табулювання значення функції х = 1, y = 2', () => {
    let x = 1;
    let yf = 2*x;
    let XYcor = service.getTab(1,2,1);
    let y = XYcor.get(x);
    expect(y.toFixed(3)).toBe(yf.toFixed(3));
  })
});
