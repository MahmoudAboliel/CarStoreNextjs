import { Roboto, Inter, Tajawal } from "next/font/google";

export const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  variable: '--arabic-font',
  display: 'swap'
})

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--body-font',
  display: 'swap'
});

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--heading-font',
  display: 'swap'
});