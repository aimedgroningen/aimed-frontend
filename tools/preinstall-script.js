/**
 * Do NOT allow using `npm` as package manager.
 */

/* eslint no-console: ["error", { allow: ["error"] }] */
if (!process.env.npm_execpath.includes('pnpm')) {
  console.error('You must use pnpm to install dependencies:')
  console.error('  $ pnpm install')
  process.exit(1)
}
