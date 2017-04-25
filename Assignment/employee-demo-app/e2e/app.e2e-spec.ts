import { EmployeeDemoAppPage } from './app.po';

describe('employee-demo-app App', function() {
  let page: EmployeeDemoAppPage;

  beforeEach(() => {
    page = new EmployeeDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
