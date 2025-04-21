module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./tests/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
};
