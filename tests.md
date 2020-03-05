## Testing....

- documenation form https://create-react-app.dev/docs/running-tests;;
  - smoke test : verifying that a component renders without throwing,
  - shallow rendering: testing some of the output,
  - full rendering: testing component lifecycle and state changes.
- Shallow Rendering :  
  -  test components in isolation from the child components they render, using shallow() rendering AP 
      form Enzyme. To install it, Run 
    - npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
    - yarn add enzyme enzyme-adapter-react-16 react-test-renderer
    - You can read the Enzyme documentation for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in expect() and jest.fn() for spies.
    - npm install --save jest-enzyme

- React Testing Library :  
    - Alternagive or companion go enzyme, you may consider using  react-testing-library, is a library for testing react components 
    in a way that resembles the way the components are used by end users.   it is well suited for unit, integration, and end-to-end 
    testing of  React components  and applications. it works more directly with DOM nodes, and therefore its  recommended to use with
    jest-dom for improved assertions....
    - npm install --save @testing-library/react @testing-library/jest-dom
    - yarn add @testing-library/react @testing-library/jest-dom

- Snapshot Testing
  - Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. Read more about snapshot testing.

