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

interface OrderItem {
  category: 'TYRE' | 'TUBE' | 'AUTO_TUBE';
  text: string;
}

const unique = (arr: string[]) => [...new Set(arr.filter(Boolean))];

const parseSize = (item: string) => {
  const sizePart = item.split(' ').find(part => part.match(/^\d{2}[xX]/));
  if (!sizePart) return { rim: '', width: '' };
  const [rim, width] = sizePart.split(/x|X/i).map(s => s.replace(/\D+$/, ''));
  return { rim, width };
};

const getFilteredItems = (
  category: 'TYRE' | 'TUBE',
  brand: string,
  rim: string,
  width: string
) => {
  let items = productData.filter(p => p.Type === category);
  if (brand) items = items.filter(p => p.Item.startsWith(brand));
  if (rim) items = items.filter(p => parseSize(p.Item).rim === rim);
  if (width) items = items.filter(p => parseSize(p.Item).width === width);
  return items;
};

const promotionalItems = ["T-Shirts", "Notepads", "Pens", "Calenders", "Diaries"];

export default function OrderPage() {
  const [orderFrom, setOrderFrom] = useState("");
  const [showOrderFromDialog, setShowOrderFromDialog] = useState(true);
  const [category, setCategory] = useState<'TYRE' | 'TUBE' | 'AUTO_TUBE'>('TYRE');
  const [prefix, setPrefix] = useState('');
  const [rim, setRim] = useState('');
  const [width, setWidth] = useState('');
  const [type, setType] = useState('');
  const [autoTubeSize, setAutoTubeSize] = useState(autoTubeSizes[0]);
  const [qty, setQty] = useState('1');
  const [unit, setUnit] = useState('PCS');
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [promos, setPromos] = useState<string[]>([]);

  // Dynamic filtering logic
  const tyreTubeItems = getFilteredItems(
    category as 'TYRE' | 'TUBE',
    prefix,
    rim,
    width
  );

  const prefixes = unique(tyreTubeItems.map(p => p.Item.split(' ')[0]));
  const rimSizes = unique(tyreTubeItems.map(p => parseSize(p.Item).rim));
  const widths = unique(tyreTubeItems
    .filter(p => parseSize(p.Item).rim === rim)
    .map(p => parseSize(p.Item).width));
  const types = unique(tyreTubeItems
    .filter(p => parseSize(p.Item).rim === rim && parseSize(p.Item).width === width)
    .map(p => {
      const parts = p.Item.split(' ');
      const sizeIndex = parts.findIndex(part => part.match(/^\d{2}[xX]/));
      return parts.slice(sizeIndex + 1).join(' ');
    }));

  useEffect(() => {
    if (category !== 'AUTO_TUBE') {
      const newPrefix = prefixes[0] || '';
      const newRim = rimSizes[0] || '';
      const newWidth = widths[0] || '';
      const newType = types[0] || '';
      
      setPrefix(newPrefix);
      setRim(newRim);
      setWidth(newWidth);
      setType(newType);
    }
  }, [category]);

  const resetForm = () => {
    setQty('1');
    setUnit('PCS');
    if (category === 'AUTO_TUBE') {
      setAutoTubeSize(autoTubeSizes[0]);
    } else {
      setPrefix(prefixes[0] || '');
      setRim(rimSizes[0] || '');
      setWidth(widths[0] || '');
      setType(types[0] || '');
    }
  };

  const addOrder = () => {
    let newOrder: OrderItem;
    if (category === 'AUTO_TUBE') {
      newOrder = {
        category,
        text: `AUTO TUBE ${autoTubeSize} ${qty} ${unit}`
      };
    } else {
      newOrder = {
        category,
        text: `${prefix} ${category} ${rim}${width ? `x${width}` : ''} ${type} ${qty} ${unit}`
      };
    }
    setOrders([...orders, newOrder]);
    resetForm();
  };

  const copyOrder = () => {
    const orderText = [
      'Order From Satvinder Singh',
      `Party Name: ${orderFrom}`,
      '',
      ...orders.map(o => o.text),
      ...promos.map(p => `${p} - PROMO`),
      `Total Items: ${orders.length + promos.length}`
    ].join('\n');

    navigator.clipboard.writeText(orderText)
      .then(() => alert('Order copied to clipboard!'))
      .catch(() => alert('Failed to copy order'));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Dialog and order list rendering remains same as before, updated with category sections */}

      <div className="flex-1 overflow-auto p-4">
        <h1 className="text-2xl font-bold mb-2">Order from Satvinder Singh</h1>
        <h2 className="text-xl mb-4">Party Name: {orderFrom}</h2>

        {/* Tyres Section */}
        {orders.filter(o => o.category === 'TYRE').length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Tyres</h3>
            {orders.filter(o => o.category === 'TYRE').map((order, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <span>{order.text}</span>
                <button onClick={() => setOrders(orders.filter((_, i) => i !== index))} 
                  className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tubes Section */}
        {orders.filter(o => o.category === 'TUBE').length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Tubes</h3>
            {orders.filter(o => o.category === 'TUBE').map((order, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <span>{order.text}</span>
                <button onClick={() => setOrders(orders.filter((_, i) => i !== index))} 
                  className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Auto Tubes Section */}
        {orders.filter(o => o.category === 'AUTO_TUBE').length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Auto Tubes</h3>
            {orders.filter(o => o.category === 'AUTO_TUBE').map((order, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <span>{order.text}</span>
                <button onClick={() => setOrders(orders.filter((_, i) => i !== index))} 
                  className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Promotional items and empty state remain same */}
      </div>

      {/* Form controls remain similar to previous answer with dynamic filtering */}
    </div>
  );
}