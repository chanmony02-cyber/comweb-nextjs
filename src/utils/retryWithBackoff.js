const DEFAULT_BACKOFF_DELAYS = [1000, 2000, 4000];

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function retryWithBackoff(fn, maxRetries = 3) {
  let attempt = 0;

  while (true) {
    const result = await fn();

    if (!result || result.status !== 429 || attempt >= maxRetries) {
      return result;
    }

    const waitTime = DEFAULT_BACKOFF_DELAYS[attempt] ?? 1000 * 2 ** attempt;

    await delay(waitTime);
    attempt += 1;
  }
}
