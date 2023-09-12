import type { Site, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://victorlillo.dev/',
  author: 'Víctor Lillo',
  description: 'A minimal, responsive and SEO-friendly Astro blog theme.',
  title: 'Víctor Lillo',
}

export const LOCALE = ['en-EN']

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'yourhref.com',
    linkTitle: ` ${SITE.title} on Github`,
  },

  {
    name: 'LinkedIn',
    href: 'yourhref.com',
    linkTitle: `${SITE.title} on LinkedIn`,
  },
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
  },
]
