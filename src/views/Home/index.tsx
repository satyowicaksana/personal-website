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

const { Title, Text, Paragraph, Link } = Typography
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
                <Link href="https://api.whatsapp.com/send?phone=+628111828395"><Button type='primary' size='large' className='mt-4'>Get In Touch 👋</Button></Link>
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
              <Col key={i} span={8} className='mb-2'>
                <ExperienceCard key={i} experience={experience}/>
              </Col>
            ))}
          </Row>
          </div>
        </div>
      </div>
      <div className='tools-container centered-flex'>
        <div className='content-container py-5'>
          <Title className='mb-4'>Tools</Title>
        </div>
      </div>
      <div className='portfolio-container centered-flex'>
        <div className='content-container py-5'>
          <Title className='mb-4'>Portfolio</Title>
          <Row align='middle' gutter={40} wrap={false} className='mb-5'>
            <Col span={8}>
              <img src='https://yt3.ggpht.com/ytc/AAUvwnis_ocUytOqs0O_PLpYGe8emz0StqNfMG7uzINszw=s900-c-k-c0x00ffffff-no-rj' alt='' className='portfolio-image'/>
            </Col>
            <Col>
              <Paragraph>
                This is a simple website to show what I can do in web development.<br></br>
                The concept is a redesign of <Link strong href='https://myanimelist.net/' target='_blank'>MyAnimeList</Link>, an anime database and community website.<br></br>
                I got the design inspiration from other similar site and from dribbble.<br></br>
                I use <Link strong href='https://jikan.docs.apiary.io/' target='_blank'>Jikan API</Link> for the anime data and add some data with web scraping using NodeJS. 😎<br></br><br></br>
                As for now, I'm only done with displaying data in <Link>home page</Link>, <Link>search page</Link>, and <Link>detail page</Link>.<br></br>There's a <Link>register page</Link> but the authorization feature isn't done yet. 😅<br></br>
                For now at least you can play with the search page. 😄<br></br><br></br>
                I'm planning to continue developing at least for authorization and some CRUD action. 💪
              </Paragraph>
            </Col>
          </Row>
          <Row align='middle' gutter={20} wrap={false}>
            <Col span={4}>
              <img src='https://yt3.ggpht.com/ytc/AAUvwnis_ocUytOqs0O_PLpYGe8emz0StqNfMG7uzINszw=s900-c-k-c0x00ffffff-no-rj' alt='' className='portfolio-image'/>
            </Col>
            <Col>
              <Paragraph>
                This is my exercise back when I first learn React.<br></br>I just display data from a free API. 😄
              </Paragraph>
            </Col>
          </Row>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home;