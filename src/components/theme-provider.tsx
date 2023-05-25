'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export default function ThemeProvider({
  children,
  ...themeProps
}: ThemeProviderProps) {
  return <NextThemeProvider {...themeProps}>{children}</NextThemeProvider>
}
