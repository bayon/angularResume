import { ChocolatePage } from './app.po';

describe('chocolate App', () => {
  let page: ChocolatePage;

  beforeEach(() => {
    page = new ChocolatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
