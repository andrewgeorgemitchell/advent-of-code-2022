import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { Day01, Day02, Day03 } from "~/pages";

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
