"use client"
import Image from "next/image"
import LogoSvg from '@/public/logo.svg'
import ReturnButton from "../ReturnButton"
import { LogoutButtton } from "./Buttons"
import Link from "next/link"
import SettingButton from "../user/SettingButton"
import * as Sentry from '@sentry/nextjs'
type HeaderProps = {
    returnTo?: string
}
if (typeof window !== 'undefined') {
    (window as typeof window & { Sentry?: typeof Sentry }).Sentry = Sentry;
}
const Header = ({ returnTo }: HeaderProps) => {
    return (
        <header className="flex items-center justify-between w-full h-auto px-4 text-center">
            <ReturnButton hiddenIn={['^\/$', '^\/user\/login$']} to={returnTo} />
            <Link href='/' style={{ margin: 'auto', display: 'inline-block' }}>
                <Image src={LogoSvg} alt="Logo of CampWiz" height={75} style={{ margin: 'auto' }} priority />
            </Link>

            <SettingButton />
            <LogoutButtton hiddenIn={['^\/$', '^\/user\/login$']} />

        </header>
    )
}
export default Header