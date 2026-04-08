import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { retryWithBackoff } from "@/utils/retryWithBackoff";

describe("retryWithBackoff", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("retries 429 responses with exponential backoff", async () => {
    const responses = [
      { status: 429 },
      { status: 429 },
      { status: 429 },
      { status: 200 },
    ];
    const fn = vi.fn().mockImplementation(() => Promise.resolve(responses.shift()));

    const promise = retryWithBackoff(fn);

    expect(fn).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(1000);
    expect(fn).toHaveBeenCalledTimes(2);

    await vi.advanceTimersByTimeAsync(2000);
    expect(fn).toHaveBeenCalledTimes(3);

    await vi.advanceTimersByTimeAsync(4000);
    expect(fn).toHaveBeenCalledTimes(4);

    await expect(promise).resolves.toEqual({ status: 200 });
  });

  it("stops retrying after the configured maxRetries", async () => {
    const fn = vi.fn().mockResolvedValue({ status: 429 });

    const promise = retryWithBackoff(fn, 2);

    await vi.advanceTimersByTimeAsync(1000);
    await vi.advanceTimersByTimeAsync(2000);

    await expect(promise).resolves.toEqual({ status: 429 });
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
