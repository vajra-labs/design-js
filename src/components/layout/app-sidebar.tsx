import {
  ActivityIcon,
  AtSignIcon,
  AudioLinesIcon,
  BadgeDollarSignIcon,
  BellIcon,
  BlocksIcon,
  BotIcon,
  BoxIcon,
  Building2Icon,
  CalendarIcon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  CircleUserIcon,
  ClockIcon,
  CodeIcon,
  ContactIcon,
  CreditCardIcon,
  FileQuestionIcon,
  FolderIcon,
  FolderKanbanIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeadphonesIcon,
  HotelIcon,
  Image as ImageIcon,
  KeyRoundIcon,
  LayersIcon,
  ListTodoIcon,
  MailIcon,
  MessageSquareIcon,
  MessagesSquareIcon,
  NotebookTextIcon,
  PaletteIcon,
  QrCodeIcon,
  RouteIcon,
  SearchIcon,
  SettingsIcon,
  Share2Icon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SquareCheckIcon,
  SquareKanbanIcon,
  TriangleAlertIcon,
  TruckIcon,
  UserIcon,
  UsersIcon,
  UsersRoundIcon,
  WalletIcon,
  WorkflowIcon,
} from "lucide-react"

import * as React from "react"

import { cn } from "cn"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  active?: boolean
  expandable?: boolean
  badge?: string
  badgeVariant?: "new" | "coming" | "count"
}

type NavGroup = {
  label: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: "Dashboards",
    items: [
      { title: "Classic Dashboard", icon: ClockIcon, active: true },
      { title: "E-commerce", icon: ShoppingBagIcon, expandable: true },
      { title: "Payment Dashboard", icon: CreditCardIcon, expandable: true },
      { title: "Hotel Dashboard", icon: HotelIcon, expandable: true },
      { title: "Project Management", icon: FolderKanbanIcon, expandable: true },
      { title: "Real Estate", icon: Building2Icon, expandable: true },
      { title: "Sales", icon: CircleDollarSignIcon },
      { title: "HR", icon: UsersIcon, badge: "New", badgeVariant: "new" },
      { title: "CRM", icon: ContactIcon },
      { title: "Website Analytics", icon: HeadphonesIcon },
      { title: "AI Analytics", icon: BotIcon, badge: "New", badgeVariant: "new" },
      { title: "File Manager", icon: FolderIcon },
      { title: "Crypto", icon: LayersIcon },
      { title: "Academy/School", icon: GraduationCapIcon, expandable: true },
      { title: "Hospital Management", icon: ActivityIcon },
      { title: "Finance Dashboard", icon: WalletIcon },
      { title: "Logistics", icon: TruckIcon, badge: "Coming", badgeVariant: "coming" },
      { title: "Affiliate", icon: Share2Icon, badge: "Coming", badgeVariant: "coming" },
    ],
  },
  {
    label: "Apps",
    items: [
      { title: "Kanban", icon: SquareKanbanIcon },
      { title: "Notes", icon: NotebookTextIcon, badge: "8", badgeVariant: "count" },
      { title: "Chats", icon: MessageSquareIcon, badge: "5", badgeVariant: "count" },
      { title: "Social Media", icon: AtSignIcon },
      { title: "Workflow Automation", icon: WorkflowIcon, badge: "New", badgeVariant: "new" },
      { title: "Mail", icon: MailIcon },
      { title: "Todo List App", icon: ListTodoIcon },
      { title: "Tasks", icon: SquareCheckIcon },
      { title: "Calendar", icon: CalendarIcon },
      { title: "File Manager", icon: FolderIcon },
      { title: "Api Keys", icon: KeyRoundIcon },
      { title: "POS App", icon: QrCodeIcon },
    ],
  },
  {
    label: "AI Apps",
    items: [
      { title: "AI Chat", icon: BotIcon },
      { title: "AI Chat V2", icon: MessagesSquareIcon },
      { title: "Image Generator", icon: ImageIcon },
      { title: "Text to Speech", icon: AudioLinesIcon, badge: "New", badgeVariant: "new" },
    ],
  },
  {
    label: "Pages",
    items: [
      { title: "Users List", icon: UsersRoundIcon },
      { title: "Profile V1", icon: UserIcon },
      { title: "Profile V2", icon: CircleUserIcon },
      { title: "Onboarding Flow", icon: RouteIcon },
      { title: "Empty States", icon: FileQuestionIcon },
      { title: "Settings", icon: SettingsIcon },
      { title: "Pricing", icon: BadgeDollarSignIcon },
      { title: "Authentication", icon: ShieldCheckIcon },
      { title: "Notifications Page", icon: BellIcon },
      { title: "Error Pages", icon: TriangleAlertIcon },
    ],
  },
  {
    label: "Others",
    items: [{ title: "Widgets", icon: BoxIcon }],
  },
]

