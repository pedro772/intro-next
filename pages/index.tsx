import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Consultar países</h1>
      <button>
        <Link href="/countries/country-list">Ir para a lista de países</Link>
      </button>
    </>
  )
}
