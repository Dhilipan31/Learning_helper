export const allQuestions = [
  // Data Cloud Fundamentals
  {
    id: 1,
    question: "Which of the following is a primary use case of Salesforce Data Cloud?",
    options: [
      "Managing source code repositories",
      "Unifying customer data from multiple systems",
      "Automating payroll",
      "Building machine learning models without data"
    ],
    correct: 1,
    explanation: "Data Cloud focuses on customer data unification."
  },
  {
    id: 2,
    question: "Data Cloud was previously branded as:",
    options: [
      "Customer 360 Audiences",
      "Tableau CRM",
      "Marketing Cloud Personalization",
      "Einstein Analytics"
    ],
    correct: 0,
    explanation: "It was called Customer 360 Audiences."
  },
  {
    id: 3,
    question: "Which type of data can be ingested into Data Cloud? (Select two)",
    options: [
      "CRM data",
      "Social media interactions",
      "Payroll reports only",
      "IoT data"
    ],
    correct: [0, 3],
    explanation: "CRM + IoT are valid; social can be ingested if integrated."
  },
  {
    id: 4,
    question: "Data Cloud helps prepare organizations for:",
    options: [
      "Payroll processing",
      "AI-driven personalization",
      "Serverless backend coding",
      "ERP management"
    ],
    correct: 1,
    explanation: "Prepares unified data for AI personalization."
  },
  {
    id: 5,
    question: "Which is NOT a Data Cloud capability?",
    options: [
      "Identity Resolution",
      "Data Model Mapping",
      "Email Inbox Filtering",
      "Segment Activation"
    ],
    correct: 2,
    explanation: "Inbox filtering isn't part of Data Cloud."
  },
  // Data Model & Identity Resolution
  {
    id: 6,
    question: "Which subject area represents people in Customer 360 Data Model?",
    options: [
      "Party",
      "Individual",
      "Account",
      "Membership"
    ],
    correct: 1,
    explanation: "Individual represents people in the data model."
  },
  {
    id: 7,
    question: "What is the purpose of a Data Lake Object (DLO)?",
    options: [
      "Secure login authentication",
      "Represent data ingested into Data Cloud",
      "Store compiled code",
      "Manage Trailhead progress"
    ],
    correct: 1,
    explanation: "DLOs represent data ingested into Data Cloud."
  },
  {
    id: 8,
    question: "What is the purpose of an Attribute in Data Cloud?",
    options: [
      "Defines a business metric",
      "Represents a data field mapped to a Data Model object",
      "Stores passwords securely",
      "Holds trailhead badges"
    ],
    correct: 1,
    explanation: "Attributes represent data fields mapped to Data Model objects."
  },
  {
    id: 9,
    question: "Identity Resolution primarily helps with:",
    options: [
      "Combining records across multiple sources into a unified profile",
      "Encrypting passwords",
      "Enforcing login MFA",
      "Visualizing dashboards"
    ],
    correct: 0,
    explanation: "Identity Resolution combines records into unified profiles."
  },
  {
    id: 10,
    question: "Which match key is commonly used in Identity Resolution?",
    options: [
      "Email",
      "Device ID",
      "Phone number",
      "All of the above"
    ],
    correct: 3,
    explanation: "All match keys can be used for identity resolution."
  },
  // Data Ingestion & Integration
  {
    id: 11,
    question: "Which connectors are available for Data Cloud ingestion? (Select two)",
    options: [
      "Salesforce CRM",
      "Snowflake",
      "Windows Registry",
      "FTP/SFTP"
    ],
    correct: [0, 1],
    explanation: "Salesforce CRM and Snowflake are valid connectors."
  },
  {
    id: 12,
    question: "A company needs to ingest daily sales data files. Which ingestion method works best?",
    options: [
      "Manual CSV upload",
      "Scheduled file ingestion",
      "Realtime event stream",
      "Trailhead import"
    ],
    correct: 1,
    explanation: "Scheduled file ingestion is best for daily data files."
  },
  {
    id: 13,
    question: "Which tool is used to map ingested data to the Customer 360 Data Model?",
    options: [
      "Identity Graph",
      "Data Mapper",
      "Tableau",
      "Einstein GPT"
    ],
    correct: 1,
    explanation: "Data Mapper is used to map data to the Customer 360 Data Model."
  },
  {
    id: 14,
    question: "What happens if a field from a source system is not mapped?",
    options: [
      "The ingestion fails",
      "The field is ignored in Data Cloud",
      "The field becomes an attribute automatically",
      "A default value is inserted"
    ],
    correct: 1,
    explanation: "Unmapped fields are ignored in Data Cloud."
  },
  {
    id: 15,
    question: "Which of the following are valid streaming sources for Data Cloud? (Select two)",
    options: [
      "Amazon Kinesis",
      "Kafka",
      "Trailhead modules",
      "Excel files"
    ],
    correct: [0, 1],
    explanation: "Amazon Kinesis and Kafka are valid streaming sources."
  },
  // Calculated Insights
  {
    id: 16,
    question: "What is a Calculated Insight?",
    options: [
      "A predefined Trailhead badge",
      "An aggregation or metric defined from ingested data",
      "A dashboard template",
      "A data ingestion step"
    ],
    correct: 1,
    explanation: "Calculated Insights are aggregations or metrics from ingested data."
  },
  {
    id: 17,
    question: "Which of these is an example of a Calculated Insight?",
    options: [
      "Total lifetime spend per customer",
      "Number of open Trailhead modules",
      "Salesforce license expiry",
      "API request failures"
    ],
    correct: 0,
    explanation: "Total lifetime spend per customer is a Calculated Insight."
  },
  {
    id: 18,
    question: "Where can Calculated Insights be used?",
    options: [
      "In segmentation criteria",
      "In dashboards",
      "In activation workflows",
      "All of the above"
    ],
    correct: 3,
    explanation: "Calculated Insights can be used in all these areas."
  },
  {
    id: 19,
    question: "What type of functions can be used in Calculated Insights?",
    options: [
      "Aggregate functions (SUM, COUNT, AVG)",
      "Encryption algorithms",
      "JavaScript functions",
      "DNS lookups"
    ],
    correct: 0,
    explanation: "Aggregate functions like SUM, COUNT, AVG are used."
  },
  {
    id: 20,
    question: "If a Calculated Insight fails to refresh, what should you check first?",
    options: [
      "If underlying data objects are available and mapped",
      "Trailhead login status",
      "Browser compatibility",
      "Password reset token"
    ],
    correct: 0,
    explanation: "Check if underlying data objects are available and mapped."
  },
  // Segmentation
  {
    id: 21,
    question: "What is the purpose of a Segment in Data Cloud?",
    options: [
      "Grouping customer profiles based on criteria",
      "Splitting data streams",
      "Managing Salesforce users",
      "Splitting Trailhead modules"
    ],
    correct: 0,
    explanation: "Segments group customer profiles based on criteria."
  },
  {
    id: 22,
    question: "Segments can be built using:",
    options: [
      "Attributes",
      "Calculated Insights",
      "Event data",
      "All of the above"
    ],
    correct: 3,
    explanation: "Segments can be built using all these data types."
  },
  {
    id: 23,
    question: "Segments can be refreshed:",
    options: [
      "Only manually",
      "On a scheduled basis",
      "Automatically in real time",
      "B & C"
    ],
    correct: 3,
    explanation: "Segments can be refreshed on schedule or automatically."
  },
  {
    id: 24,
    question: "What is the maximum number of DLOs allowed in a segment query before performance issues occur?",
    options: [
      "5",
      "10",
      "20",
      "Unlimited"
    ],
    correct: 1,
    explanation: "Salesforce recommends keeping it under 10 DLOs."
  },
  {
    id: 25,
    question: "Segments can be activated to which platforms? (Select two)",
    options: [
      "Marketing Cloud",
      "Advertising Platforms (Google, Facebook)",
      "GitHub",
      "Operating Systems"
    ],
    correct: [0, 1],
    explanation: "Marketing Cloud and Advertising Platforms support activation."
  },
  // Activation
  {
    id: 26,
    question: "What does 'Activation' in Data Cloud mean?",
    options: [
      "Deploying apps to production",
      "Sending unified profile data to external systems for campaigns",
      "Encrypting database records",
      "Resetting Salesforce passwords"
    ],
    correct: 1,
    explanation: "Activation sends unified profile data to external systems."
  },
  {
    id: 27,
    question: "Which destinations support activation? (Select two)",
    options: [
      "Marketing Cloud Engagement",
      "Google Ads",
      "Visual Studio Code",
      "SQL Server only"
    ],
    correct: [0, 1],
    explanation: "Marketing Cloud Engagement and Google Ads support activation."
  },
  {
    id: 28,
    question: "Which activation type allows real-time campaign personalization?",
    options: [
      "Batch Activation",
      "Streaming Activation",
      "Identity Graph Activation",
      "Calculated Activation"
    ],
    correct: 1,
    explanation: "Streaming Activation allows real-time personalization."
  },
  {
    id: 29,
    question: "If an activation job fails, which log is best to review?",
    options: [
      "Activation run logs",
      "Identity resolution logs",
      "Trailhead challenge logs",
      "Login history"
    ],
    correct: 0,
    explanation: "Activation run logs provide the best troubleshooting info."
  },
  {
    id: 30,
    question: "Which of these is required before activation?",
    options: [
      "Segments",
      "Calculated Insights",
      "Destination connectors",
      "All of the above"
    ],
    correct: 3,
    explanation: "All components are required for activation."
  },
  // Governance & Security
  {
    id: 31,
    question: "Data Cloud stores customer data in:",
    options: [
      "Salesforce org database",
      "A separate hyperscale data lake",
      "Local Excel files",
      "IoT devices"
    ],
    correct: 1,
    explanation: "Data Cloud uses a separate hyperscale data lake."
  },
  {
    id: 32,
    question: "Which security standards does Data Cloud comply with? (Select two)",
    options: [
      "GDPR",
      "CCPA",
      "Video Game Ratings",
      "DVD Copy Protection"
    ],
    correct: [0, 1],
    explanation: "Data Cloud complies with GDPR and CCPA."
  },
  {
    id: 33,
    question: "How can access be controlled in Data Cloud?",
    options: [
      "By assigning permission sets",
      "By encryption keys only",
      "By disabling login history",
      "By creating Trailhead playgrounds"
    ],
    correct: 0,
    explanation: "Access is controlled by assigning permission sets."
  },
  {
    id: 34,
    question: "What is 'Data Retention Policy' in Data Cloud?",
    options: [
      "Defines how long data is stored before deletion",
      "Defines MFA login requirements",
      "Defines when Trailhead badges expire",
      "Defines segmentation refresh rules"
    ],
    correct: 0,
    explanation: "Data Retention Policy defines data storage duration."
  },
  {
    id: 35,
    question: "Encryption in Data Cloud is provided by:",
    options: [
      "Salesforce Shield",
      "Customer 360 Mapper",
      "Trailhead Modules",
      "Visualforce"
    ],
    correct: 0,
    explanation: "Salesforce Shield provides encryption in Data Cloud."
  },
  // Analytics & Reporting
  {
    id: 36,
    question: "Data Cloud dashboards are primarily built using:",
    options: [
      "Tableau CRM",
      "Trailhead badges",
      "Excel",
      "Slack"
    ],
    correct: 0,
    explanation: "Data Cloud dashboards are built using Tableau CRM."
  },
  {
    id: 37,
    question: "Which metrics are best tracked with Calculated Insights + Dashboards? (Select two)",
    options: [
      "Customer lifetime value",
      "Average order frequency",
      "Salesforce license expiry",
      "Trailhead module completions"
    ],
    correct: [0, 1],
    explanation: "Customer lifetime value and order frequency are key metrics."
  },
  {
    id: 38,
    question: "Which Salesforce tool can visualize Data Cloud Segments?",
    options: [
      "Tableau",
      "Salesforce Reports",
      "Dataloader",
      "Apex Code"
    ],
    correct: 0,
    explanation: "Tableau can visualize Data Cloud Segments."
  },
  {
    id: 39,
    question: "To provide marketers with actionable insights, Data Cloud dashboards can be shared in:",
    options: [
      "Slack",
      "Tableau",
      "Salesforce CRM",
      "All of the above"
    ],
    correct: 3,
    explanation: "Dashboards can be shared in all these platforms."
  },
  {
    id: 40,
    question: "What is the purpose of a Data Cloud 'Explorer'?",
    options: [
      "Explore unified customer profiles",
      "Explore Trailhead content",
      "Explore Salesforce setup menu",
      "Explore GitHub repos"
    ],
    correct: 0,
    explanation: "Data Cloud Explorer explores unified customer profiles."
  },
  // Certification Preparation
  {
    id: 41,
    question: "The Salesforce Data Cloud Consultant certification validates:",
    options: [
      "Your ability to configure Data Cloud features",
      "Your ability to write Apex triggers",
      "Your ability to pass Trailhead challenges",
      "Your ability to configure Heroku apps"
    ],
    correct: 0,
    explanation: "The certification validates Data Cloud configuration abilities."
  },
  {
    id: 42,
    question: "Which type of questions appear in the exam?",
    options: [
      "Multiple choice",
      "True/False",
      "Drag-and-drop",
      "All of the above"
    ],
    correct: 3,
    explanation: "The exam includes all these question types."
  },
  {
    id: 43,
    question: "Recommended study resources for certification include:",
    options: [
      "Salesforce Help Docs",
      "Trailhead Modules",
      "Official Exam Guide",
      "All of the above"
    ],
    correct: 3,
    explanation: "All these resources are recommended for study."
  },
  {
    id: 44,
    question: "Passing score for the exam is approximately:",
    options: [
      "50%",
      "65%",
      "75%",
      "90%"
    ],
    correct: 1,
    explanation: "The passing score is approximately 65%."
  },
  {
    id: 45,
    question: "What is the registration fee for the Data Cloud Consultant exam?",
    options: [
      "$100",
      "$200",
      "$400",
      "Free with Trailhead"
    ],
    correct: 1,
    explanation: "The registration fee is $200."
  },
  // Scenario-based
  {
    id: 46,
    question: "A retail company wants to merge customer data from POS systems and online shopping apps. Which feature is key?",
    options: [
      "Identity Resolution",
      "Tableau",
      "Apex Triggers",
      "Permission Sets"
    ],
    correct: 0,
    explanation: "Identity Resolution merges customer data from multiple sources."
  },
  {
    id: 47,
    question: "A marketer wants to send a personalized email to customers who purchased last month but didn't purchase this month. Which steps apply? (Select two)",
    options: [
      "Build Calculated Insight for purchase dates",
      "Create Segment with criteria",
      "Activate to Marketing Cloud",
      "Write Apex batch job"
    ],
    correct: [0, 1],
    explanation: "Build Calculated Insights and create Segments for this use case."
  },
  {
    id: 48,
    question: "An admin ingested IoT device data but it's not appearing in Data Cloud Explorer. What is most likely missing?",
    options: [
      "Data Mapping",
      "Tableau dashboard",
      "Identity license",
      "Slack integration"
    ],
    correct: 0,
    explanation: "Data Mapping is required for data to appear in Explorer."
  },
  {
    id: 49,
    question: "A company wants to advertise on Facebook using unified customer data. What must be set up?",
    options: [
      "Segment + Facebook Ads Connector + Activation",
      "Salesforce CMS",
      "Visualforce page",
      "Apex REST API"
    ],
    correct: 0,
    explanation: "Segment, Facebook Ads Connector, and Activation are required."
  },
  {
    id: 50,
    question: "Data Cloud can best be described as:",
    options: [
      "A unified data platform that combines data ingestion, identity resolution, segmentation, insights, and activation",
      "A CRM replacement for Salesforce",
      "A payroll processing app",
      "A Trailhead badge generator"
    ],
    correct: 0,
    explanation: "Data Cloud is a unified data platform with multiple capabilities."
  }
]

