import { LightningBoltIcon, CookieIcon, GearIcon, HomeIcon, FileTextIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";


const AppNav = () => {
    return (
        <>
            <nav className="w-60 sticky min-w-[15rem] border-r-2 flex flex-col h-full justify-between gap-y-10 py-7">
                <div>
                    <h3 className="text-xs  tracking-wider font-bold">Menu</h3>
                    <div className="flex flex-col gap-y-4 mt-7">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => {
                                if (isPending) {
                                    return "pending";
                                } else if (isActive) {
                                    return "text-sm font-medium transition-colors hover:text-primary flex items-center gap-x-4";
                                } else {
                                    return "text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-x-4";
                                }
                            }}
                        >
                            <HomeIcon></HomeIcon>
                            Home
                        </NavLink>

                        <NavLink
                            to="/sessions"
                            className={({ isActive, isPending }) => {
                                if (isPending) {
                                    return "pending";
                                } else if (isActive) {
                                    return "text-sm font-medium transition-colors hover:text-primary flex items-center gap-x-4";
                                } else {
                                    return "text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-x-4";
                                }
                            }}
                        >
                            <LightningBoltIcon></LightningBoltIcon>
                            Sessions
                        </NavLink>

                        <NavLink
                            to="/tracking"
                            className={({ isActive, isPending }) => {
                                if (isPending) {
                                    return "pending";
                                } else if (isActive) {
                                    return "text-sm font-medium transition-colors hover:text-primary flex items-center gap-x-4";
                                } else {
                                    return "text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-x-4";
                                }
                            }}
                        >
                            <CookieIcon></CookieIcon>
                            Tracking
                        </NavLink>


                        <NavLink
                            to="/tasks"
                            className={({ isActive, isPending }) => {
                                if (isPending) {
                                    return "pending";
                                } else if (isActive) {
                                    return "text-sm font-medium transition-colors hover:text-primary flex items-center gap-x-4";
                                } else {
                                    return "text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-x-4";
                                }
                            }}
                        >
                            <FileTextIcon></FileTextIcon>
                            Tasks
                        </NavLink>

                        <NavLink
                            to="/settings"
                            className={({ isActive, isPending }) => {
                                if (isPending) {
                                    return "pending";
                                } else if (isActive) {
                                    return "text-sm font-medium transition-colors hover:text-primary flex items-center gap-x-4";
                                } else {
                                    return "text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-x-4";
                                }
                            }}
                        >
                            <GearIcon></GearIcon>
                            Settings
                        </NavLink>


                    </div>
                </div>

                <div className="flex items-center gap-x-2.5 w-full">
                    <ModeToggle></ModeToggle>
                    <Button variant={'default'}> Start</Button>
                    <Button variant={'destructive'}>End</Button>
                </div>
            </nav>
        </>
    );
};

export default AppNav;
