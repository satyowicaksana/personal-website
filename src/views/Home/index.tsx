import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {
  BannerCarousel,
  Carousel,
  AnimeCardsSection,
  StoryCardsSection,
  AnimeCard
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
import { Button, Col, Divider, Row, Skeleton, Typography } from 'antd';
import { useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { frontEndIllustration } from 'assets/images';

const { Title, Text } = Typography

const Home = () => {

  return (
    <div>
      <div className='banner-container'>
        <div className='banner-background'>
          <div className='banner-blob'/>
        </div>
        <div className='centered-flex'>
          <div className='content-container'>
            <Row wrap={false}  className='banner-content-container'>
              <Col span={14}>
              {/*<a href='https://www.freepik.com/vectors/website'>Website vector created by stories - www.freepik.com</a>*/}
                <Title type='secondary' className='banner-title'>FRONT-END DEVELOPER</Title>
                <Title type='secondary' className='banner-subtitle typography-fade mb-4'>Satyo Wicaksana</Title>
                <Button type='primary' size='large'>Get In Touch 👋</Button>
              </Col>
              <Col flex='auto'>
                <img src={frontEndIllustration} alt='' className='banner-illustration'/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;