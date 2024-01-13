import Image from "next/image";

import levelUpLogo from "../../../public/level-up-logo-white.svg";

type LevelUpLogoWhiteProps = {
  size?: number;
};

export function LevelUpLogoWhite({ size = 30 }: LevelUpLogoWhiteProps) {
  return (
    <Image src={levelUpLogo} alt="Level up Logo" height={size} width={size} />
  );
}
