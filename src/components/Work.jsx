/**
 * @copyright 2024 codewithra's
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Henry Clark - Portfolio',
        tags: ['Development', 'UI'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Bondi Landing Page Website',
        tags: ['Development', 'UI'],
        projectLink: 'https://bondi-landing-page-murex.vercel.app/'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'E-Commerce',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://habashyabdulrahman.github.io/Ecommerce/'
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Modern Portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://habashyabdulrahman-o.web.app/'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Work = () => {
    return (
        <section
            id="work"
            className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work