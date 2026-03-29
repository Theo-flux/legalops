import Image from "next/image"
import LegalOpsIcon from "@/app/assets/legalops-icon.svg"

const Logo = () => {
  return (
    <a href="/">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <figure className="relative h-6 w-8">
          <Image src={LegalOpsIcon} alt="legalOpss logo" sizes="100" />
        </figure>
        <p>LegalOps</p>
      </div>
    </a>
  )
}

export const WhiteLogo = () => {
  return (
    <a href="/">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <figure className="relative h-6 w-6">
          <Image src={LegalOpsIcon} alt="givrrs logo" sizes="100" />
        </figure>
        <p>LegalOps</p>
      </div>
    </a>
  )
}

export default Logo
