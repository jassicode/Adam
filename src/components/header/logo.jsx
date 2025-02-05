import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getFullImageURL } from '@/utils';

const Logo = ({logo}) => {
  return (
    <figure className={`flex justify-center items-center`}>
      <Link href="/" className="">
        <Image priority src={logo?.url ? getFullImageURL(logo?.url) : `/svg/logo.svg`} alt="logo" width={126} height={74} className="w-16 xl:w-[126px]"/>
      </Link>
    </figure>
  );
};

export default Logo;
