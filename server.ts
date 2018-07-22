const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

import { createServer } from 'http';
import { parse } from 'url';

// next js related server handling
import next from 'next';
const app = next({ dir: './src/pages', dev })
const handle = app.getRequestHandler()

// stops mobx from listening to ssr rendered components
// ssr only mounts components once 
import { useStaticRendering } from 'mobx-react';
useStaticRendering(true)

app.prepare().then(() => {

  // handle reqs and return ssr'd pages
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })
  
  // listen to port and blow up on errors
  .listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
