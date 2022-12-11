import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Typewriter } from "~/components";

export type DayRoute = string;

export const DaysRoutes: DayRoute[] = [
  "/",
  "/day-02",
  "/day-03",
  "/day-04",
  "/day-05",
  // "/day-06",
  // "/day-07",
  // "/day-08",
  // "/day-09",
  "/day-10",
  // "/day-11",
  // "/day-12",
  // "/day-13",
  // "/day-14",
  // "/day-15",
  // "/day-16",
  // "/day-17",
  // "/day-18",
  // "/day-19",
  // "/day-20",
  // "/day-21",
  // "/day-22",
  // "/day-23",
  // "/day-24",
  // "/day-25",
];

const DayLayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-8">{children}</div>;
};

const DayLayoutHeader = ({
  headerText,
  storyIntroText,
  route,
}: {
  headerText: string;
  storyIntroText: string;
  route: DayRoute;
}) => {
  const { previousDayRoute, nextDayRoute } = useMemo(() => {
    const currentDay = DaysRoutes.indexOf(route);

    const previousDayRoute = DaysRoutes[currentDay - 1];
    const nextDayRoute = DaysRoutes[currentDay + 1];

    return {
      ...(previousDayRoute && {
        previousDayRoute:
          previousDayRoute === "/"
            ? {
                label: "Day 01",
                route: previousDayRoute,
              }
            : {
                label: previousDayRoute.replace("/day-", "Day "),
                route: previousDayRoute,
              },
      }),
      ...(nextDayRoute && {
        nextDayRoute: {
          label: nextDayRoute.replace("/day-", "Day "),
          route: nextDayRoute,
        },
      }),
    };
  }, [route]);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3">
        {previousDayRoute ? (
          <Link
            className="text-right text-blue-400"
            to={previousDayRoute.route as any}
          >
            {"<="} To {previousDayRoute.label}
          </Link>
        ) : (
          <div />
        )}
        <h2 className="text-center text-xl">{headerText}</h2>
        {nextDayRoute ? (
          <Link className="text-blue-400" to={nextDayRoute.route as any}>
            To {nextDayRoute.label} {"=>"}
          </Link>
        ) : (
          <div />
        )}
      </div>
      <p className="text-center">**********</p>
      <div className="flex items-center justify-center">
        <p className="min-h-[120px] max-w-lg text-left">
          <Typewriter>{storyIntroText}</Typewriter>
        </p>
      </div>
    </div>
  );
};

export const DayLayoutASCIIArt = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex justify-center">{children}</div>;

export const DayLayoutContent = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex flex-col items-center gap-4">{children}</div>;

export const DayLayoutInput = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    {children}
  </div>
);

export const DayLayoutGithubLink = ({ href }: { href: string }) => (
  <a href={href} className="text-center text-blue-200" target={"_blank"}>
    See Code for this solution on Github
  </a>
);

export const DayLayout = {
  Root: DayLayoutRoot,
  Header: DayLayoutHeader,
  ASCIIArt: DayLayoutASCIIArt,
  Content: DayLayoutContent,
  Input: DayLayoutInput,
  GithubLink: DayLayoutGithubLink,
};
