import React from 'react';
import Link from 'next/link';

interface Props {
  title: string,
  linkText: string,
  linkPath: string,
}

export const Header = ({ title, linkText, linkPath }: Props) => (
  <header className="mw-80 center w-100 w-50-m w-25-ns pa2-ns link flex align-center">
    <h1 className="baskerville f1 self-start">{title}</h1>
    <Link href={linkPath}>
      <a><h2 className="baskerville f4 link self-end">{linkText}</h2></a>
    </Link>
  </header>
);
