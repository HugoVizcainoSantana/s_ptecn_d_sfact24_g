import { getRegionData } from "@/data/rest-countries";
import RegionData from "../region-data/RegionData";

const regions = ["Europe", "Asia", "Africa", "Americas", "Oceania"];

export const WorldData = async () => {
    const regionsData = await Promise.all(regions.map(region => getRegionData(region).then(data => ({ name: region, data }))));
    return (
        <div>
            <h1>World Data</h1>
            {regionsData.map((region) => (
                <RegionData key={region.name} region={region.name} regionData={region.data} />
            ))}
        </div>
    );
};

