import path from "path";

process.chdir(path.join(__dirname, "../db"));

// Should stay around 60s
jest.setTimeout(config.JEST_TIMEOUT as number);
