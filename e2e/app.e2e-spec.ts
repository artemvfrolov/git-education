import { GitEducationPage } from './app.po';

describe('git-education App', () => {
  let page: GitEducationPage;

  beforeEach(() => {
    page = new GitEducationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
