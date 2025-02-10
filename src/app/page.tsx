import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border p-6">
        <div className="flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 128 128"
            fill="none"
          >
            <path
              fill="#fff"
              d="M16.995 26.842a16 16 0 0 1 11.51-11.114L72.677 4.713a16 16 0 0 1 15.38 4.41l31.625 32.748a15.999 15.999 0 0 1 3.87 15.525l-12.548 43.761a16 16 0 0 1-11.51 11.115l-44.172 11.013a16 16 0 0 1-15.38-4.41L8.318 86.128a16 16 0 0 1-3.87-15.525l12.547-43.761Z"
            />
            <path
              fill="#0B0E11"
              fillRule="evenodd"
              d="M53.982 35.714a9.366 9.366 0 0 0-8.588 9.334c0 .172.14.312.312.312H75.41a5.706 5.706 0 0 0 5.706-5.706v-4.202a1.84 1.84 0 0 0-1.992-1.833l-25.14 2.095ZM34.261 73.982a9.366 9.366 0 0 0 9.333 8.588c.173 0 .313-.14.313-.312V52.556A5.706 5.706 0 0 0 38.2 46.85h-4.203a1.84 1.84 0 0 0-1.832 1.992l2.095 25.14ZM81.117 84.37a9.366 9.366 0 0 1-8.588 9.334l-25.14 2.095a1.84 1.84 0 0 1-1.993-1.833v-4.202a5.706 5.706 0 0 1 5.706-5.706h29.703c.172 0 .312.14.312.312Zm11.485-28.983a9.748 9.748 0 0 0-9.673-8.54.325.325 0 0 0-.325.326v29.115a6.28 6.28 0 0 0 6.281 6.28h4.944a1.916 1.916 0 0 0 1.902-2.153L92.6 55.387Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="font-[family-name:var(--font-geist-mono)] text-xl font-bold">Spilnota Labs</h1>
        </div>
        <p className="font-[family-name:var(--font-geist-mono)] text-md font-medium">Building on Ethereum, conquering the world.</p>
        <div className="flex items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15.6}
            viewBox="0 0 45 47"
            fill="none"
          >
            <path
              fill="url(#a)"
              d="M9.023 20.397H0v18.59h20.297c.48-.01.947.15 1.323.453.376.302.637.728.739 1.204.06.29.09.585.091.882V47h12.404V35.654h-9.752a1.75 1.75 0 0 1-.92-.477 1.798 1.798 0 0 1-.497-.919l-.075-.358v-5.196c0-.465.048-.93.143-1.385 0-.043.02-.09.03-.136a3.205 3.205 0 0 1 1.134-1.717 3.111 3.111 0 0 1 1.93-.652h17.841V0H12.261v16.506c0 .467-.048.932-.143 1.389l-.03.136a3.204 3.204 0 0 1-1.135 1.715 3.111 3.111 0 0 1-1.93.65Z"
            />
            <mask
              id="b"
              width={45}
              height={47}
              x={0}
              y={0}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path
                fill="#fff"
                d="M9.023 20.397H0v18.59h20.297c.48-.01.947.15 1.323.453.376.302.637.728.739 1.204.06.29.09.585.091.882V47h12.404V35.654h-9.752a1.75 1.75 0 0 1-.92-.477 1.798 1.798 0 0 1-.497-.919l-.075-.358v-5.196c0-.465.048-.93.143-1.385 0-.043.02-.09.03-.136a3.205 3.205 0 0 1 1.134-1.717 3.111 3.111 0 0 1 1.93-.652h17.841V0H12.261v16.506c0 .467-.048.932-.143 1.389l-.03.136a3.204 3.204 0 0 1-1.135 1.715 3.111 3.111 0 0 1-1.93.65Z"
              />
            </mask>
            <g mask="url(#b)">
              <path fill="#5CFF00" d="M7.117 33.88H1.935v5.11h5.182v-5.11Z" />
              <path fill="#00943A" d="M17.522 27.713h-5.398v5.491h5.398v-5.49Z" />
              <path fill="#0F0" d="M22.919 18.017h-5.398v5.491h5.398v-5.49Z" />
              <path fill="#00943A" d="M39.36 15.121h-5.398v5.491h5.397v-5.49Z" />
              <path
                fill="url(#c)"
                d="M12.261 0v7.333h5.284v7.801h16.417V4.64h5.472v8.186h5.255V0H12.26Zm16.228 12.825h-5.472V7.334h5.472v5.49Z"
              />
              <path fill="#FFEC00" d="M12.12 22.816H7.18v4.898h4.94v-4.898Z" />
              <path fill="#C8FF00" d="M26.519 47.017H31.3v-4.865h-4.782v4.865Z" />
            </g>
            <defs>
              <linearGradient
                id="a"
                x1={27.128}
                x2={15.121}
                y1={4.666}
                y2={48.172}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.26} stopColor="#00F068" />
                <stop offset={0.33} stopColor="#2AE956" />
                <stop offset={0.5} stopColor="#81DB32" />
                <stop offset={0.64} stopColor="#C1D017" />
                <stop offset={0.74} stopColor="#E8C906" />
                <stop offset={0.79} stopColor="#F7C700" />
              </linearGradient>
              <linearGradient
                id="c"
                x1={4.639}
                x2={46.206}
                y1={-5.67}
                y2={14.41}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.38} stopColor="#00F068" />
                <stop offset={0.47} stopColor="#00D936" />
                <stop offset={0.55} stopColor="#00C70F" />
                <stop offset={0.6} stopColor="#00C000" />
              </linearGradient>
            </defs>
          </svg>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://beliefs.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-[family-name:var(--font-geist-mono)]">Beliefs.Social</p>
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex font-[family-name:var(--font-geist-mono)] items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:hi@spilnota.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style={{ "color": "currentcolor;" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="currentColor"></path></svg>
          hi@spilnota.xyz
        </a>
      </footer>
    </div>
  );
}
