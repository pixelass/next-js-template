import { defaultOptions } from "@cypress/browserify-preprocessor";
import cucumber from "cypress-cucumber-preprocessor";

export default async (on, config) => {
  on(
    "file:preprocessor",
    cucumber.default({
      ...defaultOptions,
      typescript: require.resolve("typescript"),
    })
  );

  return config;
};
