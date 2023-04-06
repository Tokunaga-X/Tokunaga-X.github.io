import "./globals.css"

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
            <body>{children}</body>
        </html>
    )
}
