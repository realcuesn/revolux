import { CubeIcon, ReaderIcon, ClockIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HomeHeader from "./home-header";
import WeeklyOverview from "./weekly-overview";

const Content = () => {
    return (
        <main className="w-full flex flex-col px-5 mx-auto flex-grow overflow-y-auto">
            <HomeHeader />
            <section className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4 mt-10">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Completed Tasks
                        </CardTitle>
                        <ReaderIcon />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">69</div>
                        <p className="text-xs text-muted-foreground">
                            Tasks completed this week.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Pending Tasks
                        </CardTitle>
                        <CubeIcon />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">69</div>
                        <p className="text-xs text-muted-foreground">
                            Tasks pending this week.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Sessions
                        </CardTitle>
                        <LightningBoltIcon />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">420</div>
                        <p className="text-xs text-muted-foreground">
                            Total sessions this week.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Session Duration
                        </CardTitle>
                        <ClockIcon />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">6.25</div>
                        <p className="text-xs text-muted-foreground">
                            Total productive hours spent today.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section>
                <WeeklyOverview />
            </section>
        </main>
    );
}

export default Content;
