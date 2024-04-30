import Link from "next/link";

import ButterHandler from "./(components)/features/bhandler/ButterHandler";

export default function Home() {
  return (
    <main>
      <section className="section">
        <section>
          <>
            <h1 className="heading-1">Heading 1</h1>
            <h2 className="heading-2">Heading 2</h2>
            <ButterHandler></ButterHandler>
            <Link
              className="button"
              href={"/person"}
            >
              Person
            </Link>
          </>
        </section>
      </section>
      <section className="orange-section">
        <h3 className="heading-3">Heading 3</h3>
        <h4 className="heading-4">Heading 4</h4>
        <p>Normal text</p>
      </section>
    </main>
  );
}
