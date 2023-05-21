# BrinkElectronApp

## Clone
```bash
$ git clone https://github.com/SwiftFaze/brink-electron-app.git
$ npm install
$ npm run build:dev:all
$ npm start
```

## NPM scripts


### Start up
1. `npm install`

2. `npm run start:electron`

### Builds

This builds a project and places the output in the */dist* folder.

| Command | Description |
| --- | --- |
| `npm run build:dev:all` | Developer builds of all projects |
| `npm run build:prod:all` | Production builds of all projects |
| `npm run build:dev:main` | Developer build of the *Electron main* project |
| `npm run build:prod:main` | Production build of the *Electron main* project |
| `npm run build:dev:renderer` | Developer build of the *Electron renderer* project |
| `npm run build:prod:renderer` | Production build of the *Electron renderer* project |
| `npm run build:dev:preload` | Developer build of the *Electron preload* project |
| `npm run build:prod:preload` | Production build of the *Electron preload* project |

### Watch

Start watching for source code changes, and builds after each source code change.

| Command | Description |
| --- | --- |
| `npm run build:watch:all` | Watch all projects |
| `npm run build:watch:main` | Watch the *Electron main* project |
| `npm run build:watch:renderer` | Watch the *Electron renderer* project |
| `npm run build:watch:preload` | Watch the *Electron preload* project |

### Tests

Test commands.

| Command | Description |
| --- | --- |
| `npm run test:test` | Executes all Angular unit-tests |
| `npm run test:e2e` | Executes Angular end-2-end tests |
| `npm run test:lint` | Angular lint |

### Updates

Commands for updating NPM modules.

| Command | Description |
| --- | --- |
| `npm run update:angular` | Easy update to latest stable Angular |
| `npm run update:electron` | Easy update to latest stable Electron |
| `npm run update:webpack` | Easy update to latest stable WebPack |

### Packaging

| Command | Description |
| --- | --- |
| `npm run package` | Package current */dist* folder into an app in the */release-builds* folder |
| `npm run release` | First build a production build, then package */dist* folder into an app in the */release-builds* folder |

## Debugging

![Screenshots](/images/debug-electron-main-renderer.PNG)

Use [Code](https://code.visualstudio.com/) to get a super debug environment.

This extension is needed: [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

First be sure to have build everything:

```bash
$ npm run build:dev:all
```

Now set some breakpoints both in the main source code and in the renderer source code.

From Code press **Ctrl+Shift+D** and select **Main + Renderer** and press **F5**

## Packaging into an app

This is where all the magic happens.

```bash
$ npm run release
```

Then your app will be put into the */release-builds* folder. Can build an app for Windows, macOS and Linux.
