import path from 'path';
import { format, createLogger, transports } from 'winston';
import moment from 'moment';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('default', { month: 'long' });
const date = moment().format('DDMMYYYY-hhmmss');
const options = {
    file: {
        level: 'info',
        format: format.combine(
            format.simple(),
            format.splat(),
            // Time format
            format.timestamp({
                format: 'DD-MM-YYYY HH:mm:ss',
            }),
            // Setting log format
            format.printf((log) => {
                if (log.stack) return `${log.level}: [${log.timestamp}] ${log.stack}`;

                return `${log.level}: [${log.timestamp}] ${log.message}`;
            })
        ),
        filename: path.join(
            __dirname,
            `../../logs/server/${currentYear}/${currentMonth}/${date}.log`
        ),
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        json: false,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        format: format.combine(
            format.simple(),
            format.splat(),
            // Time format
            format.timestamp({
                format: 'DD-MM-YYYY HH:mm:ss',
            }),
            // Color format
            format.colorize(),
            // Setting log format
            format.printf((log) => {
                if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;

                return `[${log.timestamp}] [${log.level}] ${log.message}`;
            })
        ),
        json: true,
    },
};

const logger = createLogger({
    format: format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File(options.file),
        new transports.Console(options.console),
    ],
    exitOnError: false,
    silent: false,
});

export { logger };
