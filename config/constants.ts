import type { LogType } from "consola";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

export const APP_NAME = "HYPERBRIDGE";
export const APP_ENV = process.env.APP_ENV;
export const APP_LOG_LEVEL: LogType = process.env.NEXT_PUBLIC_LOG_LEVEL
  ? (process.env.NEXT_PUBLIC_LOG_LEVEL as LogType)
  : "info";
