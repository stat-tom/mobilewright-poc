# mobilewright-poc

Mobilewright proof of concept for the Toolshop cart flow on a default Android device (emulator or hardware).

## Prerequisites

- Node.js 18+
- A booted Android emulator or connected device supported by Mobilewright (tests default to Android; set `MOBILEWRIGHT_PLATFORM=ios` for iOS)

## Run

```bash
npm install
npm run doctor
npm run test:cart
```

Optional environment variables:

- `MOBILEWRIGHT_PLATFORM=ios` (omit or use `android` for Android, the default)
- `MOBILEWRIGHT_DEVICE_NAME=<regex>`
- `TOOLSHOP_BASE_URL=https://practicesoftwaretesting.com/`
