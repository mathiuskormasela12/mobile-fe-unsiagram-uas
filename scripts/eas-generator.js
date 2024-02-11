const process = require('process')
const fs = require('fs/promises')
const path = require('path')

// Read parameter that was sent when running eas-generator script
const env = process.argv[2] ?? 'development'
const allowedEnv = ['production', 'staging', 'development']

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const easGenerator = async () => {
  // To check if the env was sent when running the eas-generator script is valid
  if (allowedEnv.includes(env)) {
    try {
      // Read env config file
      const config = JSON.parse(await fs.readFile(path.join(__dirname, '../config.json'), 'utf-8'))

      // Default eas.json
      const eas = {
        cli: {
          version: '>= 7.2.0'
        },
        build: {
          'production-release': {
            distribution: 'internal',
            channel: 'production',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'production'
            }
          },
          'production-debug': {
            developmentClient: true,
            distribution: 'internal',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'production'
            }
          },
          'staging-release': {
            distribution: 'internal',
            channel: 'staging',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'staging'
            }
          },
          'staging-debug': {
            developmentClient: true,
            distribution: 'internal',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'staging'
            }
          },
          'development-release': {
            distribution: 'internal',
            channel: 'development',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'development'
            }
          },
          'development-debug': {
            developmentClient: true,
            distribution: 'internal',
            android: {
              buildType: 'apk'
            },
            ios: {
              simulator: true
            },
            env: {
              APP_VARIANT: 'development'
            }
          }
        },
        submit: {
          production: {}
        }
      }

      // Generate eas.json file for eas build needs
      for (const attributeName in eas.build) {
        if (attributeName.startsWith(env)) {
          eas.build[attributeName] = {
            ...eas.build[attributeName],
            env: {
              ...eas.build[attributeName].env,
              ...config[env]
            }
          }
        }
      }

      // Generate .env file
      let envFile = "# DO NOT TOUCH\n# This file gets generated by 'env:*' scripts\n\n"
      for (attributeName in config[env]) {
        envFile += attributeName
        envFile += '='
        envFile += config[env][attributeName]
        envFile += '\n'
      }

      try {
        await Promise.all([
          fs.writeFile(path.join(__dirname, '../eas.json'), JSON.stringify(eas, null, 2)),
          fs.writeFile(path.join(__dirname, '../.env'), envFile)
        ])
        console.info('eas.json and .env files were created successfully')
      } catch (err) {
        throw new Error(err)
      }
    } catch (err) {
      throw new Error(err)
    }
  } else {
    console.error('Wrong app variant')
  }
}

easGenerator()
