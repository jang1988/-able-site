'use client'

import {
	BriefcaseBusiness,
	Images,
	Mail,
	Menu,
	ShieldCheck,
	Star,
	UserRound,
	Wrench,
	X
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const navLinks = [
		{ name: 'O nas', href: '/o-nas', icon: UserRound },
		{ name: 'Oferta', href: '/oferta', icon: BriefcaseBusiness },
		{ name: 'Galeria', href: '/galeria', icon: Images },
		{ name: 'Dostępny sprzęt', href: '/sprzet', icon: Wrench },
		{ name: 'Referencje', href: '/referencje', icon: Star },
		{ name: 'Rodo', href: '/rodo', icon: ShieldCheck },
		{ name: 'Kontakt', href: '/kontakt', icon: Mail }
	]

	// Добавляем эффект появления тени при скролле
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
			id="header-outer"
		>
			<div className={styles.container}>
				<Link
					href="/"
					className={styles.logo}
				>
					<Image
						src="/logo2.webp"
						alt="logo"
						width={104}
						height={29}
						priority
					/>
				</Link>

				{/* Desktop nav */}
				<nav className={styles.navDesktop}>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							className={styles.link}
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Burger button */}
				<button
					aria-label="Open mobile menu"
					aria-expanded={isOpen}
					className={styles.burger}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Mobile menu */}
				<nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
					{navLinks.map(link => {
						const Icon = link.icon

						return (
							<Link
								key={link.name}
								href={link.href}
								className={styles.mobileLink}
								onClick={() => setIsOpen(false)}
							>
								<Icon
									size={21}
									strokeWidth={1.8}
								/>
								<span>{link.name}</span>
							</Link>
						)
					})}
				</nav>
			</div>
		</header>
	)
}
