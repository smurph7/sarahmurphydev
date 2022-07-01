import React from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/static/sm-logo-250px.png" />
          <html lang="en" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
