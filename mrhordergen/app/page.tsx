"use client";

import React, { useState } from "react";
import { WheelPicker } from "react-ios-wheel-picker";
import data from "../data/parsedData.json";

const unique = (arr: string[]) => [...new Set(arr.filter(Boolean))];

// Helper: breakdown from SKU pattern
const getRimSizes = (items: string[]) => unique(items.map(i => i.match(/\b\d{2}\b/)?.[0] || ""));
const getWidths = (items: string[]) => unique(items.map(i => i.match(/\b\d{2,3}(?=\s*MM)/)?.[0] || ""));
const getPrefixes = (items: string[]) => unique(items.map(i => i.split(" ")[0]));
const getTypes = (items: string[]) => unique(items.map(i => {
  const parts = i.split(" ");
  return parts.slice(3, -2).join(" ");
}));

const tyres = data.filter(d => d.Type === "TYRE").map(d => d.Item);
const tubes = data.filter(d => d.Type === "TUBE").map(d => d.Item);

const rimSizes = unique([...getRimSizes(tyres), ...getRimSizes(tubes)]);
const widths = unique([...getWidths(tyres), ...getWidths(tubes)]);
const types = unique([...getTypes(tyres), ...getTypes(tubes)]);
const prefixes = unique([...getPrefixes(tyres), ...getPrefixes(tubes)]);

const quantities = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
const units = ["PCS", "BDLS"];
const promoItems = ["T-Shirt", "Notepad", "Keychain"];

export default function Home() {
  const [category, setCategory] = useState<"TYRE" | "TUBE">("TYRE");
  const [prefix, setPrefix] = useState(prefixes[0]);
  const [rim, setRim] = useState(rimSizes[0]);
  const [width, setWidth] = useState(widths[0]);
  const [type, setType] = useState(types[0]);
  const [qty, setQty] = useState("1");
  const [unit, setUnit] = useState("PCS");
  const [orders, setOrders] = useState<string[]>([]);
  const [promos, setPromos] = useState<string[]>([]);

  const addOrder = () => {
    const item = `${prefix} ${category} ${rim} ${width}MM ${type} ${qty} ${unit}`;
    setOrders([...orders, item]);
  };

  const togglePromo = (item: string) => {
    setPromos(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const copyOrders = async () => {
    const text = [...orders, ...promos].join("\n");
    await navigator.clipboard.writeText(text);
    alert("Order copied!");
  };

  return (
    <div className="container">
      <div className="orders">
        <h3>Orders</h3>
        <ul>
          {orders.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
        <div className="promo-section">
          <h4>Promotional Items</h4>
          {promoItems.map(item => (
            <label key={item} className="promo-item">
              <input
                type="checkbox"
                checked={promos.includes(item)}
                onChange={() => togglePromo(item)}
              />
              {item}
            </label>
          ))}
        </div>
        <button className="copy-button" onClick={copyOrders}>
          Copy Order
        </button>
      </div>

      <div className="picker-section">
        <div className="selectors">
          <label>
            Category
            <WheelPicker
              options={["TYRE", "TUBE"]}
              selectedIndex={category === "TYRE" ? 0 : 1}
              onChange={(v) => setCategory(v as "TYRE" | "TUBE")}
            />
          </label>
          <label>
            Prefix
            <WheelPicker
              options={prefixes}
              selectedIndex={prefixes.indexOf(prefix)}
              onChange={v => setPrefix(v)}
            />
          </label>
          <label>
            Rim Size
            <WheelPicker
              options={rimSizes}
              selectedIndex={rimSizes.indexOf(rim)}
              onChange={v => setRim(v)}
            />
          </label>
          <label>
            Width
            <WheelPicker
              options={widths}
              selectedIndex={widths.indexOf(width)}
              onChange={v => setWidth(v)}
            />
          </label>
          <label>
            Type
            <WheelPicker
              options={types}
              selectedIndex={types.indexOf(type)}
              onChange={v => setType(v)}
            />
          </label>
          <label>
            Quantity
            <WheelPicker
              options={quantities}
              selectedIndex={parseInt(qty) - 1}
              onChange={v => setQty(v)}
            />
          </label>
          <label>
            Unit
            <WheelPicker
              options={units}
              selectedIndex={units.indexOf(unit)}
              onChange={v => setUnit(v)}
            />
          </label>
        </div>
        <button className="copy-button" onClick={addOrder}>
          Add to Order
        </button>
      </div>
    </div>
  );
}
