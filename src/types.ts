export type Site = {
  description: string
  name: string
  website: string
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

export enum Icons {
  Github = 'Github',
  LinkedIn = 'LinkedIn',
  Mail = 'Mail',
  Npm = 'Npm',
}
