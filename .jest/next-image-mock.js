/* eslint-disable */
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <OriginalNextImage {...rest} unoptimized />
  },
})
