/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mulkiah",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mulkiah",
    type: "website",
    url: "https://mulkiah.github.io/mulkiah/",
  },
};

//Home Page
const greeting = {
  title: "Mulkiah",
  logo_name: "Mulkiah",
  nickname: "Uki",
  subTitle:
    "A passionate tech enthusiast and researcher trying to solve real world problems through technology.",
  resumeLink:
    "https://drive.google.com/file/d/1sV0uTWZNlJV2EuQ-sT8xA-fQ5xex7P9t/view?usp=sharing",
  portfolio_repository: "https://github.com/mulkiah/Projects",
  githubProfile: "https://github.com/mulkiah",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mulkiah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mulkiah",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mulkiahyasir@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mulkiah.yasir/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  //{
  //  name: "Twitter",
  //  link: "https://twitter.com/theriyasharma_",
  //  fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //  backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  //},
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and Data Science Projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms (Azure and AWS)",
        // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on clouds",
        "⚡ Designing, implementing, and optimizing (cost and performance) cloud architecture",

        //"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/riyasharma24",
    // },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@riya1212",
    // },
    {
      siteName: "StackOverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#345234",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Gadjah Mada",
      subtitle: "Master of Computer Science",
      logo_path: "ugm.jpg",
      alt_name: "ugm",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied machine learning and basic artificial intelligence. My master's thesis is about the use of generative models.",
        "⚡ Apart from this, I worked as a practical assistant for basic programming and software engineering.",
        "⚡ My master's degree is fully funded by The Indonesia Endowment Fund for Education (LPDP).",
      ],
      website_link:
        "https://dcse.fmipa.ugm.ac.id/site/en/computer-science-master-program/",
    },
    {
      title: "Universitas Hasanuddin",
      subtitle: "BSc Mathematics",
      logo_path: "unhas.png",
      alt_name: "unhas",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied mathematics and its applications. My bachelor's thesis is about hypercomplex numbers.",
        "⚡ Apart from this, I worked as a lecture assistant for a basic calculus course.",
        "⚡ I was awarded the PPA Scholarship, a financial scholarship from the Ministry of Research and Higher Education Indonesia given to the top students of the university.",
      ],
      website_link: "https://math.sci.unhas.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cisco Certified CyberOps Associate",
      subtitle: "- Cisco ",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/04737a8e-7939-4074-af70-e31746553e26",
      alt_name: "Cisco Certified CyberOps Associate",
      color_code: "#a6cbf4",
    },
    {
      title: "Professional Data Engineer",
      subtitle: "-  Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.credential.net/95dd56e1-0700-4478-a513-809b11960505",
      alt_name: "GCP Data Engineer",
      color_code: "#f6ada2",
    },
    {
      title: "AWS Certified Solutions Architect Associate",
      subtitle: "- AWS",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.credly.com/badges/01aab008-eeba-4390-a398-3ca402f66ea5/linked_in_profile",
      alt_name: "aws saa",
      color_code: "#F5DD1B",
    },

    {
      title: "AWS Certified Machine Learning Specialty",
      subtitle: "- AWS",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.credly.com/badges/386c3034-2c30-4f52-b47f-e601cee962ae",
      alt_name: "awsml",
      color_code: "#FFFFFF",
    },
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/383dbbe4-bfa0-48fb-92ab-1caf93560799",
      alt_name: "microsoftai",
      color_code: "#FFFFFF",
    },
    {
      title: "German A1",
      subtitle: "- Goethe-Institut Indonesien",
      logo_path: "goethe.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1UPkb-vG0kdn6O3oJtuoK8YfjukYmHu4N/view?usp=sharing",
      alt_name: "goethe",
      color_code: "#1F70C199",
    },
    {
      title: "PCAP - Certified Associate in Python Programming",
      subtitle: "- Python Developer",
      logo_path: "python.jpeg",
      certificate_link:
        "https://www.credly.com/badges/638b3265-c5e7-405c-8d52-21e295a79569?source=linked_in_profile",
      alt_name: "Python",
      color_code: "#D83B0199",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.credly.com/badges/628ca32d-6b9a-4dbb-a46a-849479dcec4a?source=linked_in_profile",
      alt_name: "aws",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft Certified Educator",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/10a20b0d-68ab-4fe6-99fc-b02f44c032d3?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Works, Internship and Volunteership",
  description:
    "I am an IT Enthusiast with a passion for creating efficient and innovative solutions. ",
  header_image_path: "working.png",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "ML Engineer",
          company: "Nomura Research Institute Indonesia",
          company_url: "https://www.nri.co.id/",
          logo_path: "nri_logo.png",
          duration: "Jan 2022 - Mar 2023",
          location: "Remote",
          description:
            "I was working on automating automotive products, which involved implementing automation for process improvements and optimizing pre-sales and post-sales to enhance profits.",
          color: "#0879bf",
        },
        {
          title: "AI Coach",
          company: "Orbit Future Academy",
          company_url: "https://orbitfutureacademy.id/",
          logo_path: "orbit_logo.png",
          duration: "Jul 2021 - Jan 2022",
          location: "Jakarta, Indonesia",
          description:
            "I have taught  Students to identify local/social/global problems and support them to come up with solution using AI.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Full Stack App Developer Intern",
    //       company: "Ameego",
    //       company_url: "https://www.amygo.app/",
    //       logo_path: "amygologo.jpg",
    //       duration: "June 2022 - March 2023",
    //       location: "Hybrid",
    //       description:
    //         "Ameego is a video-led e-commerce application. I have independently created new features, resolved bugs, documented the code, and have created and tested the backend. The tech stack used is- react native, react.js, express.js, node.js, mongoDB, sqlite, git, REST APIs, django, python, and jira. ",
    //       color: "#ee3c26",
    //     },
    //     // {
    //     //   title: "Data Science Intern",
    //     //   company: "Intel Indexer LLC",
    //     //   company_url:
    //     //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //     //   logo_path: "intel_logo.jpg",
    //     //   duration: "Nov 2018 - Dec 2018",
    //     //   location: "Work From Home",
    //     //   description:
    //     //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //     //   color: "#0071C5",
    //     // },
    //   ],
    // },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Bebras Challenge and Workshop Visual Programming",
          company: "UGM and Bebras",
          company_url: "https://bebras.or.id/v3/",
          logo_path: "bebras.jpeg",
          duration: "2019",
          location: "Yogyakarta, Indonesia",
          description:
            "Bebras is an international initiative aiming to promote Informatics (Computer Science, or Computing) and computational thinking among school students at all ages.  ",
          color: "#000000",
        },
        // {
        //   title: "Student Volunteer",
        //   company: "Girl Up Now",
        //   company_url: "https://girlup.org/",
        //   logo_path: "girluplogo.png",
        //   duration: "Aug 2021 - present",
        //   location: "Work From Home",
        //   description:
        //     "Girl Up Now is an affiliation to Girl Up Campaign recognised by the United Nations Foundation. It works towards women empowerment and upliftment. I participated and promoted the workshops and webinars organized by the campaign. I also volunteered to create graphic posters for the campaign.  ",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Student Volunteer",
        //   company: "Visonaries",
        //   company_url: "https://www.facebook.com/visionariesdu/",
        //   logo_path: "visionarieslogo.jpg",
        //   duration: "March 2021 - present",
        //   location: "Work From Home",
        //   description:
        //     "Visionaries is a student initiative which aims to help students who are visually impaired by providing them scribes and audiobooks. I record audiobooks in Hindi and English language. To help the visually impaired students, I have also made a python program that converts any PDF text into an audiobook in seconds.",
        //   color: "#4285F4",
        // },

        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I try to explore new tools and tech by experimenting with them. My best experience is to create Data Science and Artificial Intelligence projects.",
  avatar_image_path: "Projects_top.png",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications.",
  avatar_image_path: "projects_image.svg",
};

const publications = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Contactgirl.png",
    description:
      // "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
      "I am almost on all social media site. You can send me an e-mail, I will reply within 24 hours. I can help you with ML, AI and Cloud.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I like to share whatever I have learned through my blogs.",
    link: "",
    avatar_image_path: "blogs_image.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jakarta, Indonesia",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+62 85397499294",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  publicationsHeader,
  contactPageData,
};
