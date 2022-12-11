'use client';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head />
      <body>
        <h1>Header</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        {children}
      </body>
    </html>
  );
}
