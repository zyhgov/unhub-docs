// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

import tailwindcss from '@tailwindcss/vite';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.zyhgov.cn',
  integrations: [starlight({
      title: '联合库UNHub Docs',
	  logo: {
        src: './src/assets/unhub.svg',
      },
	customCss: [
      // @font-face CSS文件的相对路径。
      './src/fonts/font-face.css',
      ],
	plugins: [
        starlightDocSearch({
          clientOptionsModule: './src/config/docsearch.ts',
        }),
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zyhgov' },
		{ icon: 'gitlab', label: 'gitlab', href: 'https://gitlab.com/zyhgov' },
	  ],
      sidebar: [
        //   {
        //       label: 'Guides',
        //       items: [
        //           { label: 'Example Guide', slug: 'guides/example' },
        //       ],
        //   },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
		  {
              label: '默沙东诊疗手册 - 大众版',
              autogenerate: { directory: '默沙东诊疗手册 - 大众版' },
          },
		  {
              label: '默沙东诊疗手册 - 专业版',
              autogenerate: { directory: '默沙东诊疗手册 - 专业版' },
          },
      ],
      }), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});