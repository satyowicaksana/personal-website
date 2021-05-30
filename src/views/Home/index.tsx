import { Button, Col, Row, Typography, Avatar } from 'antd';
import { SiTypescript, SiJavascript, SiCss3, SiHtml5, SiReact, SiRedux, SiStyledComponents, SiNodeDotJs, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaLess } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

import {
  Animated,
  ExperienceCard
} from 'components';
import './style.less';
import { useScroll, useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { avatar, frontEndIllustration, malRedesignDetailPage, malRedesignMainPage, shieldDatabaseDetailPage, shieldDatabaseMainPage } from 'assets/images';
import { navbarLinks, experiences, toolImages } from './consts';

const { Title, Text, Paragraph, Link } = Typography

const Home = () => {
  const { scrollY, scrollDirection } = useScroll()
  const { width } = useWindowSize()

  return (
    <div className='container'>
      <div className={`navbar-container centered-flex ${scrollY > 8 ? 'overlay' : ''} ${scrollDirection === 'down' ? 'hide' : ''}`}>
        <div className='content-container py-2'>
          <Row justify='end'>
            <Col>
              <Row gutter={{xs: 12, sm: 12, md: 32}}>
                {navbarLinks.map(link => (
                  <Col key={link.value}>
                    <Link type='secondary' onClick={() => document.getElementById(link.value)?.scrollIntoView({behavior: 'smooth'})}>{link.label}</Link>
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
          <div className='banner-blob-2'/>
          <div className='banner-blob-3'/>
        </div>
        <div className='centered-flex'>
          <div className='content-container'>
            <Animated animation='fade scaled'>
              <Row align='middle' gutter={40} wrap={false}  className='banner-content-container'>
                <Col flex='auto'>
                  <Text type='secondary'>Hello World, I'm</Text>
                  <Title type='secondary' className='banner-title'>Satyo Wicaksana</Title>
                  <Title type='secondary' className='banner-subtitle typography-fade'>FRONT-END DEVELOPER</Title>
                  <Text type='secondary' className='typography-fade'>based in Jakarta, Indonesia. Specialised in web development using React.</Text>
                  <Link href='https://api.whatsapp.com/send?phone=+628111828395' target='_blank'><Button type='primary' size='large' className='mt-4'>Get In Touch 👋</Button></Link>
                </Col>
                <Col span={9} className='banner-illustration-container'>
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
        <div className='experience-curve'/>
        <div className='experience-curve-white'/>
        <Animated animation='fade'>
          <div className='experience-about-card glass p-2'>
            <Row gutter={16} wrap={false}>
              <Col>
                <Avatar src={avatar} className='experience-avatar'/>
              </Col>
              <Col className='desktop'>
                <Text>
                  Hi! 👋 I'm a front-end developer and I have experience mostly in <Text strong>web development</Text> using <Text strong>React</Text>. 😎 That being said, I also have worked on mobile development, and back-end stuff. 👌
                </Text>
              </Col>
              <Col className='mobile'>
                <Text>
                  Hi! 👋 I'm a front-end developer and I have experience mostly in <Text strong>web development</Text> using <Text strong>React</Text>. 😎
                </Text>
              </Col>
            </Row>
          </div>
        </Animated>
        <div className='centered-flex pt-4'>
          <div className='content-container'>
            <Animated animation='fade'>
              <Title className={`mb-4 `}>Experience & Education</Title>
            </Animated>
            <Row align='middle' gutter={16} wrap={width >= windowSizes.lg.min} className='experience-cards-container custom-scrollbar'>
            {experiences.map((experience, i) => (
              <Col key={experience.date} xs={20} md={11} lg={8} className='mb-2 md-mb-0'>
                <Animated animation='fade scaled'>
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
            <Title className='mb-4 md-mb-5'>Tools</Title>
          </Animated>
          <Row wrap={width <= windowSizes.sm.max} gutter={40} justify='space-between'>
            <Col order={width <= windowSizes.sm.max ? 1 : 0}>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Languange</Text>
                  <Text>As a front-end developer, I'm familiar with <Text className='wrap-word'><Link strong className='tools-link-html'><SiHtml5/> HTML</Link>, <Link strong className='tools-link-js'><SiJavascript/> Javascript</Link>, and <Link strong className='tools-link-css'><SiCss3/>CSS</Link>.</Text><br></br>
                  I also prefer to use <Link strong className='tools-link-ts'><SiTypescript/> Typescript</Link> <Text className='wrap-word'>for better development experience.</Text></Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Framework/Library</Text>
                  <Text>So far I used <Link strong className='tools-link-react'><SiReact/> React</Link> in every <Text className='wrap-word'>front-end development work I did.</Text><br></br>
                  Along with <Link strong className='tools-link-redux'><SiRedux/> Redux</Link> <Text className='wrap-word'>for state management.</Text></Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div className='mb-2'>
                  <Text className='typography-fade typography-block'>Styling Tools</Text>
                  <Text>For now, I usually use <Link strong className='tools-link-less'><FaLess/> LESS</Link> <Text className='wrap-word'>for more convenient syntax.</Text><br></br>
                  I also have experience using <Text className='wrap-word'><Link strong className='tools-link-styled-components'><SiStyledComponents/> Styled Component</Link> in some work.</Text><br></br>
                  For CSS framework, <Text className='wrap-word'>I go with  <Link strong className='tools-link-antd'><AiOutlineAntDesign/> Ant Design</Link>.</Text><br></br>It has a lot of components and they are<Text className='word-wrap'>easy to customize.</Text></Text>
                </div>
              </Animated>
              <Animated animation='fade'>
                <div>
                  <Text className='typography-fade typography-block'>Back-End Environment</Text>
                  <Text>I learned back-end development and <Text className='wrap-word'>I'm familiar with <Link strong className='tools-link-node'><SiNodeDotJs/> Node</Link>.</Text><br></br>
                  For DBMS, I learned <Text className='wrap-word'><Link strong className='tools-link-postgre'><SiPostgresql/> PostgreSQL</Link> and <Link strong className='tools-link-mongo'><SiMongodb/> MongoDB</Link>.</Text>
                  </Text>
                </div>
              </Animated>
            </Col>
            <Col className='sm-mb-5'>
              <Animated animation='fade scaled'>
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
                            <div className='tool-circle glass centered-flex p-3 md-p-1'>
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
        <div className='portfolio-background'>
          <div className='portfolio-blob'/>
          <div className='portfolio-blob-2'/>
        </div>
        <div className='content-container py-5'>
          <Animated animation='fade'>
            <Title className='mb-4'>Portfolio</Title>
          </Animated>
            <Row align='middle' wrap={width <= windowSizes.sm.max} gutter={40} className='mb-5'>
              <Col xs={24} md={8} className='sm-mb-2'>
                <Animated animation='fade scaled'>
                  <div className='portfolio-image-container mal-redesign'>
                    <img src={malRedesignMainPage} alt='' className='portfolio-image main'/>
                    <img src={malRedesignDetailPage} alt='' className='portfolio-image detail'/>
                  </div>
                </Animated>
              </Col>
              <Col>
                <Animated animation='fade'>
                  <Title level={5} className='mb-2'>MyAnimeList Redesign</Title>
                </Animated>
                <Animated animation='fade'>
                  <Paragraph>
                    This is a simple website to show <Text className='wrap-word'>what I can do in web development.</Text><br></br>
                    The concept is a redesign of <Link strong href='https://myanimelist.net/' target='_blank'>MyAnimeList</Link>, <Text className='wrap-word'>an anime database</Text> <Text className='wrap-word'>and community website.</Text><br></br>
                    I got the design inspiration from other similar site <Text className='wrap-word'>and from dribbble.</Text><br></br><br></br>
                    I use <Link strong href='https://jikan.docs.apiary.io/' target='_blank'>Jikan API</Link> for the anime data and add some data with web scraping using Node. 😎<br></br><br></br>
                  </Paragraph>
                </Animated>
                <Animated animation='fade'>
                  <Paragraph className='mb-1'>
                    As for now, I'm only done with displaying data in <Link>home page</Link>, <Link>search page</Link>, and <Link>detail page</Link>.<br></br>There's a <Link>register page</Link> but the <Text className='wrap-word'>authorization feature</Text> <Text className='wrap-word'>isn't done yet. 😅</Text><br></br>
                    For now at least you can play with <Text className='wrap-word'>the search page. 😄</Text><br></br><br></br>
                    I'm planning to continue developing at least for authorization and <Text className='wrap-word'>some CRUD action. 💪</Text>
                  </Paragraph>
                </Animated>
              </Col>
            </Row>
            <Row align='middle' gutter={32} wrap={width <= windowSizes.sm.max} className='mb-5'>
              <Col xs={12} md={6} className='sm-mb-2'>
                <Animated animation='fade scaled'>
                  <div className='portfolio-image-container shield-database'>
                    <img src={shieldDatabaseMainPage} alt='' className='portfolio-image main'/>
                    <img src={shieldDatabaseDetailPage} alt='' className='portfolio-image detail'/>
                  </div>
                </Animated>
              </Col>
              <Col>
                <Animated animation='fade'>
                  <Title level={5} className='mb-2'>SHIELD Database</Title>
                </Animated>
                <Animated animation='fade'>
                  <Paragraph className='mb-1'>
                    This is my exercise back when <Text className='wrap-word'>I first learn React.</Text><br></br>
                    I just display data from a free API. 😁
                  </Paragraph>
                </Animated>
              </Col>
            </Row>
          <p></p>
        </div>
      </div>
      <div id='footer' className='footer-container centered-flex'>
        <div className='content-container py-5'>
          <Animated animation='fade'>
            <Row justify='space-between'>
              <Col span={width <= windowSizes.sm.max ? 24 : undefined} order={width <= windowSizes.sm.max ? 1 : 0} className='centered-flex-sm'>
                <Text type='secondary' strong className='typography-fade'>Satyo Wicaksana</Text>
              </Col>
              <Col span={width <= windowSizes.sm.max ? 24 : undefined} className='centered-flex'>
                <Text type='secondary' className='typography-block mb-2'>Let's talk business. 💼</Text>
                <Row gutter={8} className='sm-mb-5'>
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
                      <Link href='https://www.linkedin.com/in/satyowicaksana/' target='_blank'><AiFillLinkedin/></Link>
                    </Title>
                  </Col>
                  <Col>
                    <Title>
                      <Link href='https://www.github.com/satyowicaksana/' target='_blank'><AiFillGithub/></Link>
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