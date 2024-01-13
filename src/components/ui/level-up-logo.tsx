import Image from "next/image";

import levelUpLogo from "../../../public/level-up-logo.svg";

type LevelUpLogoProps = {
  size?: number;
};

export function LevelUpLogo({ size = 30 }: LevelUpLogoProps) {
  return (
    <Image src={levelUpLogo} alt="Level up Logo" height={size} width={size} />
  );
}
