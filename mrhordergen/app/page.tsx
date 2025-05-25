/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";

// Types
interface Product {
  Type: "TYRE" | "TUBE";
  Item: string;
}

interface OrderItem {
  category: "TYRE" | "TUBE" | "AUTO_TUBE";
  text: string;
}

// Constants
const productData = [
  { Type: "TYRE", Item: "BICYCLE TYRE 12x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 12X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 14x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 14X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 16x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 16X2.125 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 16X2.40 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 18x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20x1.75 MRH SPORTS NG" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20X1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20X2.125 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20X2.40 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24x1.5 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24x1.5 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X1.5 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY BLUELINE FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY REDLINE FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY BLUELINE FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 10PLY REDLINE FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 MRH SPORTS NG 5003" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 MRH SPORTS NG 5021" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 SUPERFAST RED LINE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.40" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26 X 1.1/2 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.1/2 MRH SPORTS 10PLY SUP TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.3/8 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.1/2 MRH SPORTS 10PLY SUP BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.3/8 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.3/8 NYLON SS" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 12PLY FORCE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 MRH SPORTS NG SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 NYLON FORCE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 NYLON SS" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X1.5 NYLON WITH CENTER COLOUR" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 10PLY REDLINE FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 MRH SPORTS 10PLY TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 10PLY REDLINE FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 MRH SPORTS 10PLY BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 MRH SPORTS NG 5014,26,3" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 MRH SPORTS NG 5017,18,5" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 NYLON FORCE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.125 SUPERFAST RED LINE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.30/2.35 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.35 MRH FORCE SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.40 COTTON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X2.40 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 MRH SPORTS 10PLY SUP BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 MRH SPORTS 10PLY SUP TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 MRH SPORTS NG BB SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 MRH SPORTS NG SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 NYLON SS BB" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 NYLON SS SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 SUPERFAST PLUS B.T SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.1/2 SUPERFAST PLUS T.T SUP" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.5 10PLY FORCE TT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.5 10PLY FORCE BT" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.5 NYLON FORCE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 28X1.5 NYLON WITH CENTER COLOUR" },
  { Type: "TYRE", Item: "BICYCLE TYRE 20X3.00" },
  { Type: "TYRE", Item: "BICYCLE TYRE 24X2.125 SUPERFAST BLUELINE" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X3.00 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 26X4.00 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 27.5x2.10 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 29X2.10 NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 700X23C NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 700X28C" },
  { Type: "TYRE", Item: "BICYCLE TYRE 700X32C NYLON" },
  { Type: "TYRE", Item: "BICYCLE TYRE 700X35C NYLON" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X2.35/40 A/V 48MM BOX" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 24X2.125 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 24X2.35/40 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 24X2.40" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 24X2.40 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 24X2.40 A/V 48MM BOX" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X2.125 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X2.35/40" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X2.35/40 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X3.00 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 26X4.00 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 27.5x2.10 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 28X1.1/2 D/V 350GM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 29X2.10 A/V 48MM" },
  { Type: "TUBE", Item: "BUTYL BICYCLE TUBE 700X35C A/V 48MM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 14X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 16X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 18X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 20X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 24X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 24X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 24X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 24X2.125 DUM DUM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 24X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.3/8 DUMDUM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.3/8 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.38 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.5 DUMDUM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X2.125 DUMDUM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 26X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 27X1.25 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 28X1.1/2 ISI 300GM." },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 28X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 28X1.5 DUMDUM" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 28X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JOINTED BICYCLE TUBE 28X1.5 SILVER SUP BOX" },
  { Type: "TUBE", Item: "JOINTED RICKSHAW TUBE 28X1.5 DABANGG SUP" },
  { Type: "TUBE", Item: "JOINTED RICKSHAW TUBE 28X1.5 GOLDTECH BDM SUP" },
  { Type: "TUBE", Item: "JOINTED RICKSHAW TUBE 28X1.5 S.W. PLUS SUP" },
  { Type: "TUBE", Item: "JOINTED RICKSHAW TUBE 28X1.5 SHEHZADA SUP" },
  { Type: "TUBE", Item: "JOINTED RICKSHAW TUBE 28X1.5 STARWAY SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 26X1.3/8 MRH INTER SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 26X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 26X1.5 MRH INTER SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 26X2.125 MRH INTER SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.1/2 MRH INTER 300 SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH INTER PLUS 400 GM SUP" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH-300 PLATINUM SERIES" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH-300 SUPER SERIES" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH-350 SUPER SERIES" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH-400 PLATINUM SERIES" },
  { Type: "TUBE", Item: "JOINTED TUBE 28X1.5 MRH-400 SUPER SERIES" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 12X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 14X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 16X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 18X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X2.40 AV 48MM BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.125 DUM DUM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.35 AV 48MM BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26 x 2.35/40 AV 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X1.5 DUMDUM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.125 DUMDUM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.35/40 AV 48MM BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 27.5x2.10 48MM AV BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 28X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 28X1.5 DUMDUM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 28X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 29x2.10 48MM A/V BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 700x23C A/V 48 MM BOX" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 700x35C A/V 48 MM BOX" },
  { Type: "TUBE", Item: "MOULDED RICKSHAW TUBE 28X1.5 DABANGG SUP" },
  { Type: "TUBE", Item: "MOULDED RICKSHAW TUBE 28X1.5 S.W. PLUS" },
  { Type: "TUBE", Item: "MOULDED RICKSHAW TUBE 28X1.5 SHEHZADA SUP" },
  { Type: "TUBE", Item: "MOULDED RICKSHAW TUBE 28X1.5 STARWAY SUP" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.1/2 MRH INTER 300 SUP" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH INTER PLUS 400 GM SUP" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH-300 PLATINUM SERIES" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH-300 SUPER SERIES" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH-350 SUPER SERIES" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH-400 PLATINUM SERIES" },
  { Type: "TUBE", Item: "MOULDED TUBE 28X1.5 MRH-400 SUPER SERIES" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 12 x 2.35" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 14 x 2.35" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 16 x 2.40" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 16X2.125 LONG VALVE" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20 x 2.35" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20 x 2.40" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20 x 2.40 ISI" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X2.125 LONG VALVE" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X2.40 A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 20X3.00 A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24 x 2.35 A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X2.125 LONG VALVE" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 24X3.00 A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26 x 2.35 A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.125 LONG VALVE" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 27.5x2.10 48MM A/V" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 26X2.10 48MM A/V" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 700x23C A/V 48MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLE TUBE 700x32C A/V 48 MM" },
  { Type: "TUBE", Item: "MOULDED BICYCLETUBE 20X3.00 A/V 48MM BOX" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 12 PLY SPORTS TT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 12 PLY SPORTS BT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 12PLY FORCE TT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 12PLY FORCE BT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 20 PLY SPORTS TT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 20 PLY SPORTS BT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 20PLY FORCE TT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 20PLY FORCE BT" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 27 PLY TT PLUS N.G. SUP" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 TT 22 PLY N.G" },
];



const autoTubeSizes = [
  "2.75-17/3.00-17",
  "2.75-18/3.00-18",
  "3.50-10/90-90-10/100-90-10",
  "90-90-12",
  "3.75-12",
  "3.00-14",
  "4.00-8",
  "4.50-10",
  "3.50-8",
  "4.50-12",
  "5.00-12",
  "8.15-15",
  "8.25-15",
  "6.00-16",
  "7.50-16",
  "5.00-19",
  "6.00-19",
  "7.00-19",
  "1.55D-70R-13 S/V",
  "1.55D-65R-14",
  "9.00-16",
  "12.4-28",
  "13.6-28",
  "100-90-17",
  "100-90-18",
  "3.25-19",
  "2.50-16",
  "1.55D-80-12",
  "120/90-26",
  "5.00-38"
];

const promotionalItems = ["T-Shirts", "Notepads", "Pens", "Calenders", "Diaries"];

// Utility Functions
const parseSize = (item: string) => {
  const sizePart = item.split(" ").find((part) => part.match(/^\d{2}[xX]/));
  if (!sizePart) return { rim: "", width: "" };
  const [rim, width] = sizePart.split(/x|X/i).map((s) => s.replace(/\D+$/, ""));
  return { rim, width };
};

export default function OrderPage() {
  // State Management
  const [orderFrom, setOrderFrom] = useState("");
  const [showOrderFromDialog, setShowOrderFromDialog] = useState(true);
  const [category, setCategory] = useState<"TYRE" | "TUBE" | "AUTO_TUBE">("TYRE");
  const [prefix, setPrefix] = useState("");
  const [rim, setRim] = useState("");
  const [width, setWidth] = useState("");
  const [type, setType] = useState("");
  const [autoTubeSize, setAutoTubeSize] = useState(autoTubeSizes[0]);
  const [qty, setQty] = useState("1");
  const [unit, setUnit] = useState("PCS");
  const [isBoxed, setIsBoxed] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [promos, setPromos] = useState<string[]>([]);

  // Filtered Data Calculations
  const filteredProducts = productData.filter(
    (p) => p.Type === category && p.Item.startsWith(prefix)
  );

  const prefixes = Array.from(
    new Set(
      productData
        .filter((p) => p.Type === category)
        .map((p) => p.Item.split(" ")[0])
    )
  );

  const rimSizes = Array.from(
    new Set(filteredProducts.map((p) => parseSize(p.Item).rim))
  ).filter(Boolean);

  const widths = Array.from(
    new Set(
      filteredProducts
        .filter((p) => parseSize(p.Item).rim === rim)
        .map((p) => parseSize(p.Item).width)
    )
  ).filter(Boolean);

  const types = Array.from(
    new Set(
      filteredProducts
        .filter(
          (p) =>
            parseSize(p.Item).rim === rim && parseSize(p.Item).width === width
        )
        .map((p) => {
          const parts = p.Item.split(" ");
          const sizeIndex = parts.findIndex((part) => part.match(/^\d{2}[xX]/));
          return parts.slice(sizeIndex + 1).join(" ");
        })
    )
  ).filter(Boolean);

  // Effects
  useEffect(() => {
    if (category === "AUTO_TUBE") return;

    if (prefixes.length > 0 && !prefixes.includes(prefix)) {
      setPrefix(prefixes[0]);
      setRim("");
      setWidth("");
      setType("");
    }

    if (rimSizes.length > 0 && !rimSizes.includes(rim)) {
      setRim(rimSizes[0]);
      setWidth("");
      setType("");
    }

    if (widths.length > 0 && !widths.includes(width)) {
      setWidth(widths[0]);
      setType("");
    }

    if (types.length > 0 && !types.includes(type)) {
      setType(types[0]);
    }
  }, [category, prefixes, rimSizes, widths, types, prefix, rim, width, type]);

  // Action Handlers
  const resetForm = () => {
    setQty("1");
    setUnit("PCS");
    setIsBoxed(false);
    if (category === "AUTO_TUBE") {
      setAutoTubeSize(autoTubeSizes[0]);
    } else {
      setPrefix(prefixes[0] || "");
      setRim("");
      setWidth("");
      setType("");
    }
  };

  const addOrder = () => {
    let text;
    if (category === "AUTO_TUBE") {
      text = `AUTO TUBE ${autoTubeSize} - ${qty} ${unit}${isBoxed ? " (BOXED)" : ""}`;
    } else {
      text = `${prefix} ${category} ${rim}x${width} ${type} - ${qty} ${unit}${isBoxed ? " (BOXED)" : ""}`;
    }

    setOrders([...orders, { category, text }]);
    resetForm();
  };

  const copyOrder = async () => {
    const orderLines = [
      "Order From Satvinder Singh",
      `Party Name: ${orderFrom}`,
      "",
    ];

    // Process regular orders by category
    const categories = ["TYRE", "TUBE", "AUTO_TUBE"] as const;

    for (const cat of categories) {
      const categoryOrders = orders.filter(o => o.category === cat);
      if (categoryOrders.length > 0) {
        orderLines.push(`${cat.replace('_', ' ')}:`);
        for (const order of categoryOrders) {
          // Split the text to properly format with dash
          const [itemPart, quantityPart] = order.text.split(' - ');
          orderLines.push(`- ${itemPart} - ${quantityPart}`);
        }
        orderLines.push(""); // Empty line between categories
      }
    }

    // Process promotional items
    if (promos.length > 0) {
      orderLines.push("PROMOTIONAL ITEMS:");
      for (const promo of promos) {
        orderLines.push(`- ${promo} - PROMO`);
      }
      orderLines.push("");
    }

    // Add total items count
    orderLines.push(`Total Items: ${orders.length}`);

    // Create the final text
    const orderText = orderLines.join("\n");

    // Try to copy to clipboard
    try {
      await navigator.clipboard.writeText(orderText);
      alert("Order copied to clipboard!");
    } catch (err) {
      // Fallback method if clipboard API fails
      try {
        const textArea = document.createElement("textarea");
        textArea.value = orderText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Order copied to clipboard!");
      } catch (fallbackErr) {
        console.error("Copy failed:", fallbackErr);
        alert("Failed to copy order. Please try again or copy manually.");
      }
    }
  };


  // UI Components
  const renderSelect = (
    label: string,
    value: string,
    options: string[],
    onChange: (value: string) => void,
    disabled: boolean = false
  ) => (
    <div className="select-item">
      <label className="select-label block font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded-md shadow-sm
        ${disabled ? "bg-gray-100" : "bg-white"}
        focus:outline-none focus:ring-2 focus:ring-blue-500`}
        disabled={disabled}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option>No options available</option>
        )}
      </select>
    </div>
  );


  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Party Name Dialog */}
      {showOrderFromDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Enter Party Name</h2>
            <input
              type="text"
              value={orderFrom}
              onChange={(e) => setOrderFrom(e.target.value)}
              className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Party Name..."
            />
            <button
              onClick={() => setShowOrderFromDialog(false)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Order from Satvinder Singh</h1>
          <h2 className="text-xl mb-4 text-gray-600">Party Name: {orderFrom}</h2>

          {/* Orders Display */}
          {["TYRE", "TUBE", "AUTO_TUBE"].map((cat) => {
            const categoryOrders = orders.filter((o) => o.category === cat);
            if (categoryOrders.length === 0) return null;

            return (
              <div key={cat} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {cat.replace("_", " ")}
                </h3>
                <div className="bg-white rounded-lg shadow">
                  {categoryOrders.map((order, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border-b last:border-b-0"
                    >
                      <span>{order.text}</span>
                      <button
                        onClick={() => setOrders(orders.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Empty State */}
          {orders.length === 0 && promos.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No items added yet</p>
            </div>
          )}

          {/* Promotional Items */}
          {promos.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Promotional Items
              </h3>
              <div className="bg-white rounded-lg shadow">
                {promos.map((promo, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 border-b last:border-b-0"
                  >
                    <span>{promo} - PROMO</span>
                    <button
                      onClick={() => setPromos(promos.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Order Form */}
      <div className="order-form-container">
        <div className="max-w-4xl mx-auto">
          <div className="select-grid">
            {/* Category and Brand row */}
            {renderSelect(
              "Category",
              category,
              ["TYRE", "TUBE", "AUTO_TUBE"],
              (value) => {
                setCategory(value as "TYRE" | "TUBE" | "AUTO_TUBE");
                resetForm();
              }
            )}

            {category === "AUTO_TUBE" ? (
              renderSelect("Size", autoTubeSize, autoTubeSizes, setAutoTubeSize)
            ) : (
              <>
                {renderSelect("Brand", prefix, prefixes, setPrefix)}
                {renderSelect("Rim", rim, rimSizes, setRim, !prefix)}
                {renderSelect("Width", width, widths, setWidth, !rim)}
                {renderSelect("Type", type, types, setType, !width)}
              </>
            )}

            {/* Quantity and Unit */}
            <div className="select-item">
              <label className="select-label block font-medium text-gray-700">
                Quantity
              </label>
              <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="select-item">
              <label className="select-label block font-medium text-gray-700">
                Unit
              </label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="PCS">PCS</option>
                <option value="BDLS">BDLS</option>
                <option value="BGS">BGS</option>
              </select>
            </div>
          </div>

          {/* Boxed checkbox */}
          <div className="px-2 py-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isBoxed}
                onChange={(e) => setIsBoxed(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Boxed</span>
            </label>
          </div>

          {/* Promotional Items and Action Buttons */}
          <div className="grid grid-cols-2 gap-2 p-2">
            <div className="col-span-2">
              <label className="select-label block font-medium text-gray-700 mb-1">
                Promotional Items
              </label>
              <div className="grid grid-cols-2 gap-2">
                {promotionalItems.map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={promos.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPromos([...promos, item]);
                        } else {
                          setPromos(promos.filter((p) => p !== item));
                        }
                      }}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={addOrder}
              className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              disabled={category !== "AUTO_TUBE" && (!prefix || !rim || !width || !type)}
            >
              Add to Order
            </button>
            <button
              onClick={copyOrder}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              disabled={orders.length === 0 && promos.length === 0}
            >
              Copy Full Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
