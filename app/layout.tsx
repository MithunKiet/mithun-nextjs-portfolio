import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
    ssr: false,
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#030712' },
    ],
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: 'Mithun Kumar | Full Stack Developer',
    description:
        'Portfolio of Mithun Kumar — Full Stack Software Developer specializing in ASP.NET Core, Angular, SQL Server, and enterprise application architecture.',
    keywords: [
        'Mithun Kumar',
        'Full Stack Developer',
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'C#',
        'Software Engineer',
        'Portfolio',
    ],
    authors: [{ name: 'Mithun Kumar' }],
    creator: 'Mithun Kumar',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://mithunkumar.dev',
        siteName: 'Mithun Kumar Portfolio',
        title: 'Mithun Kumar | Full Stack Developer',
        description:
            'Full Stack Software Developer specializing in ASP.NET Core, Angular, SQL Server, and enterprise application architecture.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mithun Kumar | Full Stack Developer',
        description:
            'Full Stack Software Developer specializing in ASP.NET Core, Angular, and SQL Server.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
            <body
                className={`${inter.className} transition-colors duration-300 antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <CustomCursor />
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
