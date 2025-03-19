import Image from 'next/image'
import LogoSvg from '@/public/logo.svg'
import Link from 'next/link'
const Logo = () => (
    <Link href="/" className='cursor-pointer'>
        <Image src={LogoSvg} alt="Logo of CampWiz" height={80} style={{ margin: 'auto' }} />
    </Link>
)
export default Logo