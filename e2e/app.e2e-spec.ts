import { TheIndividualistPage } from './app.po';

describe('the-individualist App', () => {
  let page: TheIndividualistPage;

  beforeEach(() => {
    page = new TheIndividualistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
