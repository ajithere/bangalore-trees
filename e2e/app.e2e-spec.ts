import { BangaloreTreesPage } from './app.po';

describe('bangalore-trees App', () => {
  let page: BangaloreTreesPage;

  beforeEach(() => {
    page = new BangaloreTreesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
