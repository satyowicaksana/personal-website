import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {
  BannerCarousel,
  Carousel,
  AnimeCardsSection,
  StoryCardsSection,
  AnimeCard,
  ExperienceCard,
  Animated
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
import { Button, Col, Divider, Row, Skeleton, Steps, Typography, Progress } from 'antd';
import { useScroll, useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { avatar, frontEndIllustration } from 'assets/images';
import Avatar from 'antd/lib/avatar/avatar';
import { navbarLinks, experiences, toolImages } from './consts';
import { SiTypescript, SiJavascript, SiCss3, SiHtml5, SiReact, SiRedux, SiStyledComponents, SiNodeDotJs, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaLess } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { useVisibility } from 'hooks';

const { Title, Text, Paragraph, Link } = Typography
const { Step } = Steps

const Home = () => {
  const { scrollY, scrollDirection } = useScroll()

  const [isVisible, elementRef] = useVisibility<HTMLDivElement>()

  return (
    <div className='container'>
      <div className={`navbar-container centered-flex ${scrollY > 8 ? 'overlay' : ''} ${scrollDirection === 'down' ? 'hide' : ''}`}>
        <div className='content-container py-2'>
          <Row justify='end'>
            <Col>
              <Row gutter={32}>
                {navbarLinks.map(link => (
                  <Col key={link.value}>
                    <Link onClick={() => document.getElementById(link.value)?.scrollIntoView({behavior: 'smooth'})}>{link.label}</Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className='banner-container'>
        <div className='banner-background'>
          <div className='banner-blob'/>
        </div>
        <div className='centered-flex'>
          <div className='content-container'>
            <Animated animation='fade'>
              <Row align='middle' gutter={40} wrap={false}  className='banner-content-container'>
                <Col span={14}>
                  <Text type='secondary'>Hello World, I'm</Text>
                  <Title type='secondary' className='banner-title'>Satyo Wicaksana</Title>
                  <Title type='secondary' className='banner-subtitle typography-fade'>FRONT-END DEVELOPER</Title>
                  <Text type='secondary' className='typography-fade'>based in Jakarta, Indonesia. Specialised in web development using React.</Text>
                  <Link href='https://api.whatsapp.com/send?phone=+628111828395' target='_blank'><Button type='primary' size='large' className='mt-4'>Get In Touch 👋</Button></Link>
                </Col>
                <Col flex='auto'>
                  <img src={frontEndIllustration} alt='' onClick={() => window.open('https://www.freepik.com/vectors/website', '_blank')} className='banner-illustration'/>
                </Col>
              </Row>
            </Animated>
          </div>
        </div>
      </div>
      <div id='experience' className='experience-container'>
        <div className='experience-background'>
          <div className='experience-blob'/>
          <div className='experience-blob-2'/>
        </div>
        <div className='experience-view-transition'/>
        <div className='experience-view-transition-white'/>
        <Animated animation='fade'>
          <div className='experience-about-card glass p-2'>
            <Row gutter={16} wrap={false}>
              <Col>
                <Avatar src={avatar} className='experience-avatar'/>
              </Col>
              <Col>
                <Text>
                  Hi! 👋 I'm a front-end developer and I have experience mostly in <Text strong>web development</Text> using <Text strong>React</Text>. 😎 That being said, I also have worked on mobile development, and back-end stuff. 👌
                </Text>
              </Col>
            </Row>
          </div>
        </Animated>
        <div className='centered-flex pt-4'>
          <div className='content-container '>
            <Animated animation='fade'>
              <Title className={`mb-4 `}>Experience & Education</Title>
            </Animated>
            <Row align='middle' gutter={16}>
            {experiences.map((experience, i) => (
              <Col key={experience.date} span={8} className='mb-2'>
                <Animated animation='fade'>
                  <ExperienceCard key={i} experience={experience}/>
                </Animated>
              </Col>
            ))}
          </Row>
          </div>
        </div>
      </div>
      <div id='tools' className='tools-container centered-flex'>
        <div className='content-container py-5'>
          <Animated animation='fade'>
            <Title className='mb-4'>Tools</Title>
          </Animated>
          <Row wrap={false} gutter={40} justify='space-between'>
            <Col>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Languange</Text>
                  <Text>As a front-end developer, I'm familiar with <Link strong className='tools-link-html'><SiHtml5/> HTML</Link>, <Link strong className='tools-link-js'><SiJavascript/> Javascript</Link>, and <Link strong className='tools-link-css'><SiCss3/>CSS</Link>.<br></br>
                  I also prefer to use <Link strong className='tools-link-ts'><SiTypescript/> Typescript</Link> for better development experience.</Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Framework/Library</Text>
                  <Text>So far I used <Link strong className='tools-link-react'><SiReact/> React</Link> in every front-end development work I did.<br></br>
                  Along with <Link strong className='tools-link-redux'><SiRedux/> Redux</Link> for state management.</Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Styling Tools</Text>
                  <Text>Normal CSS is enough but I usually use <Link strong className='tools-link-less'><FaLess/> LESS</Link> for better development experience.<br></br>
                  I also have experience using <Link strong className='tools-link-styled-components'><SiStyledComponents/> Styled Component</Link>.<br></br>
                  For CSS framework, I go with  <Link strong className='tools-link-antd'><AiOutlineAntDesign/> Ant Design</Link>. It has a lot of components and they are easy to customize.</Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div>
                  <Text className='typography-fade typography-block'>Back-End Environment</Text>
                  <Text>I learned back-end development and I'm familiar with <Link strong className='tools-link-node'><SiNodeDotJs/> Node</Link>.<br></br>
                  For DBMS, I learned <Link strong className='tools-link-postgre'><SiPostgresql/> PostgreSQL</Link> and <Link strong className='tools-link-mongo'><SiMongodb/> MongoDB</Link>.
                  </Text>
                </div>
              </Animated>
            </Col>
            <Col>
              <Animated animation='fade'>
                <div className='tools-circle-container'>
                  <div className='tools-circle-colored'/>
                  <div className='tools-circle-colored-2'/>
                  <div className='tools-circle glass'/>
                  <div className='tools-circle-2 glass'/>
                  <div className='tools-circle-3 glass'/>
                  <Row>
                    {toolImages.map(image => (
                      <Col key={image.name} span={8} className='centered-flex tool-col'>
                        {image.src && (
                          <div className='tool-circle glass centered-flex p-3'>
                            <img src={image.src} alt={image.name} className='full-width'/>
                          </div>
                        )}
                      </Col>
                    ))}
                  </Row>
                </div>
              </Animated>
            </Col>
          </Row>
        </div>
      </div>
      <div id='portfolio' className='portfolio-container centered-flex'>
        <div className='content-container py-5'>
          <Animated animation='fade'>
            <Title className='mb-4'>Portfolio</Title>
          </Animated>
          <Animated animation='fade'>
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
          </Animated>
          <Animated animation='fade'>
            <Row align='middle' gutter={20} wrap={false}>
              <Col span={4}>
                <img src='https://yt3.ggpht.com/ytc/AAUvwnis_ocUytOqs0O_PLpYGe8emz0StqNfMG7uzINszw=s900-c-k-c0x00ffffff-no-rj' alt='' className='portfolio-image'/>
              </Col>
              <Col>
                <Paragraph>
                  This is my exercise back when I first learn React.<br></br>
                  I just display data from a free API. 😄
                </Paragraph>
              </Col>
            </Row>
          </Animated>
          <p></p>
        </div>
      </div>
      <div id='footer' className='footer-container centered-flex'>
        <div className='content-container py-5'>
          <Animated animation='fade'>
            <Row justify='space-between'>
              <Col>
                <Text type='secondary' strong className='typography-fade'>Satyo Wicaksana</Text>
              </Col>
              <Col>
                <Text type='secondary' className='typography-block mb-2'>Let's talk business. 💼</Text>
                <Row gutter={8}>
                  <Col>
                    <Title>
                      <Link href='mailto:satyowicaksana@gmail.com'><AiFillMail/></Link>
                    </Title>
                  </Col>
                  <Col>
                    <Title>
                      <Link href='https://api.whatsapp.com/send?phone=+628111828395' target='_blank'><AiOutlineWhatsApp/></Link>
                    </Title>
                  </Col>
                  <Col>
                    <Title>
                      <Link><AiFillLinkedin/></Link>
                    </Title>
                  </Col>
                  <Col>
                    <Title>
                      <Link><AiFillGithub/></Link>
                    </Title>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Animated>
        </div>
      </div>
    </div>
  )
}

export default Home;