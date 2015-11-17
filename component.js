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
