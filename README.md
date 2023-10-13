# PoC: A HD Wallet Desktop App for all major platforms (Windows/macOS/Linux) 
A [Tauri](https://tauri.app) and [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
https://tauri.app/v1/guides/getting-started/setup/next-js

## Getting Started
```bash
pnpm tauri dev
```

- You can open [http://localhost:3000](http://localhost:3000) to quickly preview the Next.js app.  
- Once Rust has finished building, the webview automatically opens,  
displaying the web app in a Tauri window.

## Technical Notes:
- Tauri does not have a Node.js runtime you must set Next.js to SSG/SPA mode (no SSR)  
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