const resourceItems = [
  { title: "Components", icon: PaletteIcon },
  { title: "Blocks", icon: BlocksIcon },
  { title: "Examples", icon: CodeIcon },
  { title: "Website Templates", icon: GlobeIcon },
  { title: "Illustrations", icon: ImageIcon },
  { title: "Github", icon: GithubMarkIcon },
]

function GithubMarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.32-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.15c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function NavRow({ item }: { item: NavItem }) {
  const Icon = item.icon
  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={item.active} tooltip={item.title}>
        <Icon />
        <span>{item.title}</span>
        {item.expandable && (
          <ChevronRightIcon className="ml-auto size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
        )}
      </SidebarMenuButton>
      {item.badge && (
        <SidebarMenuBadge
          className={cn(
            item.badgeVariant === "new" && "text-xs font-medium text-green-500",
            item.badgeVariant === "coming" &&
              "text-xs font-normal text-muted-foreground",
            item.badgeVariant === "count" &&
              "text-xs font-normal text-muted-foreground"
          )}
        >
          {item.badge}
        </SidebarMenuBadge>
      )}
    </SidebarMenuItem>
  )
}

function SidebarSearch() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", down)
    return () => window.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex h-8 w-full cursor-pointer items-center gap-2 rounded-lg border border-input bg-background px-2.5 text-sm text-left shadow-none transition-colors outline-none hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
      >
        <SearchIcon className="pointer-events-none size-3.5 shrink-0 text-muted-foreground" />
        <span className="text-muted-foreground group-data-[collapsible=icon]:hidden">
          Search...
        </span>
        <KbdGroup className="pointer-events-none ml-auto group-data-[collapsible=icon]:hidden">
          <Kbd>⌘K</Kbd>
        </KbdGroup>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {navGroups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.items.map((item) => (
                  <CommandItem key={`${group.label}-${item.title}`}>
                    <item.icon />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const updateFade = () => {
      const atTop = el.scrollTop <= 0
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      el.style.setProperty("--fade-top", atTop ? "0" : "1")
      el.style.setProperty("--fade-bottom", atBottom ? "0" : "1")
    }

    updateFade()
    el.addEventListener("scroll", updateFade, { passive: true })
    const observer = new ResizeObserver(updateFade)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", updateFade)
      observer.disconnect()
    }
  }, [])

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="gap-3 p-3">
        <div className="flex items-center gap-2.5 px-1 pt-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="flex size-7 items-center justify-center rounded-md bg-sidebar-accent">
            <img src="/vite.svg" alt="Vite logo" className="size-4" />
          </div>
          <span className="text-sm font-semibold text-foreground group-data-[collapsible=icon]:hidden">
            Shadcn UI Kit
          </span>
        </div>
        <SidebarSearch />
      </SidebarHeader>
      <SidebarContent
        ref={contentRef}
        className="group-data-[collapsible=icon]:overflow-auto"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0px, black calc(0% + (var(--fade-top, 0) * min(12%, 40px))), black calc(100% - (var(--fade-bottom, 0) * min(12%, 40px))), transparent 100%)",
        }}
      >
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xs text-muted-foreground">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <NavRow key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground">
            Get This Template
          </SidebarGroupLabel>
          <SidebarMenu>
            {resourceItems.map((item) => (
              <NavRow key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          className={cn(
            "rounded-lg border bg-card p-3.5 text-card-foreground shadow-sm",
            "group-data-[collapsible=icon]:hidden"
          )}
        >
          <p className="text-sm font-semibold">Get This Template</p>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            You are viewing the live demo. Every dashboard you see here is
            included.
          </p>
          <button
            type="button"
            className="mt-3 flex h-9 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get all 16 dashboards · $79
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
