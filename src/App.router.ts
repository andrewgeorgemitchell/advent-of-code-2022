import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { Day01, Day02, Day03, Day04, Day05, Day10 } from "~/pages";

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

const day04Route = rootRoute.createRoute({
  path: "/day-04",
  component: Day04,
});

const day05Route = rootRoute.createRoute({
  path: "/day-05",
  component: Day05,
});

const day10Route = rootRoute.createRoute({
  path: "/day-10",
  component: Day10,
});

const routeConfig = rootRoute.addChildren([
  day01Route,
  day02Route,
  day03Route,
  day04Route,
  day05Route,
  day10Route,
]);

export const router = createReactRouter({ routeConfig });
