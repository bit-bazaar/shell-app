import React from 'react';

export type RemoteComponent = {
  default: React.ComponentType;
  [key: string]: React.ComponentType | undefined;
};
