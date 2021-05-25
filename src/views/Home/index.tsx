import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {
  BannerCarousel,
  Carousel,
  AnimeCardsSection,
  StoryCardsSection,
  AnimeCard,
  ExperienceCard
} from 'components';
import './style.less';
import {
  selectFeaturedNewsList,
  getFeaturedNewsList
} from 'store/news'
import {
  selectCurrentSeason,
  selectTopAiringAnimes,
  getCurrentSeason,
  getTopAiringAnimes
} from 'store/anime'
import { Button, Col, Divider, Row, Skeleton, Steps, Typography } from 'antd';
import { useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { frontEndIllustration } from 'assets/images';
import Avatar from 'antd/lib/avatar/avatar';
import { experiences } from './consts';

const { Title, Text } = Typography
const { Step } = Steps

const Home = () => {

  return (
    <div className='container'>
      <div className='banner-container'>
        <div className='banner-background'>
          <div className='banner-blob'/>
        </div>
        <div className='centered-flex'>
          <div className='content-container'>
            <Row align='middle' gutter={40} wrap={false}  className='banner-content-container'>
              <Col span={14}>
                <Text type='secondary'>Hello World, I'm</Text>
                <Title type='secondary' className='banner-title'>Satyo Wicaksana</Title>
                <Title type='secondary' className='banner-subtitle typography-fade'>FRONT-END DEVELOPER</Title>
                <Text type='secondary' className='typography-fade'>based in Jakarta, Indonesia. Specialised in web development using React.</Text>
                <Button type='primary' size='large' className='mt-4'>Get In Touch 👋</Button>
              </Col>
              <Col flex='auto'>
                <img src={frontEndIllustration} alt='' onClick={() => window.open('https://www.freepik.com/vectors/website', '_blank')} className='banner-illustration'/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='experience-container'>
        <div className='experience-background'>
          <div className='experience-blob'/>
          <div className='experience-blob-2'/>
        </div>
        <div className='experience-view-transition'/>
        <div className='experience-view-transition-white'/>
        <div className='experience-about-card glass p-2'>
          <Row gutter={16} wrap={false}>
            <Col>
              <Avatar className='experience-avatar'/>
            </Col>
            <Col>
              <Text>
                Hi! 👋 I'm a front-end developer and I have experience mostly in <Text strong>web development</Text> using <Text strong>React</Text>. 😎 That being said, I also have worked on mobile development, and back-end stuff. 👌
              </Text>
            </Col>
          </Row>
        </div>
        <div className='centered-flex pt-4'>
          <div className='content-container'>
            <Title className='mb-4'>Experience & Education</Title>
            <Row align='middle' gutter={16}>
            {experiences.map((experience, i) => (
              <Col key={i} className='mb-2'>
                <ExperienceCard key={i} experience={experience}/>
              </Col>
            ))}
          </Row>
          </div>
        </div>
      </div>
      <div className='skills-container centered-flex'>
        <div className='content-container py-5'>
          <Title>Skills</Title>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home;