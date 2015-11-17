##Test React Components with Decorators

**Note** this is a demo, and a poorly written one at that! Just wanted to show off the concept.

```js
import React from 'react'
import test from './src/test'

@test({
  name: 'bob'
},
{
  children: 'BOB',
})
export default class Test extends React.Component{
  render(){
    return (
      <div>
        {this.props.name.toUpperCase()}
      </div>
    )
  }
}
```

The goal is to test your components as you write them. Useful for props-only components. This is way too basic right now, only a demo. If you like the idea, please let me know! This idea popped into my head and I made it in an hour.

##Problems:

- Decorator needs to be removed unless testing.

I have an easy fix in my head, a webpack loader that strips it unless running tests. Or, add the decorator as a comment, and strip the comments when testing.

- You have to write the tests still.

I would like to have a wrapper around mocha that makes them for you, but right now you have to add a test like so:

```js
import Component from './component'
import { expect } from 'chai'

describe('Test Component', function() {
  it('Should pass tests correctly', function () {
    expect(Component).to.equal(true);
  });
});
```
