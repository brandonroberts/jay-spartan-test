import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { APP_BASE_HREF } from '@angular/common';

if (import.meta.env.PROD) {
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default async function render(
  url: string,
  document: string,
  ...args: any[]
) {
  // console.log(url, document);
  // console.log(args);
  // const baseHref = `https:/jay-spartan-test.pages.dev`;
  const baseHref = process.env['CF_PAGES_URL'] ?? `http://localhost:8888`;
  const html = await renderApplication(bootstrap, {
    document,
    url: `${baseHref}${url}`,
    platformProviders: [{ provide: APP_BASE_HREF, useValue: baseHref }],
  });
  return html;
}
