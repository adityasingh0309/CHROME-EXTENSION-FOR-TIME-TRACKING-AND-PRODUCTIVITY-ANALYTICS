# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

COMPANY: CODTECH IT SOLUTIONS

NAME: ADITYA SINGH

INTERN ID: CT08DG601

DOMAIN: FULL STACK

DURATION: 8 WEEKS

MENTOR: NEELA SANTOSH

DESCRIPTION-
Task 4 involves developing a Chrome extension that tracks the time users spend on different websites and provides detailed productivity analytics based on that collected data. The goal of this project is to help users understand their web browsing habits—distinguishing between productive and unproductive activities—and offer insights that can improve time management and overall productivity.

The core function of the extension is time tracking across websites. When users browse the internet, the extension continuously monitors and records the duration spent on each site. This monitoring captures user activity in real-time and stores the data either locally or on a remote backend server. By compiling this information, the extension forms a comprehensive log of web usage that can be analyzed later. Accurately capturing time requires the extension to detect when users switch between active tabs, open new tabs, or change windows, ensuring it tracks only active usage rather than idle time.

Beyond simple time tracking, the extension incorporates productivity analytics. It classifies websites into categories such as productive, unproductive, or neutral. For example, coding platforms, educational resources, and work-related tools are categorized as productive, while social media, video streaming, or entertainment sites are generally identified as unproductive. This classification enables users to visualize how much time they devote to activities that support their goals versus distractions. The ability to categorize websites helps users reflect on their habits and motivates better web usage behavior.

A significant component of Task 4 is the development of a backend server. The backend facilitates the secure storage and management of user data. It enables persistent tracking across sessions and devices, so users can access their productivity reports regardless of where or when they browse. The backend also serves as an aggregation point for analytics, where raw usage data can be processed, summarized, and formatted into meaningful insights such as weekly or monthly productivity trends. Employing a database system, such as MongoDB or PostgreSQL, the backend efficiently stores time logs, user profiles, and classification schemas. This architecture ensures scalability and data integrity for multiple users.

The dashboard is a key user-facing element of the extension. Designed to be intuitive and responsive, it displays the productivity analytics in an accessible format. Users can visualize their browsing time distributions through charts, pie graphs, or tabular data that highlight productive versus unproductive usage. The dashboard often includes features like weekly reports that enable tracking progress over time, identifying patterns, or noticing improvement areas. This feature helps users stay accountable and maintain their productivity goals by providing continuous feedback and historical comparison.

Additionally, the extension should offer customization options. Users might want to define what constitutes a productive site for their individual workflow or mark certain websites as exceptions. Allowing rule adjustments enhances relevance and personalizes the experience. Moreover, privacy considerations are integral—users’ browsing data must be handled securely, with clear consent and mechanisms to delete or export data.

From a technical perspective, building this extension involves frontend and backend development skills. The frontend, typically created with standard web technologies (HTML, CSS, JavaScript), manages the browser extension interface, collects active tab information, and interacts with the backend API. The background scripts, service workers, or content scripts within the Chrome extension API underpin real-time tracking and event handling. On the backend side, a web server built using frameworks like Node.js with Express, Django, or Flask handles API requests, user authentication, and database operations. Real-time analytics may require asynchronous processing or scheduled batch jobs to compute and update productivity reports regularly.

In essence, Task 4 encapsulates modern full-stack development principles applied to a practical use case enhancing daily productivity. It requires seamless integration between client-side browser APIs and robust backend infrastructure. The final solution empowers users with actionable insights drawn from their digital behavior, fosters self-awareness around time management, and supports better work-life balance by encouraging focused online activity. Successfully completing this task demonstrates proficiency in API integration, data handling, user experience design, and application architecture, making it a valuable project for aspiring full-stack developers.

OUTPUT-

