import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <Component {...pageProps} />
                <Analytics />
            </NextThemesProvider>
        </NextUIProvider>
    );
}

export default MyApp;