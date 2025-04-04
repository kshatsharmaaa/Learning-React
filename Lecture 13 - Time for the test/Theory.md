

# Episode 13 - Time for the Test

## Theory Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

# Types of testing (developer)

- Unit Testing - Testing One Component in Isolation || means seperately
- Integration Testing - Testing Integration of Components
- End to End Testing (or) e2e Testing - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Jest - `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

## Notes:

- Why do we even write test cases??
- If we change the functionality of a button in some component its connected components might inroduce a bug.
- even a single line of code can mess up everything in your application.
- developer can do two types of testing - mannual testing and write test cases for the code
- we'll be concentrating on the second one.
- by writing code a developer can do 3 types of testing: see up.
- we're majorly concerned about the first 2types of testing as a developer
- libraries we're going to use for testing: react testing library
- npm install --save-dev @testing-library/react @testing-library/dom
- it uses something known as jest - standard for writing testcases for js
- install jest
- npm install --save-dev jest
- install babel dependency: npm install --save-dev babel-jest @babel/core @babel/preset-env
- setup babel.config.js
- make changes in .parcelrc
- to run test cases: npm run test
- write jest configuration: npx jest --init
    - no ts
    - jsdom
    - coverage yes
    - babel
    - yes - garbage collection
- Install jsdom library
- Lets start with writing test case for small js code: sum.js
- Where do i write test cases? - create a folder : __tests__ anywhere in folder structure
- Any js file inside it will be considered test file
- Alter way : any file with name Component.test.js
- sum.test.js : test fn (string, clbk fn)
- string is the ddescription of the test
- clbk fn is the implementation 
- npm run test



