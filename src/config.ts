export const config = {
    developer: {
        name: "Neil",
        fullName: "Neil Gupta",
        title: "Software Engineer",
        description: "Software Engineer at PayPal building agentic commerce experiences. University of Michigan alum with a BS in Computer Science and a minor in Applied Statistics."
    },
    social: {
        github: "nrgupta",
        email: "neilg2001@gmail.com",
        location: "Chicago, IL"
    },
    about: {
        title: "About Me",
        description: [
            "Graduated from the University of Michigan, studying computer science and applied statistics.",
            "Currently a Software Engineer at PayPal, working in Agentic Commerce, powering in-chat checkout on various LLM platforms.",
            "Born and raised in the suburbs of Chicago."
        ]
    },
    experiences: [
        {
            position: "Agentic Commerce",
            company: "PayPal",
            period: "April 2025 - Present",
            location: "Chicago, IL",
            description: "Agentic Commerce: Developed integrations between PayPal checkout and LLM platforms (Perplexity, Copilot, Meta) to enable agentic checkout within their native shopping interfaces.",
            responsibilities: [
                "Built agentic checkout integrations with LLM platforms including Perplexity, Copilot, and Meta",
                "Enabled native in-platform shopping experiences powered by PayPal checkout"
            ],
            technologies: ["Python", "LLM Integrations", "APIs", "Agentic Commerce"],
            logo: "/images/logos/paypal_logo.png"
        },
        {
            position: "Software Engineer",
            company: "PayPal",
            period: "February 2024",
            location: "Chicago, IL",
            description: "Developer Studio: Collaborated on a React application that seamlessly enables PayPal Checkout, streamlining the process of integrating a payment source for thousands of merchants.",
            responsibilities: [
                "Built React application enabling streamlined PayPal Checkout integration for merchants"
            ],
            technologies: ["React", "TypeScript", "PayPal Checkout"],
            logo: "/images/logos/paypal_logo.png"
        },
        {
            position: "ML Intern",
            company: "PayPal",
            period: "June 2023",
            location: "Chicago, IL",
            description: "Built an AI-powered chatbot that provided real-time assistance to the Orders API Slack channel.",
            responsibilities: [
                "Built an AI-powered chatbot for real-time Slack support on the Orders API channel"
            ],
            technologies: ["Python", "Machine Learning", "Chatbots"],
            logo: "/images/logos/paypal_logo.png"
        },
        {
            position: "Software Engineer Intern",
            company: "PayPal",
            period: "May 2022",
            location: "Chicago, IL",
            description: "Software Engineer for the Orders API team. Improved latency of the Create Order API by 40-60 ms. This component is used roughly 8 million times daily.",
            responsibilities: [
                "Improved latency of the Create Order API by 40-60 ms",
                "Worked on a component used roughly 8 million times daily"
            ],
            technologies: ["Java", "APIs", "Performance Optimization"],
            logo: "/images/logos/paypal_logo.png"
        },
        {
            position: "Software Engineer Intern",
            company: "Womply",
            period: "June 2021",
            location: "Remote",
            description: "Used Snowflake and SQL queries to aggregate customer review data and wrote an algorithm to identify negative sentiment. Created search engine through Apache Solr to visualize negative customer review data of over 250,000 companies.",
            responsibilities: [
                "Aggregated customer review data using Snowflake and SQL",
                "Wrote an algorithm to identify negative sentiment",
                "Built an Apache Solr search engine to visualize review data across 250,000+ companies"
            ],
            technologies: ["Snowflake", "SQL", "Apache Solr"],
            logo: "/images/logos/womply_logo.png"
        },
        {
            position: "Project Manager",
            company: "Atlas Digital Consulting",
            period: "March 2021",
            location: "University of Michigan",
            description: "Served as Project Manager for a consulting club through the University of Michigan. Used React to build and enhance a webpage for a company called Cantoo.",
            responsibilities: [
                "Managed a consulting project for a client, Cantoo",
                "Used React to build and enhance the client's webpage"
            ],
            technologies: ["React"],
            logo: "/images/logos/atlas_logo.jpeg"
        },
        {
            position: "Director of Website Development",
            company: "Kappa Theta Pi",
            period: "March 2021",
            location: "University of Michigan",
            description: "Joined a Professional Technology Fraternity through the University of Michigan. Served as Director of Website Development, implementing and updating necessary changes to the chapter website.",
            responsibilities: [
                "Implemented and maintained updates to the chapter website"
            ],
            technologies: ["Web Development"],
            logo: "/images/logos/ktp_logo.png"
        },
        {
            position: "BS Computer Science, Applied Statistics",
            company: "University of Michigan",
            period: "August 2020",
            location: "Ann Arbor, MI",
            description: "Began my undergraduate degree at the University of Michigan. Earned a BS in Computer Science with a Minor in Applied Statistics.",
            responsibilities: [
                "BS in Computer Science with a Minor in Applied Statistics"
            ],
            technologies: ["Computer Science", "Applied Statistics"],
            logo: "/images/logos/umich_logo.png"
        },
        {
            position: "Research Assistant",
            company: "UIC Research Core",
            period: "May 2020",
            location: "Chicago, IL",
            description: "Developed statistical models outlining the relationship between qPCR values and Class level. Computed t-tests and random forest classifiers using R. Trained a model to be nearly 80 percent accurate in identifying class level with various genes.",
            responsibilities: [
                "Developed statistical models relating qPCR values to Class level",
                "Computed t-tests and random forest classifiers using R",
                "Trained a model to ~80% accuracy identifying class level from gene data"
            ],
            technologies: ["R", "Statistics", "Random Forest"],
            logo: "/images/logos/uic_logo.jpeg"
        },
        {
            position: "Software Engineer Intern",
            company: "iManage",
            period: "June 2019",
            location: "Chicago, IL",
            description: "Developed testing functions and user interface modules for the iManage cloud drive using Python, being accessed by over 3000 organizations worldwide.",
            responsibilities: [
                "Developed testing functions and UI modules for the iManage cloud drive",
                "Product accessed by over 3000 organizations worldwide"
            ],
            technologies: ["Python", "UI Development", "Testing"],
            logo: "/images/logos/imanage_logo.png"
        }
    ],
    projects: [
        {
            id: 1,
            title: "abode",
            category: "AI apartment hunter",
            technologies: "Python, AI Agents",
            language: "Python",
            link: "https://github.com/nrgupta/abode",
            demoLink: "https://abode.up.railway.app/",
            image: "/images/projects/abode.png",
            description: "Automated apartment-hunting pipeline that scrapes Zillow, Redfin, and Craigslist, dedupes listings, syncs them to a Google Sheet, and emails a daily digest. Includes a Flask search UI and a swipeable mobile prototype."
        },
        {
            id: 2,
            title: "newsroom",
            category: "Daily news digest bot",
            technologies: "Python, GitHub Actions, NewsAPI",
            language: "Python",
            link: "https://github.com/nrgupta/newsroom",
            image: "/images/projects/newsroom.png",
            description: "Aggregates and dedupes recent headlines from NewsAPI and RSS feeds (NYT, Washington Post, Guardian), then pushes a condensed daily digest straight to your phone via ntfy.sh, fully automated with GitHub Actions."
        },
        {
            id: 3,
            title: "nba-mcp-server",
            category: "NBA betting research agent",
            technologies: "Python, MCP, LLM Tooling",
            language: "Python",
            link: "https://github.com/nrgupta/nba-mcp-server",
            image: "/images/projects/nba-mcp-server.jpeg",
            description: "MCP server that plugs into Claude Desktop to automate NBA betting research — pulling schedules, stats, and odds, scoring value with a custom edge formula, and auto-building parlays with a scheduled email report."
        },
        {
            id: 4,
            title: "stock-prediction",
            category: "Stock price forecasting model",
            technologies: "Jupyter Notebook, Python, Machine Learning",
            language: "Jupyter Notebook",
            link: "https://github.com/nrgupta/stock-prediction",
            image: "/images/projects/stock-prediction.png",
            description: "Jupyter notebook that trains a model on historical stock data to predict closing prices, plotting predicted vs. actual prices to visualize accuracy."
        },
        {
            id: 5,
            title: "TurboMath",
            category: "Timed math-drill game",
            technologies: "HTML, JavaScript, CSS",
            language: "HTML",
            link: "https://github.com/nrgupta/TurboMath",
            image: "/images/projects/turbomath.png",
            description: "Timed math-drill game generating randomized addition, subtraction, multiplication, and division problems across three difficulty levels, with score tracking and a responsive layout."
        },
        {
            id: 6,
            title: "MusicSearch",
            category: "Artist search web app",
            technologies: "HTML, JavaScript, iTunes API",
            language: "HTML",
            link: "https://github.com/nrgupta/MusicSearch",
            description: "Vanilla JS web app for looking up musicians by name or genre via the iTunes Search API, updating results dynamically without a page refresh."
        }
    ],
    contact: {
        email: "neilg2001@gmail.com",
        github: "https://github.com/nrgupta",
        linkedin: "https://www.linkedin.com/in/neil-gupta/",
        twitter: "https://twitter.com/neilgupta1121",
        facebook: "https://www.facebook.com/neil.gupta.566/",
        instagram: "https://www.instagram.com/neilgupta1121/?hl=en"
    },
    skills: {
        develop: {
            title: "BACKEND & DATA",
            description: "Building performant APIs and data-driven systems",
            details: "Improving API performance and building backend systems used at scale, from PayPal's Orders API to Snowflake/Solr-backed data pipelines. Experienced with statistical modeling and ML.",
            tools: ["Python", "Java", "SQL", "Snowflake", "Apache Solr", "R", "Machine Learning"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web development and product integrations",
            details: "Building React applications and integrations that connect payments, checkout, and LLM platforms into seamless user experiences.",
            tools: ["React", "TypeScript", "JavaScript", "APIs", "LLM Integrations"]
        }
    },
    courses: {
        college: [
            {
                code: "EECS 485",
                name: "Web Systems",
                description: "Concepts surrounding web systems, applications, and internet-scale distributed systems. Topics include client/server protocols, security, information retrieval and search engines, scalable data processing, and fault-tolerant systems."
            },
            {
                code: "EECS 376",
                name: "Foundations of Computer Science",
                description: "Introduction to theory of computation. Models of computation: finite state machines, Turing machines. Decidable/undecidable problems. Polynomial time computability, NP-hardness, cryptography."
            },
            {
                code: "EECS 370",
                name: "Computer Organization",
                description: "Basic concepts of computer organization and hardware, instructions, stored-program concept, datapath/control, pipelining, caches, virtual memory, I/O."
            },
            {
                code: "EECS 281",
                name: "Data Structures and Algorithms",
                description: "Algorithm analysis, O-notation, fundamental data structures (lists, stacks, queues, priority queues, hash tables, trees, graphs), searching/sorting, greedy and divide-and-conquer."
            },
            {
                code: "MATH 215",
                name: "Multivariable Calculus",
                description: "Partial derivatives, multiple integrals, vector fields, line/surface integrals, Green/Stokes/Gauss theorems."
            },
            {
                code: "MATH 214",
                name: "Linear Algebra",
                description: "Matrices, systems of equations, determinants, eigenvalues, vector spaces."
            }
        ],
        personal: [
            {
                code: "Quant",
                name: "Algorithmic Trading Like a Pro: Essential Python Course",
                description: "Foundations of algorithmic trading; building and backtesting trading systems in Python."
            },
            {
                code: "Options",
                name: "Akuna Capital Options 101",
                description: "Basics of options trading from a market-maker perspective — pricing, greeks, hedging, risk management."
            }
        ]
    },
    hobbies: [
        {
            title: "Basketball",
            description: "I love to watch and play basketball! I played varsity in high school and am always looking to play!",
            images: ["/images/hobbies/bball1.jpg", "/images/hobbies/b3.jpg", "/images/hobbies/bball2.jpg"]
        },
        {
            title: "Hudl Highlights",
            description: "Check out my basketball game footage and highlights on Hudl.",
            link: "https://www.hudl.com/profile/12053964/Neil-Gupta"
        }
    ]
};
