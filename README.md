<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://samuelmataraso.com/">
    <img src="https://i.imgur.com/yhUDT8T.png" alt="Logo">
  </a>

  <h3 align="center">Nigg Template</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Table of Contents](#table-of-content)
- [About this Template](#about-this-template)
  - [Reasons to create this template](#reasons-to-create-this-template)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [File Structure](#file-structure)
  - [Installation](#installation)
    - [Additional step on Android](#additional-step-on-Android)
- [Contributting](#contributting)
  - [License](#license)
- [About me](#about-me)

<!-- ABOUT THIS TEMPLATE -->

## About this Template

This template is designated for React Native applications and its follow a structure and architecture Feature-based.

This template was based on [Rocketseat Basic Template](https://github.com/Rocketseat/react-native-template-rocketseat-basic) by Rocketseat.

### Reasons to create this template

- Expedite the development process.

- Help the project get started in an easy way.

- Help anyone who has the doubt "what would be the best structure and architecture for my React Native application 🤔?"

- This template structure and architecture enable scalable application builds for mobile devices.

### Tech Stack

Technologies that make up this template:

- [React Native](http://facebook.github.io/react-native/) - Framework to build native mobile apps using JavaScript and React;
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) -
  Declarative API exposing platform native touch and gesture system to React Native;
- [React Native Device Info](https://github.com/react-native-community/react-native-device-info) - API Device Information for React Native;
- [React Native Dotenv](https://github.com/zetachang/react-native-dotenv) - Let you import environment variables from a .env file in React Native, don't need any native code integration;
- [Styled Components](https://www.styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress 💅;
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js;
- [apisauce](https://github.com/infinitered/apisauce) - Talking to APIs doesn't have to be awkward anymore;
- [Ramda](https://ramdajs.com/) - A practical functional library for JavaScript programmers;
- [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript;
- [Prop Types](https://github.com/facebook/prop-types) - Runtime type checking for React props and similar objects;
- [Reactotron](https://github.com/infinitered/reactotron) - Reactotron is a macOS, Windows, and Linux app for inspecting your React JS and React Native apps;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Reactotron plugin to config your React Native app;
- [Babel](https://babeljs.io/) - Is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Is a _wrapper_ of Babel to ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Babel plugin to add the opportunity to use import and require with root based paths;
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - This plugin removes all console.\* calls. ([RN tips: ](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [Eslint](https://eslint.org/) - Its goal is to provide a pluggable linting utility for JavaScript;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - This package provides Airbnb's .eslintrc as an extensible shared config;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) -
    Static AST checker for accessibility rules on JSX elements;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - React Native specific linting rules for ESLint;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - A _babel-root-import_ resolver for _eslint-plugin-import_;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues;
- [EditorConfig](https://editorconfig.org/) - Helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs;
- [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter;
  - [.prettierignore](https://prettier.io/docs/en/ignore.html#javascript) - A JavaScript comment of // prettier-ignore will exclude the next node in the abstract syntax tree from formatting;
  - [.prettierrc.json](https://prettier.io/docs/en/configuration.html) - Prettier uses cosmiconfig for configuration file support;

<!-- GETTING STARTED -->

## Getting Started

To use this template, you need to have the React Native CLI on your Pc/Mac, if you don't have, please follow theses steps:

[React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started.html)

### File Structure

A estrutura de arquivos está da seguinte maneira:

```bash
.
├── src/
│   ├── assets/
│   │    └── images/
│   │        └── logo.png
│   ├── common/
│   │   ├── components/
│   │   │   └── Button.js
│   │   └── utils/
│   │       ├── regexs.js
│   │       └── index.js
│   ├── config/
│   │   └── reactotron.js
│   ├── modules/
│   │   └── home/
│   │       ├── components/
│   │       │   ├── Card.js
│   │       │   └── index.js
│   │       ├── screens/
│   │       │   └── HomeScreen.js
│   │       └── utils/
│   │           ├── convert.js
│   │           └── index.js
│   ├── navigation/
│   │   └── index.js
│   ├── services/
│   │   └── api.js
│   ├── themes/
│   │       ├──colors.js
│   │       ├──fonts.js
│   │       ├──images.js
│   │       ├── index.js
│   │       └── metrics.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .prettier.json
├── .prettierignore
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── package.json
├── LICENSE
└── README.md
```

- **src** - Directory containing all the application files, a `src` directory is created so that the application code can be isolated in one directory and easily ported to other projects, if necessary;

  - **assets** - Directory for saving all file types, related to assets (Ex: images, fonts, etc ...);

    - **images** - Directory to store all kinds of images;

      - **logo.png** - A image example;

  - **common** - Directory to store every file type that is generic, files that are used in more than one feature;

    - **components** - Directory for storing components that are generic, components that are used in more than one feature;

      - **Button.js** - File where all Button component logic will be made;

      - **index.js** - File where the components will be indexed;

    - **utils** - Directory to store files that contain logics and are not screens or components.

      - **regex.js** - File that would have the regex logic;

      - **index.js** - File where the utils will be indexed;

  - **config** - Directory for saving application configuration files, for example, Reactotron config, Firebase initialization config, etc;

    - **reactotron.js** - Archive containing the configuration of Reactotron;

  **modules** - Directory that stores all the features of the app;

  - **home** - Directory to store all files (screens, components, utils, etc.) related only to **home** feature;

    - **components** - Directory to store components related only to **home** feature;

      - **Card.js** - File where all Card component logic will be made;

      - **index.js** - File where the components will be indexed;

    - **screens** - Directory to store files from screens related only to **home** feature.

      - **HomeScreen.js** - File where all HomeScreen screen logic will be made;

    - **utils** - Directory to store files that contain logics and are not screens or components related only to **home** feature.

      - **convert.js** - File that would have the convert logic;

      - **index.js** - File where the utils will be indexed;

  **navigation** - Directory to store the file responsible for the application navigation;

  - **index.js** - File with the application's navigation settings, it creates the Navigator available in the React Navigation library;

  **services** - Directory to store the file responsible for the application navigation;

  - **api.js** - File that contains communication with the API;

  **themes** - Directory to centralize all files related to global stylization;

  - **colors.js** - File with color constants to be used in the application;

  - **fonts.js** - File with fonts and typography to be used in the application;

  - **images.js** - File with the image constants to be used in the application;

  - **metrics.js** - File with metrics handled for various device types from your PixelRatio;

  - **index.js** - File where the themes will be indexed;

**index.js** - File responsible for centralizing the `src` directory code, in which routes are called just like any other configuration that needs to be executed at application startup, it is like an _Entry Point_ from the`src` directory;

**.editorconfig** - File for configuring the Plugin Editor Config, which standardizes some settings for the editor in different environments;

**.eslintrc.json** - ESLint configuration file, in it are inserted the rules and configurations of Linting of the project, such as the configuration of the Resolver for Babel Plugin Root Import and configuration of the global variable `__DEV__`;

**.prettier.json** - Prettier configuration file, in it are inserted the rules and configurations;

**.prettierignore** - Prettier ignore file, in it are inserted the files where we do not want the prettier to act;

**babel.config.js** - The Babel Plugin Root file is configured to accept absolute imports in the application using the `src` directory as the root;

**dependencies.json** - File containing only one object with list of dependencies that should be installed in the application, it is worth remembering that the dependencies that already come by default in the project as `react` and`react-native` need not be in this list, unless you want manage the version of these libs;

**devDependencies.json** - File containing only one object with list of development dependencies that should be installed in the application, it is worth remembering that development dependencies that already come by default in the project like `@ babel / core`,`eslint`, among others, do not need be on this list, unless you want to manage the version of these libs;

**index.js** - Application root file, also called _Entry Point_, is the first file called at the time of the build and execution of the application, in it is called the file `src / index.js` which in turn calls the routes of the application;

**jsconfig.json** - Javascript configuration file in the Editor, it is responsible for activating the Auto Complete of Javascript codes in the application;

**package.json** - Unlike common projects, this file has the necessary settings for publishing the Template in NPM, to know more about it see the section below;

### Installation

1. To install and use this template the process is very simple, just create a new project using the command:

```sh
react-native init AwesomeExample --template nigg
```

2. After the project you created you can delete the `App.js` file (running this command in the project root:`rm ./App.js`) from the root, because the `index.js` file now points to the folder **src**.

This will create the project with all dependencies of the template properly installed and linked, just like the configuration files that are copied to the project 😄.

---

#### Additional step on Android

In order for the gestures to be enabled in Android, it is a simple step to open the `android / app / src / main / java / <project_package> / MainActivity.java` file, and start importing the packages as below:

```java
// ...
import com.facebook.react.ReactActivity;
// Added Imports
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Once the import is done we will create a new method, just below `getMainComponentName ()`, where:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Added Method
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

<!-- CONTRIBUTING -->

## Contributting

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contributions you make will be **greatly appreciated**.

1. Make a Project Fork
2. Create a Branch for your Feature (`git checkout -b feature / AmazingFeature!`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Adding an Amazing Feature!`)
5. Push Branch (`git push origin feature / AmazingFeature!`)
6. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT license. See `LICENSE` for more information.

<!-- About me -->

## About me

Follow me on Twitter: [@samuelmataraso](https://twitter.com/samuelmataraso)

<a href="https://twitter.com/samuelmataraso" target="_blank">
<img src="https://twitter.com/samuelmataraso/profile_image?size=original" height="100" /></a>
