/**
 * Minimal Slack reporter.
 * Set SLACK_WEBHOOK_URL in .env to enable notifications.
 */
import dotenv from 'dotenv';
dotenv.config();

export default class SlackReporter {
  onEnd(result) {
    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (!webhook) return;

    const total = result?.status === 'passed' ? 'PASSED' : 'COMPLETED';
    const text = `Playwright run ${total}. Passed: ${result.passed}, Failed: ${result.failed}, Flaky: ${result.flaky}, Skipped: ${result.skipped}`;

    // Lazy send via fetch (Node18+ has global fetch)
    try {
      fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      }).catch(() => {});
    } catch {}
  }
}