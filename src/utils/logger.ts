import logger from "pino";
import dayjs from "dayjs";

const xLog = logger({
  transport: {
    target: "pino-pretty" // ??? magic
  },
  base: {
    pid: false
  },
  timestamp: () => `, "time":"${dayjs().format()}"`
});

export { xLog };
