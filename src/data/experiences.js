export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Leidos',
    companyLink: 'https://www.leidos.com/',
    period: 'Jul 2018 - Present',
    projects: [
      {
        period: 'Apr 2026 - Present',
        project: 'Secure AI Application IRAD',
        description: 'Sole developer for an air-gapped, secure AI platform application built with .NET, Blazor, and the Microsoft Agent Framework, owning the technical development end-to-end. Shaped user stories and architectural decisions, and led demos to senior stakeholders. Designed and built custom MCP servers and a RAG pipeline, and stood up local LLM infrastructure on AWS EC2 via Ollama.',
        skills: ['.NET', 'Blazor', 'Microsoft Agent Framework', 'RAG', 'MCP', 'Ollama', 'AWS EC2', 'LLMs', 'C#']
      },
      {
        period: 'Feb 2026 - Apr 2026',
        project: 'NATS Database Re-architecture Discovery Phase',
        description: 'Owned the technical delivery of the discovery phase for a NATS database re-architecture initiative, running client workshops to gather requirements and document the existing Azure Functions and App Service architecture, including the external services feeding data into it. Identified that the underlying Azure SQL Database, used by the client to drive Power BI reporting, had become bloated with redundant tables and was suffering from poor performance, and captured this along with other security issues and recommendations in a Discovery Outcome Report to inform the re-architecture.',
        skills: ['Azure Functions', 'Azure App Service', 'Azure SQL Database', 'Technical Writing', 'Security Assessment', 'Requirements Gathering', 'Workshop Facilitation']
      },
      {
        period: 'Nov 2025 - Feb 2026',
        project: 'NATS Legacy Application Migration',
        description: 'Co-led migration of a legacy .NET Framework 4.8/Angular application from VMs to Azure App Service (PaaS). Resolved 600+ compile errors and 270+ test failures, designed asynchronous solutions using Azure Service Bus and WebJobs to resolve timeout issues, and identified security vulnerabilities during pre-production testing.',
        skills: ['.NET Framework', 'C#', 'Entity Framework', 'Azure App Service', 'Azure Service Bus', 'Azure WebJobs', 'IaaS to PaaS Migration', 'NUnit']
      },
      {
        period: 'Oct 2022 - Nov 2025',
        project: 'Metropolitan Police Cloud Integration Solution',
        description: 'Delivered a cloud-based integration layer between Metropolitan Police Command & Control platform and external systems. Developed microservices using C#/.NET, Azure Functions, and Azure Service Bus with resilient messaging patterns. Served as Subject Matter Expert for multiple interfaces, performed code reviews, and produced HLD/LLD documentation within a regulated environment.',
        skills: ['.NET', 'C#', 'Azure Functions', 'Azure Service Bus', 'Azure Key Vault', 'Azure Application Insights', 'Azure SQL Server', 'Microservice Architecture', 'REST API', 'Postman', 'JSON/XML', 'NUnit', 'Moq', 'Terraform', 'Jenkins', 'Ansible']
      },
      {
        period: 'Jul 2018 - Oct 2022',
        project: 'Scottish Government Case Management System',
        description: 'Completed a 4-year Graduate Apprentice Scheme earning a First-Class BSc while working full-time. Developed full-stack microservices with .NET, React, and SQL Server for a live case management system. Acted as React SME, led front-end development, mentored junior engineers, and delivered client demonstrations.',
        skills: ['.NET', 'C#', 'React', 'Redux', 'NUnit', 'Jest', 'SQL Server', 'Microservice Architecture', 'Git', 'TFS', 'Agile/SCRUM']
      }
    ]
  }
];
