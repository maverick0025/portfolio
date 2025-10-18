export const siteConfig = {
  name: "Satya Ashok Dowluri",
  title: "Software Engineer, Graduate Researcher",
  description: "Portfolio website of Satya Ashok Dowluri",
  accentColor: "#1d4ed8",
  social: {
    email: "dowlurisatyaashok@example.com",
    linkedin: "https://www.linkedin.com/in/satyaashokdowluri/",
    twitter: "https://x.com/Satya_Ashok_",
    github: "https://github.com/maverick0025",
  },
  aboutMe:
    "Homo Sapien on a quest ",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "THESIS: An investigation into the innerworkings of JIT compilers",
      description:
      [
        "This is my research work towards my dissertation for my masters at the University of Kansas",
        "Investigated performance trade-offs in experimental JIT compilation for Python 3.14 and PyPy runtimes.",
        "Extended Python’s JIT by adding a new command-line interface to tune threshold parameters at runtime, enabling fine-grained control over trace compilation and optimizations.",
        "Proposed and implemented a benchmark-specific tuning methodology for JIT thresholds, optimizing execution time, memory usage, and cache performance.",
        "Achieved measurable runtime and resource efficiency improvements, contributing to the understanding of Python’s JIT internals."
      ],
        link: "https://github.com/maveric0025/th",
      skills: ["Python", "PyPy", "Bash Scripting"],
    },
    {
      name: "Fault Tolerant Distributed Search Engine",
      description:
      [
        "Designed and executed a horizontally scalable, fault-tolerant asynchronous distributed search system using a parallel task-based TF-IDF algorithm, ensuring exceptional reliability.",
        "Implemented dynamic leader election and service discovery with Zookeeper, significantly enhancing system resilience and performance.",
        "Built loosely coupled backend components with Java Object serialization for inter-node communication and Protocol Buffers for cross-language compatibility with the frontend.",
        "Deployed this application in Google Cloud, launching an entire cluster distributed across multiple zones",
        "Implemented Autoscaling through which the cluster grows and shrinks depending on the load.",
        "Incorporated Autohealing capability through health checks for automatic recovery from failures and keeps the system stable and available for users at all times.",
        "Leveraged Java, Zookeeper, and JavaScript to deliver a cutting-edge, efficient document search solution."
      ],
        link: "https://github.com/maverick0025/distributedSystemsAndCloudComputingInJava",
      skills: ["Java", "ZooKeeper", "GCP", "HA Proxy", "Kafka", "Protocol Buffer"],
    },
  ],

  experience: [
    {
      company: "University of Kansas",
      title: "Graduate Teaching Assistant",
      dateRange: "Aug 2025 - Present",
      bullets: [
        "Teaching young minds (freshmen) Calculus.",
        "I teach 65 students in this class.",
        "Fun fact: Three of my students are athletes and they play Basketball, Softball, Soccer for the University."
      ],
    },
    {
      company: "Paycom",
      title: "Software Development Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Created an algorithm to extract table data from PDFs, accelerating processing time by over 60x (from 60 minutes to 1 minute) and robustly handling diverse edge cases.",
        "Developed a full-stack web application using .NET Web API and React, providing backend developers with an interface to interact with the algorithm, enhancing user experience and operational efficiency.",
        "Received MVP recognition at Paycom’s Hackathon for creating a project management website that improved internal business operations.",
        "Technologies: C#, .NET Web API, React, JavaScript, MySQL, JWT"
      ],
    },
    {
      company: "University of Kansas",
      title: "Graduate Teaching Assistant",
      dateRange: "Jan 2024 - May 2025",
      bullets: [
        "Assisted in teaching Operating Systems (Dr. Prasad Kulkarni, Dr. Heechul Yun) and Introduction to Logic Design (Dr. David O Johnson) courses, emphasizing foundational computer science concepts.",
        "Led hands-on labs for 120 students, fostering deep understanding of Operating Systems and VHDL principles through engaging, practical exercises.",
        "Provided exceptional mentorship and guidance to students, enhancing their debugging, and problem-solving capabilities."
      ],
    },
    {
      company: "Hatio Innovations Pvt Ltd",
      title: "Software Engineer",
      dateRange: "Jun 2021 - June 2023",
      bullets: [
        "Developed Hatio Payouts by integrating Citibank, ICICI Bank, and Paytm Payments Bank APIs via gRPC, delivering secure, high-performance payment solutions.",
        "Introduced features like Manual Deposit and Withdrawal processes to Coinome, a cryptocurrency broker web application, boosting speed and elevating user satisfaction.",
        "Achieved approximately 10-30x performance improvement by replacing complex multi-table analytical queries with materialized views.",
        "Streamlined design efficiency by reducing feature space by 50KB, crafting custom, functional CSS icons.",
        "Designed and developed the Coinome Operations Admin Portal, addressing critical business needs and enhancing daily workflow.",
        "Served as Scrum Master for 2 months, ensuring timely project delivery, fostering seamless team collaboration, and guiding a shift to test-driven development practices.",
        "Technologies: Java, Spring Boot, PostgreSQL, Protocol Buffers, gRPC, GitLab CI/CD, Docker, Kubernetes"
        // "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
  ],
  education: [
    {
      school: "University of Kansas",
      degree: "Master of Science in Computer Science",
      dateRange: "2023 - 2025",
      achievements: [
        "Graduated Magna Cum Laude with 4.0 GPA",
        "Dean's List all semesters",
        "President of the KU Taekwondo Club",
      ],
    },
    {
      school: "National Institute of Technology Calicut",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      dateRange: "2017 - 2021",
      achievements: [
        "Represented NIT Calicut at the Kerala State Government Exhibition DISHA in 2018 as part of a team working on a career guidance program for class 12 graduates.",
        "Program Manager at the Robotics Interest Group of NITC in 2019, where I achieved a remarkable increase in workshop revenue by approximately 120% compared to 2018 in the ’Introduction to Robotics Workshop’ attended by approximately 300 freshmen.",
        "Class Representative for a group of 80 students and served as a placement representative for 150 students during my junior year of bachelors.",
        "Volunteered in repairing digital appliances damaged by devastating floods in Kerala in 2019.",
        "Senior Executive for workshops during the national level tech fest Tathva in 2018 and mentored numerous mini projects to the freshmen and sophomore college students.",
        "Achieved an exceptional performance by ranking in the top 0.8 percentile among 1,300,000 participants in JEE Mains 2017.",
      ],
    },
    {
      school: "LinkedIn learning",
      degree: "Git for System Administration",
      dateRange: "2021",
      achievements: [
        "https://www.linkedin.com/learning/certificates/1ff538d68c55f5a46bf0dacec38e1ef7ad5f086ee6ac106d3919eda5349134a5"
      ],
    },
  ],
};
