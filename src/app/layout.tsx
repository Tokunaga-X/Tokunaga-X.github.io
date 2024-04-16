import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { DarkModeProvider } from "./store/DarkModeContext"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

export const metadata = {
    title: "Tokunaga-X | Web Developer",
    description: "Personal profolio page made by Tokunaga-X",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <DarkModeProvider>
                <body>{children}</body>
            </DarkModeProvider>
        </html>
    )
}
