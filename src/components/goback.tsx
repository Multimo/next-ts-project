import React from 'react';
import Link from 'next/link';

interface Props {
  text: string,
  linkPath: string,
}

export const Goback = ({ text, linkPath }: Props) => (
  <header className="mw-80 w-100 w-50-m w-25-ns pa2-ns link flex align-center">
    <Link href={linkPath}>
      <a><h2 className="baskerville f4 link self-end">{text}</h2></a>
    </Link>
  </header>
);
