import { UserDirectoryPage } from './app.po';

describe('user-directory App', function() {
  let page: UserDirectoryPage;

  beforeEach(() => {
    page = new UserDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
