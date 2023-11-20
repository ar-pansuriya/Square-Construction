// TutorialSection.js
import React, { useEffect } from 'react';
import '../stylesheets/Tutorialsection.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Tutorialsection() {

  useEffect(() => {
    Aos.init();
  }, [])
  const tutorialSteps = [
    {
      title: 'Step 1: Introduction to AI in Construction',
      content: `
            Learn about the basics of artificial intelligence and its applications in the construction industry.
            Understand how AI technologies such as machine learning and computer vision can revolutionize construction processes.
          `,
    },
    {
      title: 'Step 2: Implementing AI in Project Planning',
      content: `
            Explore how AI can enhance project planning processes, from conceptualization to execution.
            Discover tools and techniques for leveraging AI algorithms to optimize project schedules and resource allocation.
          `,
    },
    {
      title: 'Step 3: AI-driven Project Management',
      content: `
            Discover the benefits of using AI for project management, resource allocation, and timeline optimization.
            Learn how AI can analyze project data in real-time, identify potential risks, and suggest mitigation strategies.
          `,
    },
    {
      title: 'Step 4: Smart Construction Equipment',
      content: `
            Dive into the world of smart construction equipment powered by AI.
            Explore how AI algorithms can enhance the efficiency and safety of construction machinery, improving overall project outcomes.
          `,
    },
    {
      title: 'Step 5: Future Trends and Innovations',
      content: `
            Stay ahead of the curve by exploring future trends and innovations in AI-driven construction.
            Learn about emerging technologies and their potential impact on the construction industry.
          `,
    },
    {
      title: 'Step 6: AI-enhanced Safety Protocols',
      content: `
              Explore how AI contributes to enhanced safety protocols in construction.
              Learn about AI-powered sensors and monitoring systems that can identify potential hazards and improve overall job site safety.
            `,
    }
  ];

  return (
    <div className="tutorial-section">
      <h2>Welcome to the Square of AI Construction Tutorial</h2>
      <p>
        In this tutorial, you'll learn how to leverage AI in the construction industry
        and make your projects more efficient and innovative.
      </p>
      <div className="tutorial-cards">
        {tutorialSteps.map((step, index) => (
          <div className="tutorial-card" data-aos='fade-right' key={index}>
            <h3>{step.title}</h3>
            <p>{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
