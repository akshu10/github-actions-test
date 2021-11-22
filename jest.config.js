module.exports = {
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,js}",
    "!<rootDir>/src/server.ts",
    "!<rootDir>/src/app.ts",
    "!<rootDir>/src/types/**",
    "!<rootDir>/node_modules/",
    "!<rootDir>/build/",
    "!<rootDir>/*.js",
    "!<rootDir>/scripts/",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/test/tsconfig.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/config.*.js",
    "<rootDir>/db/",
  ],
};
