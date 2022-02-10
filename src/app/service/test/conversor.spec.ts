import { HttpClient } from '@angular/common/http';
import { ConversorService } from '../conversor.service';

describe(ConversorService.name, () => {
  let http!: HttpClient;
  const service = new ConversorService(http);

  it(`#converteMoeda() should have a sucessful connection with API`, () => {
    expect(service.params).not.toBe(null);
  });
});
