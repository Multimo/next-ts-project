
import React, { Fragment } from 'react';
import Link from 'next/link';

interface Props {
  album: {
    id: number,
    userId: number,
    title: string,
  }
}

export const AlbumView = ({ album }: Props) => (
  <article className="mw-20 w-100 w-50-m w-25-ns pa2-ns link">
      <Fragment>
        <div className="aspect-ratio aspect-ratio--1x1">
          <img 
            src="https://picsum.photos/300/200/?random" 
            width={300}
            height={200}
            className="db bg-center cover aspect-ratio--object " 
          />
        </div>
        <Link href={{ pathname: '/album', query: { id: album.id } }}>
          <a className="f5 f4-ns mb0 black-60 link grow"><h3 >{album.title}</h3></a>
        </Link>
      </Fragment>
  </article>
);
