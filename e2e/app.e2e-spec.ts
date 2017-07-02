import { PartyPlannerPage } from './app.po';

describe('party-planner App', () => {
  let page: PartyPlannerPage;

  beforeEach(() => {
    page = new PartyPlannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
