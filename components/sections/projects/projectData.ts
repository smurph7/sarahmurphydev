export const projectData = [
  {
    title: 'Suncorp Motor Insurance - APIA',
    description:
      'Recreated a motor insurance sales application with a focus on improving the user experience and simplifying the application process.',
    projectLink:
      'https://motor.apia.com.au/capture-name?productType=comprehensive',
    stack: ['React', 'Redux', 'Jest', 'Java']
  },
  {
    title: 'Sarah Murphy',
    description:
      "A website about me. The one you're on right now. You can check out the source code on Github.",
    githubLink: 'https://github.com/smurph7/sarahmurphydev',
    stack: ['TypeScript', 'Next.js'],
    additionalInfo: {
      images: [
        '/static/sm-logo-500px.png',
        '/static/sarahmurphydev-lighthouse-score.png'
      ]
    }
  },
  {
    title: 'Stitch UI',
    description:
      'A foray into building a performant, accessible & user-friendly component library using Stitches and Radix colors for styling and theming. Still a work in progress.',
    githubLink: 'https://github.com/smurph7/stitch-ui',
    projectLink: 'https://main--618286c4f81e0e004ab0373c.chromatic.com/',
    stack: ['TypeScript', 'Next.js']
  },
  {
    title: 'Jokester',
    description:
      'A fun slackbot that tells jokes when you message it. Uses JokeAPI.',
    githubLink: 'https://github.com/smurph7/jokester-slackbot',
    stack: ['JavaScript', 'Slack Bolt'],
    additionalInfo: {
      text: [
        'Ask Jokester to tell you a joke or use the /joke command',
        'You can optionally add parameters: Any, Misc, Programming, Pun, Spooky, Christmas'
      ],
      images: ['/static/jokester01.png', '/static/jokester02.png']
    }
  },
  {
    title: 'Irish Wealth',
    description: 'Simple charts showing the wealth distribution in Ireland.',
    githubLink: 'https://github.com/smurph7/wealth-distribution-charts',
    projectLink: 'http://wealth-distribution-charts.vercel.app/',
    stack: ['React']
  },
  {
    title: 'Recipes',
    description:
      'A single page application that suggests recipes based on your selected ingredients.',
    projectLink: 'https://recipes.smurph7.vercel.app',
    githubLink: 'https://github.com/smurph7/recipes',
    stack: ['Next.js', 'React', 'React Testing Library']
  },
  {
    title: 'Kubernetes Workshop',
    description:
      'Contributed to this workshop about getting started with Docker, Kubernetes & Service Mesh with cloud deployments.',
    githubLink: 'https://github.com/willgarcia/rotc',
    stack: ['Docker', 'Kubernetes', 'Istio'],
    additionalInfo: {
      text: [
        'I helped to expand on a new section about Service Mesh and added examples of how to use Istio Service Mesh with AWS and Azure.'
      ]
    }
  }
];

export const showcaseProject = {
  showcaseDescription:
    "Murphy's Movies was built with a focus on front-end development and utilisation of APIs, putting together some of the latest skills and libraries I've been learning. I worked using Continuous Integration and Test Driven Development, which helped to design the components as I built them and to detect errors early.",
  title: "Murphy's Movies",
  description:
    'Find trending and upcoming movies, search for a specific title, and save your favourites.',
  seeMoreDetailsLink: 'https://murphys-movies.vercel.app/about',
  githubLink: 'https://github.com/smurph7/movies',
  projectLink: 'https://murphys-movies.vercel.app',
  stack: [
    'Next.js',
    'React Query',
    'React Testing Library',
    'Stitches',
    'Auth 0'
  ]
};
