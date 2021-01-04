import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/styles/styles.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://chronos.kickstand-ui.com/',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        './node_modules/kickstand-ui/src/scss/00_Abstracts/index.scss'
      ]
    }),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()
      ]
    })
  ]
};
