"use client"
import Image from "next/image"
import LogoSvg from '@/public/logo.svg'
import ReturnButton from "../ReturnButton"
import { LogoutButtton } from "./Buttons"
import ThemeSwitherButton from "./ThemeswitcherButton"
import Link from "next/link"
type HeaderProps = {
    returnTo?: string
}
const Header = ({ returnTo }: HeaderProps) => {
    return (
        <header className="flex items-center justify-between w-full h-auto px-4 text-center">
            <ReturnButton hiddenIn={['^\/$', '^\/user\/login$']} to={returnTo} />
            <Link href='/' style={{ margin: 'auto', display: 'inline-block' }}>
                <Image src={LogoSvg} alt="Logo of CampWiz" height={75} style={{ margin: 'auto' }} priority />
            </Link>
            <ThemeSwitherButton />
            <LogoutButtton hiddenIn={['^\/$', '^\/user\/login$']} />
        </header>
    )
}
export default Header