import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { Day01 } from "./pages";

const rootRoute = createRouteConfig();

export const day01Route = rootRoute.createRoute({
  path: "/",
  component: Day01,
});

const routeConfig = rootRoute.addChildren([day01Route]);

export const router = createReactRouter({ routeConfig });
