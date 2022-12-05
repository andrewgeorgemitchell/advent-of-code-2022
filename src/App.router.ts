import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { Day01, Day02, Day03 } from "~/pages";

export type DayRoute = string;

export const DaysRoutes: DayRoute[] = [
  "/",
  "/day-02",
  "/day-03",
  // "/day-04",
  // "/day-05",
  // "/day-06",
  // "/day-07",
  // "/day-08",
  // "/day-09",
  // "/day-10",
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

const rootRoute = createRouteConfig();

const day01Route = rootRoute.createRoute({
  path: "/",
  component: Day01,
});

const day02Route = rootRoute.createRoute({
  path: "/day-02",
  component: Day02,
});

const day03Route = rootRoute.createRoute({
  path: "/day-03",
  component: Day03,
});

const routeConfig = rootRoute.addChildren([day01Route, day02Route, day03Route]);

export const router = createReactRouter({ routeConfig });
