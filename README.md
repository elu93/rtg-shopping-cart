## Rooms To Go Engineering: React Take Home Assignment

#### How to Run
---
- run `npm i` to install packages.
- run `gatsby develop` to run project
- http://localhost:8000

#### RUN TESTS
---
- There is a conflict with babel and gatsby that is preventing the test from running. To run the test, please create a `.babelrc` file and add the following snippet:

```
{
    "env": {
        "test": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
        }
    }
}
```
