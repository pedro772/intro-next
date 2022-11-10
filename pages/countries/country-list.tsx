import Link from "next/link";

export default function CountryList({ countriesData } : any) {
  return (
    <>
      <ul>
      {
        countriesData.map((country : any, key : any) => <li key={key}>{country.name.common}</li>)
      }
      </ul>
      <p>
        <Link href="/">Voltar para a página inicial</Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countriesData = await res.json();

  return {
    props: {
      countriesData
    }
  }
}