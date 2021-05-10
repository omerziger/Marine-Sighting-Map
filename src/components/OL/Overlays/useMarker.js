import seaOtter from "../../../static/otter.png";
const orca =
  "https://www.freepnglogos.com/uploads/whale-png/whale-animal-fact-sheets-2.png";
const minke =
  "https://www.freepnglogos.com/uploads/whale-png/minke-whale-9.png";
const grayWhale =
  "https://www.freepnglogos.com/uploads/whale-png/whale-gringa-cabo-20.png";
const humpBack =
  "https://www.freepnglogos.com/uploads/whale-png/humpback-whale-6.png";
const atlanticWhiteSidedDolphin =
  "https://www.freepnglogos.com/uploads/dolphin-png/white-beaked-dolphin-27.png";
const dallsPorpoise =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-dalls-porpoise.png?null&itok=TZUgxrWS";
const harborPorpoise =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-harbor-porpoise.png?null&itok=ixR4kl_y";
const harborSeal =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-harbor-seal.png?null&itok=91NtIdPx";
const northernElephantSeal =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-northern-elephant-seal.png?null&itok=VH1CR5sR";
const californiaSeaLion =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-california-sea-lion.png?null&itok=1TJJaSqK";
const stellerSeaLion =
  "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-stellar-sea-lion.png?null&itok=8iOnqGNM";

export default function useMarker(specie) {
  if (!specie) return;
  if (specie === "orca") return orca;
  if (specie === "minke") return minke;
  if (specie === "gray whale") return grayWhale;
  if (specie === "humpback") return humpBack;
  if (specie === "atlantic white-sided dolphin")
    return atlanticWhiteSidedDolphin;
  if (specie === "pacific white-sided dolphin")
    return atlanticWhiteSidedDolphin;
  if (specie === "dalls porpoise") return dallsPorpoise;
  if (specie === "harbor porpoise") return harborPorpoise;
  if (specie === "harbor seal") return harborSeal;
  if (specie === "northern elephant seal") return northernElephantSeal;
  if (specie === "southern elephant seal") return northernElephantSeal;
  if (specie === "california sea Lion") return californiaSeaLion;
  if (specie === "steller sea lion") return stellerSeaLion;
  if (specie === "sea otter") return seaOtter;
}
