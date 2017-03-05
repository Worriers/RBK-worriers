import { RBKWoriorsPage } from './app.po';

describe('rbk-woriors App', () => {
  let page: RBKWoriorsPage;

  beforeEach(() => {
    page = new RBKWoriorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
