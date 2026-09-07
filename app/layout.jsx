import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata = {
	title: {
		default: 'BIGBUD – Budowa i modernizacja infrastruktury energetycznej'
	},

	description:
		'BIGBUD – budowa i modernizacja linii energetycznych SN 6–30 kV, stacji elektroenergetycznych oraz infrastruktury OZE.'
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
