import * as React from "react"
import {
  BookOpenIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CircleQuestionMarkIcon,
  LayoutGridIcon,
  LogOutIcon,
  MoonIcon,
  BellIcon,
  PlusIcon,
  SunIcon,
  UsersIcon,
} from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"

const stores = [
  {
    name: "Shadcn Store",
    plan: "Enterprise",
    dot: "bg-gradient-to-br from-violet-500 to-purple-700",
  },
  {
    name: "Shadcn Outlet",
    plan: "Basic",
    dot: "bg-gradient-to-br from-amber-400 to-orange-600",
  },
  {
    name: "Shadcn Wholesale",
    plan: "B2B",
    dot: "bg-gradient-to-br from-sky-400 to-blue-600",
  },
]

export function AppHeader() {
  const { theme, setTheme } = useTheme()
  const [activeStore, setActiveStore] = React.useState("Shadcn Outlet")
  const store = stores.find((s) => s.name === activeStore) ?? stores[1]
  const [liveCount, setLiveCount] = React.useState(126)

  React.useEffect(() => {
    const id = setInterval(() => {
      setLiveCount((c) => Math.max(80, Math.min(199, c + Math.round((Math.random() - 0.5) * 12))))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-1 h-4 data-vertical:self-center" />

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="default" className="gap-2 px-2" />
          }
        >
          <span className={`size-5 rounded-full ${store.dot}`} />
          <span className="text-sm font-medium">{store.name}</span>
          <ChevronsUpDownIcon className="size-3.5 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Stores</DropdownMenuLabel>
            {stores.map((s) => (
              <DropdownMenuItem
                key={s.name}
                className="gap-3 py-2"
                onClick={() => setActiveStore(s.name)}
              >
                <span className={`size-6 shrink-0 rounded-full ${s.dot}`} />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">
                    {s.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {s.plan}
                  </span>
                </div>
                {s.name === activeStore && <CheckIcon className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusIcon />
            Create store
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="ml-auto flex items-center gap-1">
        <div className="mr-1 hidden items-center gap-2 rounded-lg border bg-background px-2.5 py-1.5 text-sm md:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">Live:</span>
          <span className="font-medium tabular-nums">{liveCount}</span>
          <UsersIcon className="size-4 text-muted-foreground" />
          <span className="text-muted-foreground">users</span>
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <BellIcon />
          <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-red-500" />
          <span className="sr-only">Notifications</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Open user menu"
            className="ml-1.5 size-8 overflow-hidden rounded-full ring-2 ring-transparent transition hover:ring-sidebar-border focus-visible:outline-none"
            render={
              <button type="button">
                <img
                  src="https://i.pravatar.cc/64?img=12"
                  alt="User avatar"
                  className="size-full object-cover"
                />
              </button>
            }
          />
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0">
                <div className="flex items-center gap-3 px-1.5 py-2 text-left text-sm">
                  <Avatar className="size-9">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?img=1"
                      alt="Toby Belhome"
                    />
                    <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      Toby Belhome
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      @tobybelhome
                    </span>
                  </div>
                  <Badge>Pro</Badge>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LayoutGridIcon className="text-muted-foreground" />
                Dashboard
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleQuestionMarkIcon className="text-muted-foreground" />
                Help center
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpenIcon className="text-muted-foreground" />
                Guides
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => e.preventDefault()}
                className="focus:bg-transparent dark:focus:bg-transparent"
              >
                <MoonIcon className="text-muted-foreground" />
                Dark mode
                <Switch
                  className="ms-auto"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon className="text-muted-foreground" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
