import React from 'react';
import Link from 'next/link';

interface Props {
  post: {
    id: string,
    title: string,
    userId: string,
  }
}

export const PostView = ({ post }: Props) => (
  <article className="bt bb b--black-10" key={post.id}>
    <Link href={{ pathname: '/post', query: { id: post.id } }}>
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img 
            src="https://picsum.photos/300/200/?random" 
            width={300}
            height={200}
            className="db" 
            alt="Photo of a dimly lit room with a computer interface terminal." 
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">{post.title}</h1>
          <p className="f6 lh-copy mv0">{post.userId}</p>
        </div>
      </div>
    </Link>
  </article>
) 
  