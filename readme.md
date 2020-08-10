# Reload All Tabs

Reload all visible tabs in your current window with one button click.

## Local development

Run these in two different terminals.

- This runs `webpack` in watch mode.

  ```shell
  npm run dev
  ```

- This runs `web-ext` and loads the extension in Firefox.

  ```shell
  npm start
  ```

## Build the extension

This will transpile the plugin and build a `zip` file for the extension.

The `zip` will be put in `./build`.

```shell
npm run build
```

## Extension signing for Firefox

Define your api key / secret in your environment then run the following.

Credentials can be found at https://addons.mozilla.org/en-US/developers/addon/api/key/

This generates an `xpi` file and it will be put in `./build`.

```shell
npm run sign -- --api-key=$WEB_EXT_API_KEY --api-secret=$WEB_EXT_API_SECRET
```

## Useful links

- https://hacks.mozilla.org/2019/10/developing-cross-browser-extensions-with-web-ext-3-2-0/
- https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
