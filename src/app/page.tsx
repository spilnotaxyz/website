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
        <p className="font-[family-name:var(--font-geist-mono)] text-md font-medium">Development agency.</p>
        <p className="font-[family-name:var(--font-geist-mono)] text-md font-medium">Specialized in high-robust financial applications, Web3, Web Development.</p>
        <p className="font-[family-name:var(--font-geist-mono)] text-md font-medium">From idea, to launch – contact us and let's get busy.</p>
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
