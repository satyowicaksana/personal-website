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
                <Title type='secondary' className='banner-title'>FRONT-END DEVELOPER</Title>
                <Title type='secondary' className='banner-subtitle typography-fade mb-4'>Satyo Wicaksana</Title>
                <Button type='primary' size='large'>Get In Touch 👋</Button>
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
                Hi! 👋 I'm a front-end developer and I have experience mostly in <Text strong>web development</Text> using <Text strong>React</Text>. 😎 That being said, I have also worked on mobile development, and back-end stuff. 👌
              </Text>
            </Col>
          </Row>
        </div>
        <div className='centered-flex pt-4'>
          <div className='content-container'>
            <Title>Experience & Education</Title>
          </div>
        </div>
        <div className='experience-cards-container custom-scrollbar py-2 px-5'>
          <Row align='middle' gutter={16} wrap={false}>
            {experiences.map((experience, i) => (
              <>
                <Col>
                  <ExperienceCard key={i} experience={experience}/>
                </Col>
                <Col>
                  <Divider className='experience-cards-divider'/>
                </Col>
              </>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home;