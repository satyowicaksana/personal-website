import { HTMLAttributes, useState } from 'react'
import { Skeleton, Typography, Popover, Row, Col, Tag, Tooltip } from 'antd';
import { FaHeart, FaStar, FaTrophy, FaUser, FaUserCheck } from 'react-icons/fa'

import { Anime, Recommendation, SearchedAnime, SeasonAnime } from 'interfaces/anime'
import { styler } from 'helpers'
import './style.less';
import Avatar from 'antd/lib/avatar/avatar';
import { Experience } from 'interfaces';
import { experiences } from 'views/Home/consts';

const { Text, Paragraph, Title, Link } = Typography;

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  experience: Experience
}

const ExperienceCard = ({
  experience,
  ...props
}: ExperienceCardProps) => {

  return (
    <div className='experience-card-container glass p-2'>
      <div>
        <Row gutter={16} className='mb-1'>
          <Col>
            <Avatar src={experience.src} shape='square'/>
          </Col>
          <Col>
            <Title level={5}>{experience.title}</Title>
          </Col>
        </Row>
        <Text className='typography-block mb-1'><Link strong>{experience.company}</Link> <Text className='typography-fade'>- {experience.type}</Text></Text>
        <Paragraph>{experience.description}</Paragraph>
      </div>
      <div>
        <Text strong className='typography-fade'>{experience.date}</Text>
      </div>
    </div>
  );
}

export default ExperienceCard;