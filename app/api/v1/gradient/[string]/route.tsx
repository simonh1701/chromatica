import { ImageResponse, NextResponse } from "next/server";
import { generateGradientColors } from "@/lib/colors";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { string: string };
  }
) {
  const string = params.string;

  const url = new URL(request.url);
  const size = Number(url.searchParams.get("size") || "120");

  if (size <= 0)
    return NextResponse.json(
      { error: "Size cannot be less than or equal to 0" },
      { status: 400 }
    );

  const [c1, c2, c3, c4] = generateGradientColors(string);

  const gradient = (
    <svg
      height={`${size}px`}
      width={`${size}px`}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <defs>
          <linearGradient id="0" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <radialGradient
            id="1"
            gradientTransform="translate(-0.5 0) scale(2, 2)"
          >
            <stop offset="0%" stopColor={c3} stop-opacity="0.6" />
            <stop offset="60%" stopColor={c4} stop-opacity="0.25" />
            <stop offset="100%" stopColor={c4} stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect fill="url(#0)" height="100%" width="100%" />
        <rect fill="url(#1)" height="100%" width="100%" />
      </g>
    </svg>
  );

  return new ImageResponse(gradient, {
    width: size,
    height: size,
  });
}
