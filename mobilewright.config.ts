import { defineConfig } from 'mobilewright';

const platform =
  process.env.MOBILEWRIGHT_PLATFORM?.toLowerCase() === 'ios' ? 'ios' : 'android';
const deviceName = process.env.MOBILEWRIGHT_DEVICE_NAME
  ? new RegExp(process.env.MOBILEWRIGHT_DEVICE_NAME)
  : undefined;

export default defineConfig({
  platform,
  deviceName,
  testDir: 'tests',
  testMatch: '**/*.mobilewright.test.ts',
  timeout: 15_000,
  reporter: 'list',
  retries: 1,
});
