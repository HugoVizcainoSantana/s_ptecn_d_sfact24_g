import { getAllCountries } from "@/data/rest-countries";
import styles from "./page.module.css";
import Image from "next/image";
export default async function Home() {
  const countries = await getAllCountries();
  return (
    <section>
      <h1>List of all countries</h1>
      <div>
        # Countries: {countries.length}
      </div>
      <ul className={styles.countries_list}>
        {countries.map((country) => (
          <li key={country.name.official} className={styles.country_item}>
            <Image
              src={country.flags.svg}
              alt={country.name.official}
              width={0}
              height={0}
              style={{ width: '48px', height: 'auto' }}
            />
            <span>{country.name.official}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
