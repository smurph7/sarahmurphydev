import type { ExperienceData } from './types';

export const experience: ExperienceData[] = [
  {
    company: 'Metcash',
    position: 'Front End Developer at Metcash',
    date: 'August 2020 - January 2022',
    points: [
      "Metcash provides merchandising, operational and marketing support to Australia's most successful independent retail brands including IGA supermarkets. Metcash has developed an online shopping platform for IGA. Our team of three created a headless JAMstack e-commerce environment to gain creative freedom.",
      'Developed a fully functional online shop for IGA Supermarkets in a headless JAMstack e-commerce environment using Next.js, allowing each independent store to provide their own offerings',
      'Implemented Segment Analytics to build a foundation for a personalised shopping experience',
      'Created a responsive site, with improvements in usability, SEO and performance',
      "Worked as the grocery API platform's (based in Ireland) first headless client to understand their APIs and requirements and to identify and fix issues"
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'React Query',
      'React Hooks',
      'Zustand',
      'React Testing Library',
      'Cypress'
    ]
  },
  {
    company: 'ThoughtWorks',
    position: 'Consultant Software Developer at ThoughtWorks',
    date: 'February 2019 - August 2020',
    points: [],
    subprojects: [
      {
        title: 'Service Mesh Research',
        points: [
          'To help the company grow its capabilities, form opinions and develop best practices, I was tasked with researching and then presenting the findings to ThoughtWorks Australia on Service Mesh, which is rapidly becoming the standard for micro-service implementations.'
        ],
        stack: ['Docker', 'Kubernetes', 'Istio', 'AWS']
      },
      {
        title: 'The Australian Greens',
        points: [
          "Analysed the political party's volunteer rostering and scheduling application, which had been developed years before in a now obsolete language AngularJS",
          'Researched solutions and presented the findings to non-technical stakeholders',
          'Created a technical support document with next steps as a starting point for the development team'
        ]
      },
      {
        title: 'Westpac Bank Australia',
        points: [
          'Created a localised experience with a global digital banking platform (10x) and a fraud-prevention platform (FrankieOne) through testing the APIs, allowing Westpac to understand how they could best achieve a Banking as a Service offering',
          'Sole developer of a proof-of-concept mobile banking app used to test the APIs, built with React Native and deployed to both iOS and Android devices throughout development, allowing the broader team to get a feel for the available features',
          'Monitored the stability of APIs using AWS CloudWatch',
          "Provided a gap analysis of the platform's current developer experience with recommendations that were then implemented"
        ],
        stack: ['React Native', 'Jest']
      },
      {
        title: 'Suncorp Insurance',
        points: [
          "Delivered a recreated motor insurance sales application for Suncorp's brand APIA with a focus on improving the user experience",
          'Using Test Driven Development, we created a user-friendly interface which simplified the application process for customers',
          'Worked closely with QAs to identify technical dependencies, prioritise stories, and provide testing support'
        ],
        stack: ['React', 'Redux', 'Jest', 'Java']
      },
      {
        title: 'Level Up',
        points: [
          'LevelUp is a series of classes and workshops for students who want to gain real-world experience. It is a not-for-profit initiative run by ThoughtWorks volunteers.',
          'My role included leading a team of 9 developers, business analysts and an experience designer through building a project whilst focusing on Test Driven Development, Continuous Delivery and Pair Programming',
          'Worked directly with the developers and facilitated workshops, presentations and retrospectives',
          'Received outstanding feedback from the students for my contribution to the leadership of the program'
        ]
      },
      {
        title: 'ThoughtWorks University',
        points: [
          'An immersive learning experience where graduates from around the world meet in India to learn best programming practices, security and consultancy skills whilst delivering an ecommerce project in small teams.',
          'Used agile principles, Test Driven Development, Continuous Integration / Continuous Delivery to improve and add new features to an existing full stack web sales application',
          'Stepped into business and quality analyst roles throughout the project to write stories and test developed features'
        ],
        stack: ['Java', 'JavaScript', 'HTML', 'CSS', 'Jest', 'SQL']
      }
    ]
  },
  {
    company: 'Opportune',
    position: 'Systems Support at Opportune',
    date: 'February 2018 - February 2019',
    points: [
      'As the only IT member of staff at this rapidly evolving start-up, I supported the technology on which the company operates, including an e-learning platform for students, a Customer Relationship Management system for sales and the reporting software that sits behind them',
      'Set up a new course on the e-learning platform, moving students from paper-based to web-based learning activities, and creating a foundation on which future courses were based, making adding new courses faster and more efficient',
      'Tested application readiness for system changes going live',
      'Trained the sales team in the new CRM which increased their productivity',
      'Developed new reports in Looker which greatly increased the efficiency of the admin team and allowed business clients to understand employee progress'
    ],
    stack: [
      'Moodle',
      'Looker',
      'SQL',
      'Pipedrive',
      'SharePoint',
      'Microsoft Office Suite'
    ]
  },
  {
    company: 'IAG',
    position: 'Project Coordinator (Intern) at Insurance Australia Group (IAG)',
    date: 'February - June 2016',
    points: [
      'IAG is an Australian multi-brand insurance company. In this role, I supported the Business Processing Offshoring program with tasks including Risk & Issue documentation & tracking and delivering training to the team on Jira & Confluence. IAG was undergoing selection for their strategic offshore service providers with sites in India and the Philippines and preparing for the transition of business functions.'
    ]
  },
  {
    company: 'University',
    position: 'University of Western Sydney',
    date: '2018',
    points: [],
    subprojects: [
      {
        title: 'B. Business & Commerce (Management)',
        date: 'Completed 2018',
        points: [
          "In the final capstone unit for this course, I worked with Blacktown City Council to investigate how they could help local manufacturers through the analysis of the council's strategies, initiatives, goals and relevant gaps in comparison to similar organisations",
          'Created a benchmarking report with recommended actions and processes to enable the council to better achieve its strategic objectives',
          'Undertook a comprehensive research project which involved interviewing manufacturers throughout Blacktown and creating a report with recommendations on how the council could best help local manufacturers to grow and sustain their businesses'
        ]
      },
      {
        title: 'B. ICT',
        date: 'Completed 2018',
        points: [
          "In the final capstone unit for this course, I worked with a Master's student to build an Android mobile app to help the women from her hometown in India start their own cooking businesses from home",
          "The app could be used to search for cooks by location and users could see each cook's recipes and opening hours, while also providing a way for cooks to update their offerings"
        ],
        stack: ['Android', 'Java', 'PHP', 'SQL']
      }
    ]
  }
];
