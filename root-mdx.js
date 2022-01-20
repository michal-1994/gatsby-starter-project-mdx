import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
    h6: () => <span>and you thought you will a h6</span>
}

export const wrapMDX = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}