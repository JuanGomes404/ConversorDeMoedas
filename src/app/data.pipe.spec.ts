import { DataBrPipe } from './data.pipe';

describe('DataPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });
});
