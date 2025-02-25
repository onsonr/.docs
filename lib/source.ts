import { docs, blog as blogPosts } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI } from "fumadocs-openapi/server";
import { createMDXSource } from 'fumadocs-mdx';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});

export const openapi = createOpenAPI();
