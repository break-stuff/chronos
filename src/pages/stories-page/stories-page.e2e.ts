import { newE2EPage } from '@stencil/core/testing';

describe('stories-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stories-page></stories-page>');
    const element = await page.find('stories-page');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
