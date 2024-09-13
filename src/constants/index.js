import project1 from "../../public/assets/Vibesync.jpg";
import project2 from "../../public/assets/portfolio.jpg";
import project3 from "../../public/assets/CareerSurf.jpg";
import project4 from "../../public/assets/Todo.jpg";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work,and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Nov 2021 - Jul 2025",
    role: "Bachelor of Technology",
    description: `Pranveer Singh Institute of Technology, Kanpur, UttarPradesh`,
    Content: "I am currently pursuing a B.Tech in Computer Science and Engineering, where I am deeply engaged in studying various aspects of computing. My academic journey has fueled my passion for becoming a software developer."
  },
  {
    year: "Mar 2019 - April 2020",
    role: "Senior Secondary Education (12th Standard)",
    description: `Shanti Dham Sr. Sec. School, Atarra, Uttar Pradesh`,
    Content: "I completed my 12th grade CBSE board studies, reflecting my dedication and academic excellence. Concentrating on the Science stream, I excelled in Physics, Chemistry, and Mathematics. I also enhanced my programming skills with C++ and delved into key computer science concepts."
  },
  {
    year: "Mar 2018 - April 2019",
    role: "Higher School Education or 10th Standard",
    description: `Shanti Dham Sr. Sec. School, Atarra, Uttar Pradesh`,
    Content: "I completed my 10th grade CBSE board studies. This success provided a solid foundation for my transition into the Science stream in higher education."
  },
];

export const PROJECTS = [
  {
    title: "Vibe-Sync",
    image: project1,
    description:
      "Developed a full-stack social media web application featuring real-time chat application. Implemented sentiment analysis in chat conversations to assess user sentiment, leveraging Natural Language Processing (NLP) libraries, TensorFlow, etc.",
    technologies: ["ReactJs", "Node.js","Python","Flask","Socket.io","MongoDB"],
      githubLink: "https://github.com/adityagupta1231/MajorProject-VibeSync"
  },
  {
    title: "Portfolio",
    image: project2,
    description:
      "Developed and designed a personal portfolio website to showcase professional projects, skills, and accomplishments. The site features a responsive design, ensuring optimal viewing across devices.",
    technologies: ["ReactJs", "TailwindCSS", "javascript", "Canvas"],
     githubLink: "https://github.com/adityagupta1231/Project-Career-Surf"
    
  },
  {
    title: "Career-Surf",
    image: project3,
    description:
      "This website provides a comprehensive guidance path for any student who wants to excel in their career. It offers a complete roadmap through the different phases of their course, helping them gain knowledge about various skills and providing the university syllabus.",
    technologies: ["HTML", "CSS", "javascript"],
     githubLink: "https://github.com/adityagupta1231/Project-Career-Surf"
  },
  {
    title: "Todo-List",
    image: project4,
    description:
      "Developed a responsive and user-friendly to-do list application using NodeJs, ExpressJs, Mongodb. Integrated database (MongoDB) for persistent data management, ensuring tasks are saved across sessions and also have a CRUD operation.",
    technologies: ["ReactJs", "CSS", "javascript", "Express", "MongoDB"],
      githubLink: "https://github.com/adityagupta1231/Project-TodoList"
  },
];

export const CONTACT = {
  address: "Station Road Tulsi Nagar, Atarra,Banda ",
  email: "aditya.gup1231@gmail.com",
};
