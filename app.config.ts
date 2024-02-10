import { type AppVariant } from '@src/types'
import { type ExpoConfig } from 'expo/config'
import process from 'process'
import fs from 'fs'
import path from 'path'
import { type IAppConfig } from '@src/interfaces'

const config: IAppConfig = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json'), 'utf-8'))
const APP_VARIANT = (process.env?.APP_VARIANT ?? 'development') as AppVariant

const appConfig: ExpoConfig = {
  name: config[APP_VARIANT].EXPO_PUBLIC_APP_NAME,
  slug: 'mobile-fe-unsiagram',
  version: config[APP_VARIANT].EXPO_PUBLIC_APP_VERSION,
  orientation: 'default',
  icon: `./assets/${APP_VARIANT}/icon.png`,
  userInterfaceStyle: 'light',
  splash: {
    image: `./assets/${APP_VARIANT}/splash.png`,
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    buildNumber: config[APP_VARIANT].EXPO_PUBLIC_BUILD_NUMBER,
    bundleIdentifier: `com.mathiuskormasela.unsiagram.${APP_VARIANT}`
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/${APP_VARIANT}/adaptive-icon.png`,
      backgroundColor: '#ffffff'
    },
    versionCode: Number(config[APP_VARIANT].EXPO_PUBLIC_BUILD_NUMBER),
    package: `com.mathiuskormasela.unsiagram.${APP_VARIANT}`
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    eas: {
      projectId: '42ed213d-a694-4e96-8eb0-d522430b11b9'
    }
  }
}

export default appConfig
