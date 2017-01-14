import { TmpAngularWithSassPage } from './app.po';

describe('tmp-angular-with-sass App', function() {
  let page: TmpAngularWithSassPage;

  beforeEach(() => {
    page = new TmpAngularWithSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
