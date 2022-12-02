import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { Day01, Day02 } from "~/pages";

const rootRoute = createRouteConfig();

const day01Route = rootRoute.createRoute({
  path: "/",
  component: Day01,
});

const day02Route = rootRoute.createRoute({
  path: "/day-02",
  component: Day02,
});

const routeConfig = rootRoute.addChildren([day01Route, day02Route]);

export const router = createReactRouter({ routeConfig });
