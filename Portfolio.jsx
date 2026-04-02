import React, { useState } from 'react';
import { BarChart3, Database, TrendingUp, Users, LineChart, PieChart, Code, FileText } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction Model",
      category: "Predictive Analytics",
      icon: TrendingUp,
      description: "Built predictive model to identify at-risk customers 30-45 days before churn",
      tools: ["Python", "SQL", "Tableau"],
      metrics: [
        "Reduced churn by 15%",
        "85% prediction accuracy",
        "Saved $120K in annual revenue"
      ],
      challenge: "High customer churn (18%) with no early warning system to identify at-risk accounts",
      approach: "Created multi-factor health scoring model tracking engagement velocity, support ticket patterns, and usage trends. Built automated alerts for declining accounts.",
      impact: "Enabled proactive intervention 30-45 days before expected churn, reducing portfolio churn from 18% to 12% and achieving 85% retention rate.",
      skills: ["Data Modeling", "SQL Queries", "Dashboard Design", "Statistical Analysis"]
    },
    {
      id: 2,
      title: "Volunteer Engagement Dashboard",
      category: "Data Visualization",
      icon: Users,
      description: "Designed interactive Tableau dashboard tracking 500+ volunteer relationships",
      tools: ["Tableau", "Excel", "CRM Analytics"],
      metrics: [
        "28% increase in retention",
        "40% efficiency improvement",
        "95% stakeholder adoption"
      ],
      challenge: "Leadership lacked visibility into volunteer engagement patterns and couldn't identify retention risks or growth opportunities",
      approach: "Built comprehensive dashboard with KPIs including retention rate, engagement frequency, lifetime value, and cohort analysis. Created automated weekly reports.",
      impact: "Enabled data-driven decision making that increased retention by 28%, improved operational efficiency by 40%, and identified high-value volunteer segments.",
      skills: ["Data Visualization", "KPI Development", "Cohort Analysis", "Executive Reporting"]
    },
    {
      id: 3,
      title: "Database Performance Optimization",
      category: "Database Management",
      icon: Database,
      description: "Optimized database queries and implemented validation processes at FedEx",
      tools: ["SQL", "Database Admin", "Python"],
      metrics: [
        "40% faster query performance",
        "95%+ data accuracy",
        "10hrs/week time savings"
      ],
      challenge: "Slow database query performance and inconsistent data quality affecting operational reporting and decision-making",
      approach: "Conducted comprehensive database audit, identified bottlenecks, optimized complex joins, implemented indexing strategies, and created data validation rules.",
      impact: "Improved query response time by 40%, achieved 95%+ data accuracy through automated validation, and reduced manual reporting time by 10 hours weekly.",
      skills: ["SQL Optimization", "Data Quality", "ETL Processes", "Database Architecture"]
    },
    {
      id: 4,
      title: "Support Ticket Trend Analysis",
      category: "Descriptive Analytics",
      icon: BarChart3,
      description: "Analyzed 5,000+ ServiceNow tickets to identify patterns and reduce volume",
      tools: ["ServiceNow", "Python", "Excel"],
      metrics: [
        "18% ticket volume reduction",
        "25% faster resolution time",
        "30% fewer repeat issues"
      ],
      challenge: "High support ticket volume with no systematic approach to identifying root causes or preventing recurring issues",
      approach: "Extracted 6 months of ticket data, performed pattern analysis on issue categories, resolution times, and user demographics. Identified systemic product issues.",
      impact: "Findings informed product roadmap priorities, reduced ticket volume by 18%, improved resolution time by 25%, and created knowledge base reducing repeat inquiries by 30%.",
      skills: ["Root Cause Analysis", "Data Mining", "Pattern Recognition", "Stakeholder Communication"]
    },
    {
      id: 5,
      title: "Automated Reporting Pipeline",
      category: "Process Automation",
      icon: Code,
      description: "Built Python-based automation to generate weekly performance reports",
      tools: ["Python", "SQL", "Excel"],
      metrics: [
        "90% time reduction",
        "Zero manual errors",
        "Real-time data updates"
      ],
      challenge: "Team spent 10+ hours weekly manually pulling data from multiple sources and creating reports that were often outdated upon distribution",
      approach: "Designed Python scripts to automate data extraction via SQL queries, transform data for analysis, and generate formatted Excel reports with visualizations on schedule.",
      impact: "Reduced manual reporting time from 10 hours to 30 minutes weekly, eliminated human error in calculations, and enabled real-time reporting for 50+ stakeholders.",
      skills: ["Python Programming", "API Integration", "Process Design", "Data Transformation"]
    },
    {
      id: 6,
      title: "Customer Segmentation Analysis",
      category: "Prescriptive Analytics",
      icon: PieChart,
      description: "RFM segmentation model to optimize engagement strategy and reduce attrition",
      tools: ["SQL", "Excel", "CRM Analytics"],
      metrics: [
        "22% attrition reduction",
        "35% satisfaction improvement",
        "Identified 8 upsell opportunities"
      ],
      challenge: "Generic communication strategy not resonating with diverse customer base, leading to disengagement and missed expansion opportunities",
      approach: "Applied RFM (Recency, Frequency, Monetary) segmentation to categorize customers. Created targeted engagement strategies for each segment based on behavior patterns.",
      impact: "Reduced attrition by 22%, improved satisfaction by 35%, identified high-value segments that generated $47K in expansion revenue, and personalized customer journey.",
      skills: ["Segmentation Modeling", "Customer Analytics", "Strategic Planning", "Data-Driven Marketing"]
    }
  ];

  const skills = [
    { name: "SQL", level: 90 },
    { name: "Python", level: 75 },
    { name: "Tableau", level: 85 },
    { name: "Excel", level: 95 },
    { name: "Database Management", level: 90 },
    { name: "Statistical Analysis", level: 80 },
    { name: "Data Visualization", level: 85 },
    { name: "CRM Analytics", level: 90 }
  ];

  const categories = [
    { name: "All Projects", count: 6 },
    { name: "Predictive Analytics", count: 1 },
    { name: "Data Visualization", count: 1 },
    { name: "Database Management", count: 1 },
    { name: "Descriptive Analytics", count: 1 },
    { name: "Process Automation", count: 1 },
    { name: "Prescriptive Analytics", count: 1 }
  ];

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Aminah Ansari</h1>
              <p className="text-xl text-slate-600 mb-4">Data & Systems Analyst Portfolio</p>
              <p className="text-slate-700 max-w-3xl">
                Specializing in data-driven insights, predictive modeling, and process optimization. 
                9+ years transforming complex datasets into actionable business strategies.
              </p>
            </div>
            <div className="flex gap-2">
              <Database className="text-blue-600" size={40} />
              <BarChart3 className="text-green-600" size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow p-4 border border-slate-200">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat.name
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Grid */}
        <div className="lg:col-span-2 space-y-6">
          {filteredProjects.map(project => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="text-xs text-green-700 font-semibold">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 sticky top-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <LineChart className="text-blue-600" size={24} />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {"Predictive Modeling, Data Visualization, SQL Optimization, CRM Analytics, Process Automation, Statistical Analysis".split(', ').map(comp => (
                  <span key={comp} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {React.createElement(selectedProject.icon, { className: "text-blue-600", size: 28 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
                    <span className="text-blue-600 font-medium">{selectedProject.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Challenge</h3>
                  <p className="text-slate-700">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Approach</h3>
                  <p className="text-slate-700">{selectedProject.approach}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Impact</h3>
                  <p className="text-slate-700 mb-4">{selectedProject.impact}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
                        <p className="text-sm text-green-700 font-semibold">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Skills Demonstrated</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map(skill => (
                      <span key={skill} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map(tool => (
                      <span key={tool} className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;