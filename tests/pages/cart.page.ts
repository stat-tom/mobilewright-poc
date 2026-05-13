import { expect } from '@mobilewright/test';
import type { Screen } from 'mobilewright';

import { BasePage } from './base.page.js';

export class CartPage extends BasePage {
  constructor(screen: Screen) {
    super(screen);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.screen.getByText(/shopping cart|cart/i)).toBeVisible();
  }

  async expectLineItem(productName: string, quantity: number): Promise<void> {
    await expect(this.screen.getByText(productName)).toBeVisible();

    const quantityField = this.screen.getByRole('textfield', { name: /quantity/i });
    await expect(quantityField).toBeVisible();
    await expect(await quantityField.getValue()).toBe(String(quantity));
  }
}
