# Deploy React App to Netlify

At this point in the course, you have spent some time immersed in React and have even created some React apps of your own. React can seem confusing at first, but the good news is that `vite` gives you the tools to build applications from scratch. This guide will show you how to deploy your React app to Netlify while preserving the file structure of your source files.

## Sign up with Netlify

To set up a Netlify project, we need to log into Netlify using a GitHub account. So let's do that now by visiting the Netlify website and [logging in](https://www.netlify.com/).

## Prepare the Repo

You'll need to already have your GitHub repository setup with your application's codebase.

* Netlify will build your website from the `main` branch on GitHub.

  * Note: after deploying with this process, Netlify's Continuous Deployment model will update your live site with subsequent pushes to the `main` branch.

* When using React Router in your application, you will need overwrite Netlify's default behavior in reading your routes. We can do that by adding a simple file to your `public` folder, which will tell Netlify to route all requests back to your `index.html` file.  

  * To do so, add a `_redirects` file to the `public` folder, and add this snippet to it:

      ```txt
        /*  /index.html  200
      ```

  * Check out [Netlify's documentation history `pushState` and single-page apps](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps) for more information.

## Deploy the Site

1. [Import the project](https://app.netlify.com/start) to Netlify.

![Netlify displays options for importing in a project with the option to connect via Github.](./Images/1-Getting-Started.PNG)

2. Select your repository.

![After selecting Github, you can choose the repository to deploy by searching up through the search menu.](./Images/2-Select-Repo.PNG)

* You may need to add access to your repository if it is not automatically discovered by clicking the `Configure the Netlify app on Github` link at the bottom of the import page.

![You can choose to either give access to all repositories or search up specific repository names to gives Netlify access.](./Images/3-Repo-Access.PNG)

3. In the site settings page, you may choose the deployment branch, declare the output directory, and define environment variables.

    * For the branch, select `main`.

    * For the output/Publish directory, select `dist`.

    * To modify environment variables, click `Show advanced` (not necessary for this unit).

    * The remaining properties can be left empty and/or with their default values.

![In the Basic Build settings page, we can specify base directory, publish directory, and more. For this demonstration, select dist for publish directory.](./Images/4-Config.PNG)

4. Click on Deploy.


5. Your Vite app is deployed!

    * Once your site is deployed, you can change your site name at any time by clicking on `Site configuration`; when changing your site name, Netlify will preview your site's new URL.

![You can click on the Site configuration option to update the site name for the Netlify app.](./Images/5-Site-Configuration.PNG)

![After selecting the Site configuration option, click on the Change site name button to update the site name as desired.](./Images/6-Change-Name.PNG)

6. Click on the URL to check that everything looks good.

### Reflection

You have successfully deployed your React application to Netlify with just a few simple steps.

After your project has been imported and deployed, all changes made to the Production Branch (commonly `main`) will result in a Production Deployment.

These instructions can also be found on the [Netlify with Git](https://vitejs.dev/guide/static-deploy.html#netlify-with-git) deployment documentation.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
\


Module 20 Challenge
Due Monday by 11:59pm Points 100 Submitting a text entry box
React Challenge: React Portfolio
Being a web developer means being part of a community. You’ll need a place to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future projects.

Now that you’ve completed multiple projects, your task is to create a portfolio, using your new React skills to help set you apart from other developers whose portfolios don’t use the latest technologies.

For this module challenge, you’ll need to deploy this application to NetlifyLinks to an external site.. Follow the instructions found in activity 27-Evr_Git-Deploy to create a build that you can deploy.

User Story
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
Acceptance Criteria

Explain
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
Mock-Up
The following animation shows the web application's appearance and functionality:

User clicks through About Me, Portfolio, Resume, and Contact sections of the webpage and enters information on Contact page.
Getting Started
The application that you built for this module will help you know where to start when building your portfolio. You’ll use Create React App just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:

A single Header component that appears on multiple pages

A single Navigation component within the header that will be used to render the different sections of your portfolio

A single Project component that will be used multiple times in the Portfolio section

A single Footer component that appears on multiple pages

NOTE
The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few modules.

In the meantime, consider adding your email address and phone number on the Contact page.

Projects
For each project you feature in your portfolio, you should include the following:

An image of the deployed application (either a GIF or a screenshot)

The title of the project

A link to the deployed application

A link to the corresponding GitHub repository

Design
As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

Use mobile-first design.

Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like CoolorsLinks to an external site. or another color scheme generator to help you create something that will stand out.

Make sure the font size is large enough to read and that the colors don't cause eye strain.

Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Application must use React to render content.

Application has a single Header component that appears on multiple pages, with a Navigation component within it that uses react-router-dom to render About Me, Portfolio, Contact, and Resume sections.

Application has a single Project component that’s used multiple times in the Portfolio section.

Application has a single Footer component that appears on multiple pages.

Application must be deployed to Netlify.

Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

Application Quality: 15%
User experience is intuitive and easy to navigate.

User interface style is clean and polished.

Application uses a color scheme other than the default Bootstrap color palette.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project.

NOTE
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Advisor. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.

IMPORTANT
It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo. This applies if you have worked with a peer on an assignment, used code in which you did not author or create sourced from a forum such as Stack Overflow, or you received code outside curriculum content from support staff such as an Instructor, TA, Tutor, or Learning Assistant. This will provide visibility to grading staff of your circumstance in order to avoid flagging your work as plagiarized.

If you are struggling with a Challenge or any aspect of the curriculum, please remember that there are student support services available for you:

Ask the class Slack channel/peer support.

AskBCS Learning Assistants exists in your class Slack application.

Office hours facilitated by your instructional staff before and after each class session.

Tutoring GuidelinesLinks to an external site.—schedule a session in the "Tutor Sessions" section of Bootcampspot - Canvas.

If the above resources are not applicable and you have a need, please reach out to a member of your instructional team, your Student Success Advisor, or submit a support ticket in the Student Support section of your BCS application.


