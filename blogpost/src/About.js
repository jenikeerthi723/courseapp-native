import React from 'react'
import {Accordion} from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation();
  return (
    <div className='About'>
      <p>{t("about")}</p>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>{t("acctitle1")}</Accordion.Header>
          <Accordion.Body>
          {t("accbody1")}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>{t("acctitle2")}</Accordion.Header>
          <Accordion.Body>
          {t("accbody2")} 
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>{t("acctitle3")}</Accordion.Header>
          <Accordion.Body>
          {t("accbody3")}
          </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>
    </div>
  )
}

export default About
