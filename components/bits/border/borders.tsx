import { BorderStyle } from "./types";

import cornerPlusSigns from "./corner-plus-signs";
import scanLine from "./scan-line";
import cornerLines from "./corner-lines";
import curvedLCorners from "./curved-l-corners";
import cornerBrackets from "./corner-brackets";
import cornerDots from "./corner-dots";
import cornerDotSquare from "./corner-dot-square";
import minimalCorners from "./minimal-corners";
import extendedCorners from "./extended-corners";
import thickBrackets from "./thick-brackets";
import simpleFrame from "./simple-frame";
import offsetFrame from "./offset-frame";

const borderStyles: BorderStyle[] = [
  cornerPlusSigns,
  scanLine,
  cornerLines,
  curvedLCorners,
  cornerBrackets,
  cornerDots,
  cornerDotSquare,
  minimalCorners,
  extendedCorners,
  thickBrackets,
  simpleFrame,
  offsetFrame,
];

export default borderStyles;
