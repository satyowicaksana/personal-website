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
      <Row gutter={16} className='mb-2'>
        <Col>
          <Avatar src={experience.src} size='large' shape='square'/>
        </Col>
        <Col>
          <Title level={5}>{experience.title}</Title>
          <Text>{experience.company} - {experience.type}</Text><br></br>
          <Text className='typography-fade'>{experience.date}</Text>
        </Col>
      </Row>
      <Paragraph>{experience.description}</Paragraph>
      <Row gutter={8}>
        {experience.stacks.map((stack, i) => (
          <Col key={i} className='mt-2'>
            <Tooltip overlay={stack.name}>
              <img src={stack.src} alt='' className='image-icon clickable'/>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExperienceCard;