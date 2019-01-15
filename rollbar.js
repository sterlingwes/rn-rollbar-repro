import { Platform, NativeModules } from 'react-native';
import { Client, Configuration } from 'rollbar-react-native';

const { ROLLBAR_CLIENT_TOKEN } = NativeModules.Environment || {};

 const config = new Configuration(ROLLBAR_CLIENT_TOKEN, {
  endpoint: 'https://api.rollbar.com/api/1/item/',
  logLevel: 'info',
  environment: "test",
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: "1",
      },
    },
  },
});

export const rollbar = new Client(config);
