import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/project/', '/round/', '/submission/'],
        },
        sitemap: 'https://campwiz.toolforge.org/sitemap.xml',
    }
}