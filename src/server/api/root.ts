import { createTRPCRouter } from "./trpc";
import { syncRouter } from "./routers/sync-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  sync: syncRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
