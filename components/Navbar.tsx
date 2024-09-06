import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-10 p-0 flex items-center origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock magnification={60} distance={90} direction="middle" className="rounded-full z-50 pointer-events-auto relative mx-auto flex min-h-full h-full px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset">
        {navItems.map((item, index) => (
          <DockIcon key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.path}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon'}),
                    'size-12 rounded-full'
                  )}  
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {social.map((s, index) => (
          <DockIcon key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={s.link}
                  target={s.target}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <s.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{s.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Theme />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  )
}