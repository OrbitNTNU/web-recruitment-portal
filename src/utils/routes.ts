import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Routes } from "@/consts/routes";

export const routeTo = (
  router: AppRouterInstance,
  route: Routes
) => {
  router.push(route);
};