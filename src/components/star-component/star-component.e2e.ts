import { newE2EPage } from '@stencil/core/testing';

describe('star-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<star-component></star-component>');
    const element = await page.find('star-component');
    expect(element).toHaveClass('hydrated');
  });
});
