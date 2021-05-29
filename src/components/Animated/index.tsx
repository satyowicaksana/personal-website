import { HTMLAttributes, useState } from 'react'
import { Skeleton, Typography, Popover, Row, Col, Tag, Tooltip } from 'antd';
import { FaHeart, FaStar, FaTrophy, FaUser, FaUserCheck } from 'react-icons/fa'

import { Anime, Recommendation, SearchedAnime, SeasonAnime } from 'interfaces/anime'
import { styler } from 'helpers'
import './style.less';
import Avatar from 'antd/lib/avatar/avatar';
import { Experience } from 'interfaces';
import { experiences } from 'views/Home/consts';
import { useVisibility } from 'hooks'

const { Text, Paragraph, Title, Link } = Typography;

interface AnimatedProps extends HTMLAttributes<HTMLDivElement> {
  animation: string
}

const Animated = ({
  animation,
  ...props
}: AnimatedProps) => {

  const [isVisible, elementRef] = useVisibility<HTMLDivElement>()

  return (
    
    <div ref={elementRef} className={`animated-container ${isVisible ? animation : ''}`} {...props}/>
  );
}

export default Animated;