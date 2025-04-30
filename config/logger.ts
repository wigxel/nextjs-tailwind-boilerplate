import { type ConsolaReporter, createConsola, LogLevels } from "consola";
import { APP_LOG_LEVEL } from "~/config/constants";

export type LogLevel = keyof typeof LogLevels;

export const logger = createConsola({
  level: LogLevels[APP_LOG_LEVEL],
  formatOptions: {
    columns: 80,
    colors: true,
    compact: true,
    date: false,
  },
});

// Create a reporter to forward error logs to Sentry
// import { captureException, captureMessage } from "@sentry/nextjs"
// const sentryReporter: ConsolaReporter = {
//   log(logObj) {
//     // Only send error and fatal levels to Sentry
//     if (logObj.level >= LogLevels.error) {
//       const { message = "No message", args, ...extra } = logObj

//       // If the first arg is an Error object, use it as the exception
//       const errorObj = args.find((arg) => arg instanceof Error)

//       if (errorObj) {
//         captureException(errorObj, {
//           level: logObj.level >= LogLevels.fatal ? "fatal" : "error",
//           extra: {
//             ...extra,
//             args: args.filter((arg) => arg !== errorObj),
//             consoleMessage: message,
//           },
//         })
//       } else {
//         // Otherwise capture as a message with the args as extra data
//         captureMessage(message, {
//           level: logObj.level >= LogLevels.fatal ? "fatal" : "error",
//           extra: { ...extra, args },
//         })
//       }
//     }

//     // Return true to continue to the next reporter
//     return true
//   },
// }

// Only add Sentry reporter in non-development environments
// or you can remove this condition if you want Sentry reporting in development too
// if (!isDevelopment) {
//   logger.addReporter(sentryReporter)
// }
