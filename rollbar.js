import { NativeModules } from 'react-native';
import { Client, Configuration } from 'rollbar-react-native';

const { ROLLBAR_CLIENT_TOKEN, BUILD_VERSION } = NativeModules.Environment || {};

console.log(NativeModules.Environment);

const config = new Configuration(ROLLBAR_CLIENT_TOKEN, {
  endpoint: 'https://api.rollbar.com/api/1/item/',
  logLevel: 'info',
  environment: "test",
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: BUILD_VERSION,
      },
    },
  },
});

export const rollbar = new Client(config);
