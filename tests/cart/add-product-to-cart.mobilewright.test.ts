import { test } from '@mobilewright/test';

import { CartPage } from '../pages/cart.page.js';
import { HeaderComponent } from '../pages/header.component.js';
import { HomePage } from '../pages/home.page.js';
import { ProductDetailsPage } from '../pages/product-details.page.js';

const BASE_URL = process.env.TOOLSHOP_BASE_URL ?? 'https://practicesoftwaretesting.com/';
const PRODUCT_NAME = 'Combination Pliers';

test.describe('Toolshop cart on mobile', () => {
  test('adds a product to cart and reflects cart state on a default android device', async ({
    device,
    screen,
  }) => {
    const homePage = new HomePage(device, screen, BASE_URL);
    const productDetailsPage = new ProductDetailsPage(screen);
    const header = new HeaderComponent(screen);
    const cartPage = new CartPage(screen);

    await homePage.open();

    await homePage.openProduct(PRODUCT_NAME);
    await productDetailsPage.expectLoaded(PRODUCT_NAME);
    await productDetailsPage.addToCart();

    await header.expectCartCount(1);
    await header.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectLineItem(PRODUCT_NAME, 1);
  });
});
