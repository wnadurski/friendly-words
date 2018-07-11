# About
Friendly Words is a game supporting behavioral therapy for children with autism. It provides digital version of choose correct word game.
It allows children to learn new words by associating pronunciation with the picture.

More about autism and challenges: https://www.autismspeaks.org/what-autism/symptoms

# Workflow
We are using [GitHub Flow](https://guides.github.com/introduction/flow/). Please create pull requests to master branch when contributing.

# How to start
* follow the [React Native installation tutorial](https://facebook.github.io/react-native/docs/getting-started). Install all the dependecies mentioned in the tutorial (react-native-cli, Android SDK, etc.) 
* install [yarn](https://yarnpkg.com/lang/en/)
* clone project from [Friendly Words Github](https://github.com/autyzm-pg/friendly-words)
* install project's dependencies by running command `yarn install` from project's root directory
* run an Android emulator or connect your Android device using an USB cable. Make sure to turn on debugging mode on your device.
* Run command `react-native run-android` from project's root directory. If everything has been successfully configured, the command should build the project, install a .apk on the connected device and run the react-native packager in a new terminal window.
* app should be up and running. Be aware that application is using TextToSpeech service to automatically read instructions, so watch out for your volume settings
* If the application doesn't work, but has been built and installed succesfully, try following steps:
  * close the react-native packager and the application
  * run command `react-native start` - this command will open the packager only, without building the app
  * find the application on a device and open it

## Basic knowledge 
If you are unfamiliar with React Native, take a look at the following articles:
 * getting started tutorial 
 https://facebook.github.io/react-native/docs/getting-started.html
 * react native tutorial 
 https://facebook.github.io/react-native/docs/tutorial.html
 * excercises, examples and interactive docs 
 http://www.reactnativeexpress.com/todo_list
 

