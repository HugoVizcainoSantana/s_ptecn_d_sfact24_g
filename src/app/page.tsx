import { getAllCountries } from "@/data/rest-countries";
import styles from "./page.module.css";
import Image from "next/image";
export default async function Home() {
  const countries = await getAllCountries();
  return (
    <div>
      <main>
        <h1>S_PTecn_D_SFact24_G</h1>
        <ul className={styles.countries_list}>
          {countries.map((country) => (
            <li key={country.name.official} className={styles.country_item}>
              <Image src={country.flags.svg} alt={country.name.official} width={32} height={32} />
              <span>{country.name.official}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
