import { ToDooNgPage } from './app.po';

describe('to-doo-ng App', () => {
  let page: ToDooNgPage;

  beforeEach(() => {
    page = new ToDooNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
