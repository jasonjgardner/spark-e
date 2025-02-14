import oilImage from "@/assets/images/oil.png";
import candyImage from "@/assets/images/candy.png";
import secondCandyImage from "@/assets/images/candy2.png";
import opalImage from "@/assets/images/opal.png";
import secondOpalImage from "@/assets/images/opal2.png";
import anotherOpalImage from "@/assets/images/opal3.png";
import friesImage from "@/assets/images/fries.png";
import lavaImage from "@/assets/images/lava.png";
import stormImage from "@/assets/images/storm.png";
import cityImage from "@/assets/images/city.png";
import paintingImage from "@/assets/images/painting.png";
import rocksImage from "@/assets/images/rocks.png";
import ledImage from "@/assets/images/led.png";
import blingImage from "@/assets/images/bling.png";
import resinImage from "@/assets/images/resin.png";
import iceImage from "@/assets/images/ice.png";
import yarnImage from "@/assets/images/yarn.png";
import fountainImage from "@/assets/images/fountain.png";
import baseballImage from "@/assets/images/baseball.png";
import laserImage from "@/assets/images/lasers.png";
import farmImage from "@/assets/images/farm.png";
import neonImage from "@/assets/images/neon.png";
import neonImage2 from "@/assets/images/neon2.png";
import runwayImage from "@/assets/images/runway.png";
import stairwellImage from "@/assets/images/stairwell.png";
import treeImage from "@/assets/images/tree.png";
import waterfallImage from "@/assets/images/waterfall.png";
import riverImage from "@/assets/images/river.png";
import type { GalleryProps } from "@/components/Gallery";

const images: GalleryProps["images"] = [
  { url: oilImage, prompt: "Oil spill", expanded: true },
  { url: candyImage, prompt: "Candy covered" },
  { url: yarnImage, prompt: "Pink yarn" },

  { url: opalImage, prompt: "Opal" },
  { url: treeImage, prompt: "Tree" },
  { url: blingImage, prompt: "Bling bling" },

  { url: friesImage, prompt: "French fries" },
  { url: lavaImage, prompt: "Hot lava" },
  { url: stormImage, prompt: "Stormy weather" },
  { url: paintingImage, prompt: "Renaissance painting" },
  { url: cityImage, prompt: "Foggy forest fortress", expanded: true },
  { url: rocksImage, prompt: "Rocky formation" },
  { url: ledImage, prompt: "LED lights" },
  { url: anotherOpalImage, prompt: "White opal" },
  { url: fountainImage, prompt: "Fountain reflection", expanded: true },
  { url: neonImage, prompt: "Neon" },
  { url: resinImage, prompt: "Plastic resin" },

  { url: stairwellImage, prompt: "Stairwell" },

  { url: waterfallImage, prompt: "Waterfall" },
  { url: farmImage, prompt: "Farm" },
  { url: laserImage, prompt: "Laser lights" },
  { url: runwayImage, prompt: "Runway" },
  { url: baseballImage, prompt: "Baseball" },
  { url: iceImage, prompt: "Glacial ice" },
  { url: neonImage2, prompt: "Neon 2", expanded: true },
  { url: secondOpalImage, prompt: "Light opal" },
  { url: secondCandyImage, prompt: "Candy covered" },
  { url: riverImage, prompt: "Riverbed" },
];

export default images;
