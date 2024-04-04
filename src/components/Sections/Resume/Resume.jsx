import React from 'react';
import './Resume.css';


const Resume = () => {
    return (
        <div className="resume-section">
            <h2>Resume</h2>

            {/* Professional Experience */}
            <div className="experience">
                <h3>Professional Experience</h3>
                <strong>Board Director – VP of Technology, Arbitrage Trade Analytics - 10/2022 - present.</strong>
                <p>Notable Accomplishments:</p>
                <ul>
                    <li>Go to Market strategy creation, execution, and penetration. Set company long and short-term goals, vision, and culture. Created offering growth plan and roadmap. Took on employee hiring and retention strategy.</li>
                    <li>Innovated comprehensive IT roadmaps integrating Digital Ocean's cloud capabilities, prioritizing high availability and disaster recovery; utilized agile methodologies in Jira for project management. Optimizing GitHub and Jenkins for CI/CD pipelines across SFO and NYC offices, resulting in 27% faster project completion.</li>
                    <li>Revamped Data & AI Infrastructure with the integration of Cloudflare for enhanced perimeter security, OWASP and Wazuh for security compliance, and the ELK Stack integration for operational intelligence.</li>
                    <li>AI/ML product development roadmap strategies that optimized trade analytics through the utilization of PyTorch/TensorFlow, BERT for sentiment analysis, Prophet for forecasting accuracy, and Fast.ai for predictive analytics.</li>
                </ul>

                <strong>Sr. Cloud Solutions Architect, IBM 10/2014-10/2022.</strong>
                <p>Notable Accomplishments:</p>
                <ul>
                    <li>OPEN GROUP Master Enterprise Architect, specializing in delivering technical solutions across diverse sectors such as aerospace, federal, DoD, automotive, financial, health and life sciences, chemical, oil, and gas, and elite Fortune 500 corporations.</li>
                    <li>Directed cloud migration initiatives for Fortune 500 companies, optimizing technical processes to meet industry compliance standards: increased system reliability by 35% and saved clients over $5M in operating costs.</li>
                    <li>Points of View (POV) engagements encompassing seminars, conferences, and knowledge sharing sessions for audiences, from C-suite executives to engineers.</li>
                    <li>Architected Proof of Concepts (POCs), Proof of Technologies (POTs), and Request for Proposals (RFPs), pivoting from on-premises architectures to fortified cloud modernization paradigms.</li>
                    <li>Professional growth of sales teams, business affiliates, architects, and engineers through dedicated mentoring, training, and coaching initiatives.</li>
                    <li>Digital transformation initiative within the VMware SWAT consortium, driving a 40% increase in sales revenue by automating VMware Cloud Foundation processes and pioneering HCX migration tools.</li>
                    <li>Spearheaded award-winning projects at IBM, showcasing technical expertise and sales understanding, resulting in a 19% boost in revenue and recognition within the industry.</li>
                </ul>

                <strong>Global Technical, PPD. 10/2007-10/2014</strong>
                <p>Management of IT Infrastructure consisting of four core and 77 branch DCs.</p>
                <p>Notable Accomplishments:</p>
                <ul>
                    <li>Streamlined Austin Campus Data Center compliance tours, SOX Compliance Audits, HIPPA, and other Clinical / Pharma / FDA audits.</li>
                    <li>Published, authored/presented DR / HA / Architecture technical documents on PPD's Pharmaceutical, CRO, and Life Sciences business systems.</li>
                    <li>Virtual Desktop Architect for 25,000 Global CRO and pharmaceutical users on Cisco UCS / NetApp Flex Pod hardware and Hyper-V.</li>
                    <li>Technical Architect for deploying CRO Phase 1 clinic telemetry infrastructure, which includes wireless monitoring of over 2,000 patients’ mobile EEG and ECG.</li>
                    <li>Technical Architect for award-winning virtual avatar conference collaboration PPD 3D project with 13,000 global CRO and Life Sciences users.</li>
                    <li>Data Center Services Manager for PPD's Austin campus, managing Linux, Unix, Windows, storage, networking, security, and Database engineers.</li>
                    <li>Global Citrix Chief Architect, expert/team, supervising Citrix Architects worldwide, overseeing 900 virtual life sciences, CRO, and pharma applications located on five global Citrix Farms.</li>
                </ul>

                <strong>Director of IT, Sonic Industries. 09/2001-09/2007.</strong>
                <p>Notable Accomplishments / Projects:</p>
                <ul>
                    <li>IT Director for a staff/contractors 30 plus.</li>
                    <li>Directed an 18% sales increase through a PCI-compliant wireless credit card terminal at every parking stall.</li>
                    <li>Disaster recovery planning, yearly external IT audit to verify IT infrastructure integrity.</li>
                    <li>Designed network connectivity between 103 restaurants and corporate headquarters utilizing Hughes Satellite network, providing music, data, and video.</li>
                    <li>Architect for Point-of-Sale upgrade for monthly remote programming of Restaurant menus and prices from the Corporate Office.</li>
                    <li>Simplified software for daily automated import of all restaurant transactions onto the corporate headquarters accounting system, decreasing expenses and human error.</li>
                    <li>Architected Exchange upgrade, Outlook Anywhere for 4,000 users.</li>
                    <li>Introduced in-house payroll solution for 4,000 employees to reduce ADP payroll costs.</li>
                    <li>MS SharePoint/Project server Architect for new restaurant construction projects.</li>
                    <li>Architected Virtualization of 80% of physical servers utilizing VMWare ESX.</li>
                </ul>

                <strong>Senior Production Engineer II, Dell Computer 01/1996-07/2001</strong>
                <p>Notable Accomplishments:</p>
                <ul>
                    <li>Guided solutions for the production-manufacturing concerning current products and processes.</li>
                    <li>Deployed newly complied custom OS images automatically to systems ordered by customers.</li>
                    <li>Implemented databases and tools to maintain and report on failures.</li>
                    <li>Shell scripts development to provide long-term and long-term production solutions.</li>
                    <li>Website development for engineering training purposes both in English and Spanish.</li>
                </ul>

            </div>

            {/* Education */}
            <div className="education">
                <h3>Education</h3>
                <ul>
                    {/* List educational background */}
                    <li>
                        <strong>Saint Edwards University</strong> - Computer Systems Management
                    </li>
                    <li>
                        <strong>University of Texas</strong> - 24-week Full Stack Developer Bootcamp
                    </li>
                    <li>
                        <strong>University of Texas</strong> - 24-week Data Analytics Bootcamp
                    </li>
                </ul>
            </div>

            {/* Certifications */}
            <div className="certifications">
                <h3>Certifications</h3>
                <ul>
                    {/* List certifications */}
                    <li>The OPEN Group: Master Certified Solutions Architect</li>
                    <li>AWS Certified Solutions Architect</li>
                    <li>Azure Cloud Certified Architect</li>
                    <li>VMWare Double-VCP Network Virtualization/Data Center Virtualization</li>
                    <li>Cisco CCNA</li>
                    <li>Citrix Certified Architect</li>
                    <li>Comptia A+</li>
                    <li>IBM Certified Architect</li>
                    <li>IBM Certified Solution Architect</li>
                    <li>IBM Certified Professional Sales Engineer</li>
                    <li>IBM Cloud Technical Sales Certification</li>
                    <li>IBM Certified Seller</li>
                    <li>IBM Enterprise Design Practitioner</li>
                    {/* Additional certifications */}
                </ul>
            </div>

            {/* Downloadable Resume */}
            <div className="download-resume">
                <h3>Download My Resume</h3>
                <p><a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
                    Download Resume
                </a>
                </p>
            </div>
        </div>
    );
};

export default Resume;
