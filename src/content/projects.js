import { html, css, js, react, nodeJs, expressJs, mongoDb, tailwindCss, bootstrap } from "../content/badges";
export const projects = [
    {
        name: "Tees For You",
        imagePath: "/assets/projectSnaps/project1a.jpg",
        description: "An E-Commerce website with modern UI to buy T-Shirts. This is my first complete website project.\n (This isn't designed for mobile view yet)",
        githubLink: "https://github.com/renish47/TeesForYou-MiniProject1",
        websiteLink: "https://teesforyou.netlify.app/",
        techStack: [html, css, js]
    },
    {
        name: "Book My Doc",
        imagePath: "/assets/projectSnaps/project2a.jpg",
        description: "A Doctor appointment booking app which provides functionalities to book and manage appointments. This is my first Full-Stack project.",
        githubLink: "https://github.com/renish47/BookMyDoc",
        websiteLink: "https://bookmydoc.netlify.app/",
        techStack: [react, bootstrap, expressJs, mongoDb]
    },
    {
        name: "Portfolio",
        imagePath: "/assets/projectSnaps/project3a.jpg",
        description: "My web portfolio whose design is inspired based on popular Windows-95 operating system's look.",
        githubLink: "https://github.com/renish47/portfolio",
        websiteLink: "https://renishkar-portfolio.netlify.app/",
        techStack: [react, tailwindCss]
    },
    {
        name: "url-sm",
        imagePath: "/assets/projectSnaps/project4a.jpg",
        description: "In this project, I mainly focused on flow of processes like signin, signup, forget password along with OTP verification. Also this website helps to shortern your URL",
        githubLink: "https://github.com/renish47/url-sm",
        websiteLink: "https://url-sm.netlify.app/",
        techStack: [react, tailwindCss, expressJs, mongoDb]
    },
]