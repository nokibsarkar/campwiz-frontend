import Image from "next/image"

import LogoSvg from '@/public/logo.svg'
import ReturnButton from "../ReturnButton"
import { LogoutButtton } from "./Buttons"

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full h-auto px-4 text-center">
            <ReturnButton hiddenIn={['^\/$', '^\/user\/login$', '^\/round\/[^\/]+\/submission\/evaluate$']} />
            <Image src={LogoSvg} alt="Logo of CampWiz" height={80} style={{ margin: 'auto' }} />
            <LogoutButtton hiddenIn={['^\/$', '^\/user\/login$', '^\/round\/[^\/]+\/submission\/evaluate$']} />
        </header>
    )
}
export default Header