import { getTranslations } from "next-intl/server";

export default async function Ticker() {
  const t = await getTranslations("ticker");
  const names = t.raw("channels") as string[];

  // Repetitions per copy needed to cover the width on large screens
  // (~180px per channel); minimum 2 for a stable translateX(-50%) loop.
  const TICKER_TARGET_WIDTH = 4800;
  const CHANNEL_EST_WIDTH = 180;
  const repetitions = Array.from(
    {
      length: Math.max(
        2,
        Math.ceil(TICKER_TARGET_WIDTH / (names.length * CHANNEL_EST_WIDTH)),
      ),
    },
    (_, i) => i,
  );

  return (
    <div
      className="overflow-hidden border-y border-white/10 bg-ink py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            {repetitions.map((rep) =>
              names.map((name) => (
                <span
                  key={`${copy}-${rep}-${name}`}
                  className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-zinc-300"
                >
                  <span className="text-teal">#</span>
                  {name}
                  <span className="text-zinc-600">✦</span>
                </span>
              )),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}