import './globals.css'
import {Nunito} from "next/font/google";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import RegisterModal from "@/components/modals/RegisterModal";


const font = Nunito({subsets: ['latin']})

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        {/*обернули от гидрации*/}
        <ClientOnly>
            <RegisterModal/>
            <Navbar/>
        </ClientOnly>
        {children}
        </body>
        </html>
    )
}
