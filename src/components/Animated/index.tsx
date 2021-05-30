import { HTMLAttributes } from 'react'

import './style.less'
import { useVisibility } from 'hooks'

interface AnimatedProps extends HTMLAttributes<HTMLDivElement> {
  animation: string
}

const Animated = ({
  animation,
  ...props
}: AnimatedProps) => {

  const [isVisible, elementRef] = useVisibility<HTMLDivElement>()

  return (
    
    <div ref={elementRef} className={`animated-container ${animation} ${isVisible ? 'visible' : ''}`} {...props}/>
  );
}

export default Animated;