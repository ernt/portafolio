import Link from "next/link";
import { useRouter } from "next/router";



const CustomLink=()=>{
    const router = useRouter();
      return (
        [
          ['Home', '/Hero'],
          ['About', '/About'],
          ['Projects', '/Projects'],
          ['Contact', '/Contact'],
        ].map(([title, url]) => (
          <Link href={url} key={url} className=" font-medium relative group px-3 py-2 mr-6">{title}
           <span className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
           group-hover:w-full transition-[width] ease duration-300 ${router.asPath?`w-full`:`w-0`}`}>&nbsp;</span>
          </Link>
         
       ))
      );
  }
  export default CustomLink;