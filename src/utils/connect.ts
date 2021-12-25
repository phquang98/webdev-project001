import mongoose, { mongo } from "mongoose";

import { xConfig } from "../config/default";
import { xLog } from "./logger";

const xConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(xConfig.dbUri);
    xLog.info("CXN to MongoDB OK");
  } catch (error) {
    xLog.error("Failed to cxn to MongoDB");
  }
};

export { xConnect };
