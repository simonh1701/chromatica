import Image from "next/image";
import Link from "next/link";

const examples = [
  "chromatica",
  "username",
  "email",
  "nextjs",
  "tailwindcss",
  "vercel",
];

export default function Home() {
  return (
    <div className="relative">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white decoration-green-500 underline-offset-8 underline sm:text-6xl">
              Chromatica
            </h1>
            <p className="mt-6 px-4 text-lg leading-8 text-gray-300">
              Create colorful profile pictures for your users based on their
              username.
            </p>
            <div className="mt-8 sm:mt-12 justify-center flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-50/25 hover:ring-green-500">
                <Link
                  href="https://github.com/simonh1701/chromatica"
                  target="_blank"
                  className="whitespace-nowrap"
                >
                  Source code available on GitHub.
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Examples
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-12 grid grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:mx-0 "
          >
            {examples.map((slug) => (
              <li key={slug}>
                <Link
                  href={
                    process.env.LOCAL_DEVELOPMENT
                      ? `http://localhost:3000/${slug}`
                      : `http://${process.env.VERCEL_URL}/${slug}`
                  }
                >
                  <Image
                    unoptimized
                    src={
                      process.env.LOCAL_DEVELOPMENT
                        ? `http://localhost:3000/${slug}`
                        : `https://${process.env.VERCEL_URL}/${slug}`
                    }
                    alt=""
                    width={96}
                    height={96}
                    className="mx-auto h-24 w-24 rounded-full"
                  />
                </Link>

                <p className="text-sm mt-6 font-mono leading-6 text-gray-300">
                  /{slug}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
