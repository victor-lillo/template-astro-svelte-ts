export type Site = {
  website: string
  author: string
  description: string
  title: string
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  linkTitle: string
}[]

export type SocialIcons = {
  [social in SocialMedia]: string
}

export type SocialMedia = 'Github' | 'LinkedIn' | 'Mail'
