import Image from "next/image"
import GivrrsIcon from "@/app/assets/logo-icon.svg"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <figure className="relative h-8 w-8">
          <Image src={GivrrsIcon} alt="givrrs logo" sizes="100" />
        </figure>
        <p>LegalOps</p>
      </div>
    </Link>
  )
}

export const WhiteLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <figure className="relative h-6 w-6">
          <Image src={GivrrsIcon} alt="givrrs logo" sizes="100" />
        </figure>
        <p>LegalOps</p>
      </div>
    </Link>
  )
}

export default Logo
