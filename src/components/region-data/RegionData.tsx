import { type Country, getRegionData } from '@/data/rest-countries';
import styles from './RegionData.module.css'; // Create this CSS module for styling

interface RegionDataProps {
    region: string;
    regionData: Country[];
}

const formatter = new Intl.NumberFormat('en-EN');

const RegionData = async ({ region, regionData }: RegionDataProps) => {
    return (
        <div className={styles.region}>
            <h2>{region}</h2>
            <ul>
                <li># Countries: {regionData.length}</li>
                <li># Area: {formatter.format(regionData.reduce((acc, curr) => acc + curr.area, 0))}km<sup>2</sup></li>
                <li># Population: {formatter.format(regionData.reduce((acc, curr) => acc + curr.population, 0))}</li>
                <li># Population Density: {formatter.format(regionData.reduce((acc, curr) => acc + curr.population / curr.area, 0))}</li>
            </ul>
        </div>
    );
};

export default RegionData;
