import Document, { Head, Main, NextScript } from 'next/document'
import { Footer } from '../src/components/footer';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head lang='en'>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
          <title>Album \ Posts Content Web app</title>
        </Head>
        <body>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}