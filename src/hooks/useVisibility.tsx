import { MutableRefObject, useEffect, useRef, useState } from 'react'

/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useVisibility<T>(
  offset = 0,
): [boolean, MutableRefObject<T>] {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef<any>(null)

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const {bottom, height }= currentElement.current.getBoundingClientRect()
    const middle = bottom - (height / 2)
    //setIsVisible(middle + offset >= 0 && middle - offset <= window.innerHeight)
    setIsVisible(middle - offset <= window.innerHeight)
  }

  useEffect(() => {
    onScroll()
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  return [isVisible, currentElement]
}