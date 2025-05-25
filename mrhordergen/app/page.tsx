"use client";
import React, { useState, useEffect } from "react";

interface Product {
  Type: "TYRE" | "TUBE";
  Item: string;
}

interface OrderItem {
  category: "TYRE" | "TUBE" | "AUTO_TUBE";
  text: string;
}

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

const parseSize = (item: string) => {
  const sizePart = item.split(" ").find((part) => part.match(/^\d{2}[xX]/));
  if (!sizePart) return { rim: "", width: "" };
  const [rim, width] = sizePart.split(/x|X/i).map((s) => s.replace(/\D+$/, ""));
  return { rim, width };
};

export default function OrderPage() {
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
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [promos, setPromos] = useState<string[]>([]);

  // Filtered data calculations with logging
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

  // Enhanced useEffect for state management
  useEffect(() => {
    if (category === "AUTO_TUBE") return;

    console.log('Current State:', { prefix, rim, width, type });
    console.log('Available Options:', {
      prefixes,
      rimSizes,
      widths,
      types
    });

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

  const resetForm = () => {
    setQty("1");
    setUnit("PCS");
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
  let newOrder: OrderItem;
  if (category === "AUTO_TUBE") {
    newOrder = {
      category,
      text: `AUTO TUBE ${autoTubeSize} ${qty} ${unit}`,
    };
  } else {
    newOrder = {
      category,
      text: `${prefix} ${category} ${rim}x${width} ${type} ${qty} ${unit}`,
    };
  }
  setOrders([...orders, newOrder]);
  resetForm();
};


  const copyOrder = async () => {
  const orderLines = [
    "Order From Satvinder Singh",
    `Party Name: ${orderFrom}`,
    "",
  ];

  const categories = ["TYRE", "TUBE", "AUTO_TUBE"] as const;
  
  categories.forEach(cat => {
    const categoryOrders = orders.filter(o => o.category === cat);
    if (categoryOrders.length > 0) {
      orderLines.push(`${cat.replace('_', ' ')}:`);
      categoryOrders.forEach(order => {
        // Split the text at the last space to separate quantity and unit
        const lastSpaceIndex = order.text.lastIndexOf(' ');
        const secondLastSpaceIndex = order.text.lastIndexOf(' ', lastSpaceIndex - 1);
        
        // Reconstruct the text with a dash before quantity
        const itemPart = order.text.substring(0, secondLastSpaceIndex);
        const quantityPart = order.text.substring(secondLastSpaceIndex + 1);
        orderLines.push(`- ${itemPart} - ${quantityPart}`);
      });
      orderLines.push(""); // Empty line between categories
    }
  });

  if (promos.length > 0) {
    orderLines.push("PROMOTIONAL ITEMS:");
    promos.forEach(promo => {
      orderLines.push(`- ${promo} - PROMO`);
    });
    orderLines.push("");
  }

  // Only count actual orders, not promotional items
  orderLines.push(`Total Items: ${orders.length}`);

  const orderText = orderLines.join("\n");

  try {
    await navigator.clipboard.writeText(orderText);
    alert("Order copied to clipboard!");
  } catch (err) {
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



  const renderSelect = (
    label: string,
    value: string,
    options: string[],
    onChange: (value: string) => void,
    disabled: boolean = false
  ) => (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      {options.length > 0 ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2 border rounded ${
            disabled ? "bg-gray-100" : ""
          }`}
          disabled={disabled}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <select disabled className="w-full p-2 border rounded bg-gray-100">
          <option>No options available</option>
        </select>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      {showOrderFromDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Enter Party Name</h2>
            <input
              type="text"
              value={orderFrom}
              onChange={(e) => setOrderFrom(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter Party Name..."
            />
            <button
              onClick={() => setShowOrderFromDialog(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto p-4">
        <h1 className="text-2xl font-bold mb-2">Order from Satvinder Singh</h1>
        <h2 className="text-xl mb-4">Party Name: {orderFrom}</h2>

        {/* Orders Display */}
        {["TYRE", "TUBE", "AUTO_TUBE"].map((cat) => {
          const categoryOrders = orders.filter((o) => o.category === cat);
          if (categoryOrders.length === 0) return null;
          
          return (
            <div key={cat} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {cat.replace("_", " ")}
              </h3>
              {categoryOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border-b"
                >
                  <span>{order.text}</span>
                  <button
                    onClick={() =>
                      setOrders(orders.filter((_, i) => i !== index))
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          );
        })}

        {/* Empty State */}
        {orders.length === 0 && promos.length === 0 && (
          <p className="text-gray-500 text-center mt-8">No items added yet</p>
        )}

        {/* Promotional Items */}
        {promos.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Promotional Items</h3>
            {promos.map((promo, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b text-gray-500"
              >
                <span>{promo} - PROMO</span>
                <button
                  onClick={() => setPromos(promos.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Form */}
      <div className="border-t p-4 bg-gray-50">
        <div className="grid grid-cols-2 MOULDED:grid-cols-3 gap-4 mb-4">
          {/* Category Selection */}
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
            renderSelect(
              "Size",
              autoTubeSize,
              autoTubeSizes,
              setAutoTubeSize
            )
          ) : (
            <>
              {renderSelect(
                "Brand",
                prefix,
                prefixes,
                (value) => {
                  setPrefix(value);
                  setRim("");
                  setWidth("");
                  setType("");
                }
              )}
              {renderSelect(
                "Rim",
                rim,
                rimSizes,
                (value) => {
                  setRim(value);
                  setWidth("");
                  setType("");
                },
                !prefix
              )}
              {renderSelect(
                "Width",
                width,
                widths,
                (value) => {
                  setWidth(value);
                  setType("");
                },
                !rim
              )}
              {renderSelect(
                "Type",
                type,
                types,
                setType,
                !width
              )}
            </>
          )}

          {/* Quantity and Unit Selection */}
          <div>
            <label className="block text-sm font-medium">Qty/Unit</label>
            <div className="flex gap-2">
              <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                <option value="PCS">PCS</option>
                <option value="BDLS">BDLS</option>
                <option value="BDLS">BGS</option>
              </select>
            </div>
          </div>
        </div>

        {/* Promotional Items and Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Promotional Items</label>
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
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={addOrder}
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
              disabled={category !== "AUTO_TUBE" && (!prefix || !rim || !width || !type)}
            >
              Add to Order
            </button>
            <button
              onClick={copyOrder}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
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
