/**
 * Utility to monitor requests within a test.
 * Example:
 *   const stop = await startRequestMonitor(page, /api\/orders/);
 *   // ... run actions ...
 *   const calls = stop();
 */
export async function startRequestMonitor(page, pattern) {
  const calls = [];
  const onRequest = (req) => {
    if (!pattern || req.url().match(pattern)) calls.push({ url: req.url(), method: req.method() });
  };
  page.on('request', onRequest);
  return () => {
    page.off('request', onRequest);
    return calls;
  };
}