import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from '../component/Header'

it('should ', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Header />)
    const result = renderer.getRenderOutput()
});