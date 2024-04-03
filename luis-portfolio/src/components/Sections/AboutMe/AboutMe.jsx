import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <div className="about-me">
            {/* Profile Image */}
            <div className="profile-image-container">
                <img src={`${process.env.PUBLIC_URL}/bioimage.png`} alt="Luis Llamas" className="profile-image" />
            </div>

            {/* Bio Section */}
            <div className="bio">
                <h2>About Me</h2>
                <p>
                    Passionate about transforming ideas into reality, I have spearheaded global IT strategies as a transformational leader. With a diverse skill set in technical and managerial roles, I've boosted operational efficiency, enhanced customer satisfaction, and expanded market share across various industries. My journey in technology has been driven by a relentless pursuit of innovation, collaboration, and continuous learning.
                </p>
            </div>

            {/* Professional Highlights */}
            <div className="professional-highlights">
                <h3>Professional Highlights</h3>
                <ul>
                    <li>Championed global IT strategies as a transformational leader, leveraging a diverse skill set in roles such as Director, Manager, Architect, and Sales Engineer to boost operational efficiency, increase customer satisfaction, and expand market share.</li>
                    <li>Formulated innovative Vision Strategies and Roadmaps tailored to client requirements, improving customer satisfaction by 40% and increasing market penetration by 22% through competitor analysis and strategic insights.</li>
                    <li>Technical sales strategies as a Solution Consultant, optimizing the sales lifecycle and delivering exceptional customer outcomes, 10% increase in cross-selling and upselling revenue in the software industry.</li>
                    <li>Drove collaboration initiatives with Channel Partners and Systems Integrators to optimize go-to-market strategies, resulting in a 31% reduction in time-to-market and a 14% increase in customer acquisition.</li>
                    <li>Management of geographically dispersed technical teams, increasing collaboration with internal and external stakeholders; achieved a 12% reduction in project time and a 15% increase in team productivity.</li>
                    <li>Creation of solution workshops, product demos, and POCs; crafted detailed architectural and business process flow diagrams for Fortune 500 companies.</li>
                    <li>Experience in digital transformation, focusing on Site Reliability Engineering, SCRUM methodologies, DevOps, custom web APIs, ELK, MVC, ORM, API Gateways, CI/CD, Git, GitHub, GitLab, and Jenkins pipelines.</li>
                    <li>Program management and project engineering, emphasizing delivery assurance, reporting, and risk mitigation planning. Ensured client readiness and delivered exceptional support throughout the sales cycle.</li>
                    <li>Led cloud initiatives with top vendors (IBM, AWS, Azure, GCP, Digital Ocean, Oracle), steering IaaS, PaaS, SaaS, and Hybrid Cloud models to provide strategic cloud guidance to clients.</li>
                    <li>AI/ML projects on PyTorch and TensorFlow, BERT for sentiment analysis, leveraging Prophet for forecasting accuracy, and applying Fast.ai for predictive analytics, contributing to a 25% revenue growth.</li>
                    <li>Eight years of data warehousing and analytics experience with Oracle Exadata, ETL, Hadoop, and Tableau.</li>
                    <li>IaaS HCL Terraform experience and programming in Python, JavaScript, Node.js, Express.js, jQuery, React, MERN, GRAPHQL, HTML, JSON, and YAML.</li>
                    <li>Server virtualization experience on Power VS, SKYTAP, VMWare, Microsoft Hyper-V, and KVM.</li>
                    <li>Container orchestration solutions on OpenShift and Tanzu platforms have reduced infrastructure costs by 32% and application performance by 22%.</li>
                    <li>Database experience with MSSQL, MySQL, DB2, Oracle SQL, and ORM. I have also worked with NoSQL on Elasticsearch and MongoDB, with Mongoose, Compass, and Atlas.</li>
                    <li>Business Continuity and Disaster Recovery, pioneering the adoption of advanced multi-tier backup technologies across international locations, ensuring seamless operations, and reducing data loss risks by 88%.</li>
                    <li>Secure Network Design and Architecture with Endpoint Detection and Response, Security Information and Event Management Systems, and Computer Security Incident Response Teams. Cryptography, Vulnerability Assessment, SSO, IAM, OWASP, and Pen Testing.</li>
                    <li>Security and network infrastructure, leveraging Cisco, Juniper, Palo Alto, WAZU, and Check Point expertise. Executed SDN, SDWAN, and Load Balancers L4 & L7 on A10, F5, NGINX, and NetScaler.</li>
                    <li>Experience in IT compliance with SOC, GDPR, SOX, PCI, HIPAA, ISO 27001, and NIST.</li>
                    <li>Enhanced system stability and performance through 20 years of hands-on experience with Nagios, PagerDuty, New Relic, Splunk, SolarWinds, Zabbix, Prometheus, Grafana, Elasticsearch, Logstash, and Kibana.</li>
                    <li>Budgeted CapEx and OpEx to drive a 15% increase IT infrastructure efficiency and cost-effectiveness.</li>
                    <li>Desktop and application virtualization experience on Citrix, Microsoft, and VMware platforms.</li>
                    <li>Vast experience with enterprise-class storage devices like Data-Domain, HP EVA, Dell Isilon, and NetApp, optimizing data storage efficiency and accessibility, resulting in a 25% reduction in data retrieval time.</li>
                </ul>

            </div>

            {/* Contact Info */}
            <div className="contact-info">
                <h3>Contact Me</h3>
                <p>Email: <a href="mailto:luis.llamas@maslla.com">luis.llamas@maslla.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/luisellamas" target="_blank" rel="noopener noreferrer">Luis Llamas</a></p>
                <p>GitHub: <a href="https://github.com/maslla100" target="_blank" rel="noopener noreferrer">luisllamas</a></p>
            </div>
        </div>
    );
};

export default AboutMe;
