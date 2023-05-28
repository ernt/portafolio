'use client'

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname, useSearchParams } from "next/navigation"; /* Aqui es next/navigation , revisar documentacion si llega a salir problema en router, para pages ,es router */
import { GithubIcon, GitlabIcon, LinkedinIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";




const MotionLink = motion(Link);




const Navbar = () => {
  const router = usePathname();

  return (

    <header className="w-full px-32 py-7   font-medium flex items-center justify-between">

      <nav >
        {[
          ['Home', '/'],
          ['About', '/About'],
          ['Projects', '/Projects'],
          ['Contact', '/Contact'],
        ].map(([title, url]) => (
          <Link href={url} key={url} className=" font-medium relative group px-3 py-2 mr-4">{title}
            <span className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
     group-hover:w-full transition-[width] ease duration-300 ${router === url ? `w-full` : `w-0`} `}>&nbsp;</span>
          </Link>

        ))}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        {[
          [<GithubIcon />, '/Hero'],
          [<LinkedinIcon />, '/About'],
          [<GitlabIcon />, '/Projects'],
          [<SunIcon />, '/Contact'],
        ].map(([title, url]) => (
          <MotionLink href={url} key={url} whileHover={{ y: -3 }} className=" px-2 py-1 mr-6">{title}</MotionLink>
        ))}
      </nav>


      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}


export default Navbar;
