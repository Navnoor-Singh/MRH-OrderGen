"use client";
import React, { useState, useEffect } from "react";

const productData = [
  { Type: "TYRE", Item: "BC TYRE 12x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 12X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 14x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 14X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 16x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 16X2.125 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 16X2.40 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 18x1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 20x1.75 MRH SPORTS NG" },
  { Type: "TYRE", Item: "BC TYRE 20X1.75 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 20X2.125 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 20X2.35 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 20X2.40 MRH SPORTS SUP" },
  { Type: "TYRE", Item: "BC TYRE 24x1.5 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 24X1.5 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 10PLY BLUELINE FORCE" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 10PLY REDLINE FORCE" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 MRH SPORTS NG 5003" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 MRH SPORTS NG 5021" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BC TYRE 24X2.125 SUPERFAST RED LINE" },
  { Type: "TYRE", Item: "BC TYRE 24X2.40" },
  { Type: "TYRE", Item: "BC TYRE 26 X 1.1/2 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BC TYRE 26X1.1/2 MRH SPORTS 10PLY SUP" },
  { Type: "TYRE", Item: "BC TYRE 26X1.3/8 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X1.3/8 NYLON SS" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 12PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 MRH SPORTS NG SUP" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 NYLON FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 NYLON SS" },
  { Type: "TYRE", Item: "BC TYRE 26X1.5 NYLON WITH CENTER COLOUR" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 10PLY REDLINE FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 MRH SPORTS 10PLY" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 MRH SPORTS NG 5014,26,3" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 MRH SPORTS NG 5017,18,5" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 NYLON FORCE" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 SUPERFAST PLUS SUP" },
  { Type: "TYRE", Item: "BC TYRE 26X2.125 SUPERFAST RED LINE" },
  { Type: "TYRE", Item: "BC TYRE 26X2.30/2.35 NYLON" },
  { Type: "TYRE", Item: "BC TYRE 26X2.35 MRH FORCE SUP" },
  { Type: "TYRE", Item: "BC TYRE 26X2.40 COTTON" },
  { Type: "TYRE", Item: "BC TYRE 26X2.40 NYLON" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 MRH SPORTS 10PLY SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 MRH SPORTS NG BB SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 MRH SPORTS NG SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 NYLON SS BB" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 NYLON SS SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 SUPERFAST PLUS B.T SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.1/2 SUPERFAST PLUS T.T SUP" },
  { Type: "TYRE", Item: "BC TYRE 28X1.5 10PLY FORCE" },
  { Type: "TYRE", Item: "BC TYRE 28X1.5 NYLON FORCE" },
  { Type: "TYRE", Item: "BC TYRE 28X1.5 NYLON WITH CENTER COLOUR" },
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
  { Type: "TUBE", Item: "BUTYL BC TUBE 26X2.35/40 A/V 48MM BOX" },
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
  { Type: "TUBE", Item: "JD BICYCLE TUBE 14X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 16X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 18X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 20X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 24X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 24X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 24X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 24X2.125 DUM DUM" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 24X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.3/8 DUMDUM" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.3/8 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.38 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.5 DUMDUM" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X2.125 DUMDUM" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 26X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 27X1.25 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 28X1.1/2 ISI 300GM." },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 28X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 28X1.5 DUMDUM" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 28X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "JD BICYCLE TUBE 28X1.5 SILVER SUP BOX" },
  { Type: "TUBE", Item: "JD RICKSHAW TUBE 28X1.5 DABANGG SUP" },
  { Type: "TUBE", Item: "JD RICKSHAW TUBE 28X1.5 GOLDTECH BDM SUP" },
  { Type: "TUBE", Item: "JD RICKSHAW TUBE 28X1.5 S.W. PLUS SUP" },
  { Type: "TUBE", Item: "JD RICKSHAW TUBE 28X1.5 SHEHZADA SUP" },
  { Type: "TUBE", Item: "JD RICKSHAW TUBE 28X1.5 STARWAY SUP" },
  { Type: "TUBE", Item: "JD TUBE 26X1.3/8 MRH INTER SUP" },
  { Type: "TUBE", Item: "JD TUBE 26X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "JD TUBE 26X1.5 MRH INTER SUP" },
  { Type: "TUBE", Item: "JD TUBE 26X2.125 MRH INTER SUP" },
  { Type: "TUBE", Item: "JD TUBE 28X1.1/2 MRH INTER 300 SUP" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH INTER PLUS 400 GM SUP" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH-300 PLATINUM SERIES" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH-300 SUPER SERIES" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH-350 SUPER SERIES" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH-400 PLATINUM SERIES" },
  { Type: "TUBE", Item: "JD TUBE 28X1.5 MRH-400 SUPER SERIES" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 12X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 14X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 16X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 18X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 20X1.75 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 20X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 20X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 20X2.40 AV 48MM BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 24X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 24X2.125 DUM DUM" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 24X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 24X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 24X2.35 AV 48MM BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26 x 2.35/40 AV 48MM" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X1.5 DUMDUM" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X2.125 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X2.125 DUMDUM" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X2.125 LONG VALVE BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X2.125 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 26X2.35/40 AV 48MM BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 27.5x2.10 48MM AV BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 28X1.5 AGNIPATH SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 28X1.5 DUMDUM" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 28X1.5 SILVER SUP" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 29x2.10 48MM A/V BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 700x23C A/V 48 MM BOX" },
  { Type: "TUBE", Item: "MD BICYCLE TUBE 700x35C A/V 48 MM BOX" },
  { Type: "TUBE", Item: "MD RICKSHAW TUBE 28X1.5 DABANGG SUP" },
  { Type: "TUBE", Item: "MD RICKSHAW TUBE 28X1.5 S.W. PLUS" },
  { Type: "TUBE", Item: "MD RICKSHAW TUBE 28X1.5 SHEHZADA SUP" },
  { Type: "TUBE", Item: "MD RICKSHAW TUBE 28X1.5 STARWAY SUP" },
  { Type: "TUBE", Item: "MD TUBE 28X1.1/2 MRH INTER 300 SUP" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH INTER 400GM SUP" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH INTER PLUS 400 GM SUP" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH-300 PLATINUM SERIES" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH-300 SUPER SERIES" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH-350 SUPER SERIES" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH-400 PLATINUM SERIES" },
  { Type: "TUBE", Item: "MD TUBE 28X1.5 MRH-400 SUPER SERIES" },
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
  { Type: "TYRE", Item: "RC TYRE 28X1.5 12 PLY SPORTS" },
  { Type: "TYRE", Item: "RC TYRE 28X1.5 12PLY FORCE" },
  { Type: "TYRE", Item: "RC TYRE 28X1.5 20 PLY SPORTS" },
  { Type: "TYRE", Item: "RC TYRE 28X1.5 20PLY FORCE" },
  { Type: "TYRE", Item: "RC TYRE 28X1.5 27 PLY TT PLUS N.G. SUP" },
  { Type: "TYRE", Item: "RICKSHAW TYRE 28X1.5 TT 22 PLY N.G" },
];

const unique = (arr: string[]) => [...new Set(arr.filter(Boolean))];

// Parsing functions
const getPrefixes = (items: string[]) => unique(items.map(item => item.split(' ')[0]));
const getRimSizes = (items: string[]) => unique(items.map(item => {
  const sizePart = item.split(' ').find(part => part.match(/^\d{2}[xX]/));
  return sizePart?.split(/x|X/i)[0] || '';
}));
const getWidths = (items: string[]) => unique(items.map(item => {
  const sizePart = item.split(' ').find(part => part.match(/^\d{2}[xX]/));
  return sizePart?.split(/x|X/i)[1]?.replace(/\D+$/, '') || '';
}));
const getTypes = (items: string[]) => unique(items.map(item => {
  const parts = item.split(' ');
  const sizeIndex = parts.findIndex(part => part.match(/^\d{2}[xX]/));
  return parts.slice(sizeIndex + 1).join(' ');
}));

const promotionalItems = ["T-Shirts", "Notepads", "Pens", "Calenders", "Diaries"];

export default function OrderPage() {
  const [orderFrom, setOrderFrom] = useState("");
  const [showOrderFromDialog, setShowOrderFromDialog] = useState(true);
  const [category, setCategory] = useState<'TYRE' | 'TUBE'>('TYRE');
  const [prefix, setPrefix] = useState('');
  const [rim, setRim] = useState('');
  const [width, setWidth] = useState('');
  const [type, setType] = useState('');
  const [qty, setQty] = useState('1');
  const [unit, setUnit] = useState('PCS');
  const [orders, setOrders] = useState<string[]>([]);
  const [promos, setPromos] = useState<string[]>([]);

  const filteredProducts = productData.filter(p => p.Type === category).map(p => p.Item);
  const prefixes = getPrefixes(filteredProducts);
  const rimSizes = getRimSizes(filteredProducts);
  const widths = getWidths(filteredProducts);
  const types = getTypes(filteredProducts);

  useEffect(() => {
    if (prefixes.length) setPrefix(prefixes[0]);
    if (rimSizes.length) setRim(rimSizes[0]);
    if (widths.length) setWidth(widths[0]);
    if (types.length) setType(types[0]);
  }, [category]);

  const addOrder = () => {
    const item = `${prefix} ${category} ${rim}${width ? `x${width}` : ''} ${type} ${qty} ${unit}`;
    setOrders([...orders, item]);
  };

  const copyOrder = () => {
    const orderText = [
      'Order From Satvinder Singh',
      `Party Name: ${orderFrom}`,
      '',
      ...orders,
      ...promos.map(p => `${p} - PROMO`),
      `Total Items: ${orders.length + promos.length}`
    ].join('\n');
    
    if (typeof window !== 'undefined') {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = orderText;
      textarea.style.position = 'fixed';  // Prevent scrolling to bottom
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand('copy');
        alert('Order copied to clipboard!');
      } catch (err) {
        alert('Failed to copy order');
      }

      document.body.removeChild(textarea);
    }
  };


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
        
        {orders.map((order, index) => (
          <div key={index} className="flex justify-between items-center p-2 border-b">
            <span>{order}</span>
            <button 
              onClick={() => setOrders(orders.filter((_, i) => i !== index))}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}

        {promos.map((promo, index) => (
          <div key={`promo-${index}`} className="flex justify-between items-center p-2 border-b text-gray-500">
            <span>{promo} - PROMO</span>
            <button 
              onClick={() => setPromos(promos.filter((_, i) => i !== index))}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}

        {orders.length === 0 && promos.length === 0 && (
          <p className="text-gray-500 text-center mt-8">No items added yet</p>
        )}
      </div>

      <div className="border-t p-4 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as 'TYRE' | 'TUBE')}
              className="w-full p-2 border rounded"
            >
              <option value="TYRE">TYRE</option>
              <option value="TUBE">TUBE</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Brand</label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {prefixes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Rim</label>
            <select
              value={rim}
              onChange={(e) => setRim(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {rimSizes.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Width</label>
            <select
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {widths.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Qty/Unit</label>
            <div className="flex gap-2">
              <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                <option value="PCS">PCS</option>
                <option value="BDLS">BDLS</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Promotional Items</label>
            <div className="grid grid-cols-2 gap-2">
              {promotionalItems.map(item => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={promos.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPromos([...promos, item]);
                      } else {
                        setPromos(promos.filter(p => p !== item));
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
            >
              Add to Order
            </button>
            <button
              onClick={copyOrder}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Copy Full Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
