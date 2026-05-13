import { expect } from '@mobilewright/test';
import type { Screen } from 'mobilewright';

import { BasePage } from './base.page.js';

export class ProductDetailsPage extends BasePage {
  constructor(screen: Screen) {
    super(screen);
  }

  async expectLoaded(productName: string): Promise<void> {
    await expect(this.screen.getByText(productName)).toBeVisible();
    await expect(this.screen.getByRole('button', { name: /add to cart/i })).toBeVisible();
  }

  async addToCart(): Promise<void> {
    await this.tapVisible(this.screen.getByRole('button', { name: /add to cart/i }));
    await expect(this.screen.getByText(/added|cart/i, { exact: false })).toBeVisible({
      timeout: 10_000,
    });
  }
}
