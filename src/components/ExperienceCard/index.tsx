import { HTMLAttributes } from 'react'
import { Typography, Row, Col, Avatar } from 'antd';

import './style.less';
import { Experience } from 'interfaces';

const { Text, Paragraph, Title, Link } = Typography;

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  experience: Experience
}

const ExperienceCard = ({
  experience,
  ...props
}: ExperienceCardProps) => {

  return (
    <div className='experience-card-container glass p-2' {...props}>
      <div>
        <Row wrap={false} gutter={16} className='mb-1'>
          <Col>
            <Avatar src={experience.src}/>
          </Col>
          <Col>
            <Title level={5}>{experience.title}</Title>
          </Col>
        </Row>
        <Text className='typography-block mb-1'><Link href={experience.link} target='_blank' strong>{experience.company}</Link> <Text className='typography-fade'>- {experience.type}</Text></Text>
        <Paragraph className='typography-block mb-1'>{experience.description}</Paragraph>
      </div>
      <div>
        <Text strong className='typography-fade'>{experience.date}</Text>
      </div>
    </div>
  );
}

export default ExperienceCard;