import React from 'react'
import TestUtils from 'react-addons-test-utils'

export default function test(props, expected){
  return (Target) => {
    const shallowRenderer = TestUtils.createRenderer()
    shallowRenderer.render(<Target {...props} />)
    const output = shallowRenderer.getRenderOutput()
    if(output.props.children != expected.children) return JSON.stringify(output.props) +' to equal ' + JSON.stringify(expected)
    return true
  }
}
