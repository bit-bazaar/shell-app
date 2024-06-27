import type { moduleFederationPlugin } from "@module-federation/sdk";

type SharedConfig = moduleFederationPlugin.SharedConfig;

type SharedObject = {
  [key: string]: SharedConfig;
};

export const shellAppSharedDependencies: SharedObject = {
  react: {
    singleton: true,
    requiredVersion: "18.3.1",
    eager: true,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: "18.3.1",
    eager: true,
  },
  "react-router-dom": {
    singleton: true,
    requiredVersion: "6.23.1",
    eager: true,
  },
  "@emotion/react": {
    singleton: true,
    requiredVersion: "11.11.4",
  },
  "@emotion/styled": {
    singleton: true,
    requiredVersion: "11.11.5",
  },
  "@bit-bazaar/design.data-display.avatar": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.layout.box": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.layout.toolbar": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.layout.container": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.navigation.menu": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.typography.typography": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.surfaces.card": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.navigation.link": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.actions.button": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.actions.icon-button": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.data-display.list": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.layout.grid": {
    singleton: true,
    requiredVersion: "*",
  },
  "@bit-bazaar/design.surfaces.app-bar": {
    singleton: true,
    requiredVersion: "*",
  },
};
