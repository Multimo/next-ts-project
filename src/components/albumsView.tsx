
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
  <article className="fl w-100 w-50-m w-25-ns pa2-ns link">
      <Fragment>
        <div className="aspect-ratio aspect-ratio--1x1">
          <img 
            src="https://picsum.photos/500/500/?random" 
            width={500}
            height={500}
            className="db bg-center cover aspect-ratio--object" 
          />
        </div>
        <Link href={{ pathname: '/album', query: { id: album.id } }}>
          <h3 className="f5 f4-ns mb0 black-60">{album.title}</h3>
        </Link>
      </Fragment>
  </article>
);
