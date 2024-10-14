import Link from "next/link";
import Theme from "./Theme";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";
import { HomeIcon, Rss  } from "lucide-react";
import { social } from "@/constants/info";

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIcon
  },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  //   icon: Rss
  // },
]

export default function Navbar(){
  return(
    <></>
  )
}