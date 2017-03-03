import { CameraNantesPage } from './app.po';

describe('camera-nantes App', function() {
  let page: CameraNantesPage;

  beforeEach(() => {
    page = new CameraNantesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
