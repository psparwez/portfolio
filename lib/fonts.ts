import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-Space_Grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-IBM_Plex_Mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const fonts = [spaceGrotesk.variable, ibmPlexMono.variable];
