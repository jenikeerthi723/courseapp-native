const Courses =[
{
   id:"1",
   title:"Web Devlopement",
   image:require('../../assets/course/web.jpg'),
   description:
   "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser",
   price: "₹5000",
   course1:{
      name:"Html",
      link:"https://www.w3schools.com/html/",
      img:"data:image/png;base64,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"
   },
   course2:{
      name:"Css",
      link:"https://www.sololearn.com/learning/1023",
      img:"data:image/png;base64,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"
   },
   course3:{
      name:"Javascript",
      link:"https://www.sololearn.com/learning/1024",
   },
   course4:{
      name:"Php",
      link:"https://www.sololearn.com/learning/1024",
   },

},
{
    id:"2",
    title:"Graphic Designing",
    image:require('../../assets/course/graphic.jpg'),
    description:
    "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience",
    price: "₹3000",
    course1:{
      name:"Photoshop",
      link:"https://app.photoshopeasy.com/buy-now?campaignid=16465017082&adgroupid=134813202460&adid=585777977669&gclid=CjwKCAjwrqqSBhBbEiwAlQeqGmd3vQERb89xQtRBpFW5cYn0RCHl3ztkGVrICSjDMZ6TO1c2jsR6BBoCTlgQAvD_BwE",
   },
   course2:{
      name:"figma",
      link:"https://www.figma.com/",
   },
   course3:{
      name:"Adobe xd",
      link:"https://www.domestika.org/en/courses/software/182-adobe-xd",
   },
   course4:{
      name:"Userinterface",
      link:"https://www.workshopper.com/post/free-ux-ui-courses",
   },

   

 },
 {
    id:"3",
    title:"Coding Fundamentals",
    image:require('../../assets/course/coding.jpg'),
    description:
    "Data Type and Structures. Flow Control Structures (Conditionals and loops) Functional Programming,the process of creating instructions for computers using programming languages. Computer code is used to program the websites, apps, and other technologies we interact with every day.",
    price: "₹1000",
    course1:{
      name:"Java",
      link:"https://www.sololearn.com/learning/1068",
   },
   course2:{
      name:"Python",
      link:"https://www.sololearn.com/learning/1172",
   },
   course3:{
      name:"C++",
      link:"https://www.sololearn.com/learning/1051",
   },
   course4:{
      name:"C",
      link:"https://www.sololearn.com/learning/1089",
   },
 },
 {
    id:"4",
    title:"Ethical Hacking",
    image:require('../../assets/course/ethical.jpg'),
    description:
    "Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization. They use this process to prevent cyberattacks and security breaches by lawfully hacking into the systems and looking for weak points",
    course1:{
      name:"Black Hat Hacker",
      link:"https://www.kaspersky.com/resource-center/threats/black-hat-hacker",
   },
   course2:{
      name:"White Hat Hacker",
      link:"https://www.techtarget.com/searchsecurity/definition/white-hat",
   },
   course3:{
      name:"Linux os",
      link:"https://www.sololearn.com/learning/1024",
   },
   course4:{
      name:"Grey Hat Hacker",
      link:"https://en.wikipedia.org/wiki/Grey_hat",
   },
    price: "₹6000",
 },
 {
    id:"5",
    title:"Testing",
    image:require('../../assets/course/web.jpg'),
    description:
    "Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation",
    course1:{
      name:"Manual",
      link:"https://www.javatpoint.com/manual-testing",
   },
   course2:{
      name:"Automation",
      link:"https://en.wikipedia.org/wiki/Automation",
   },
   course3:{
      name:"Software",
      link:"https://www.guru99.com/software-testing-introduction-importance.html",
   },
   course4:{
      name:"Integrity",
      link:"https://www.hrzone.com/hr-glossary/what-is-integrity-testing",
   },

    price: "₹5000",
 },
];

export default Courses;






