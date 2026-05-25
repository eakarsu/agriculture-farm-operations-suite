import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Low Pesticide Agriculture Source Feature",
    "href": "/features/source-ai-low-pesticide-agriculture",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ai-low-pesticide-agriculture: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Agriculture Assistant Source Feature",
    "href": "/features/source-ai-agriculture-assistant",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAgricultureAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Aquaculture Fish Farm Source Feature",
    "href": "/features/source-ai-aquaculture-fish-farm",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAquacultureFishFarm: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "28 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Beekeeping Apiary Source Feature",
    "href": "/features/source-ai-beekeeping-apiary",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBeekeepingApiary: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "26 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Crop Disease Pest Detection Source Feature",
    "href": "/features/source-ai-crop-disease-pest-detection",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICropDiseasePestDetection: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "12 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Fisheries Aquaculture Manager Source Feature",
    "href": "/features/source-ai-fisheries-aquaculture-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFisheriesAquacultureManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Forestry Timber Management Source Feature",
    "href": "/features/source-ai-forestry-timber-management",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIForestryTimberManagement: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Livestock Health Monitoring Source Feature",
    "href": "/features/source-ai-livestock-health-monitoring",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILivestockHealthMonitoring: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Wind Solar Farm Ops Source Feature",
    "href": "/features/source-ai-wind-solar-farm-ops",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIWindSolarFarmOps: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "31 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Low Pesticide Agriculture Source Feature",
      "AI Agriculture Assistant Source Feature",
      "AI Aquaculture Fish Farm Source Feature",
      "AI Beekeeping Apiary Source Feature",
      "AI Crop Disease Pest Detection Source Feature",
      "AI Fisheries Aquaculture Manager Source Feature",
      "AI Forestry Timber Management Source Feature",
      "AI Livestock Health Monitoring Source Feature",
      "AI Wind Solar Farm Ops Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-low-pesticide-agriculture": {
    "title": "AI Low Pesticide Agriculture Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from ai-low-pesticide-agriculture, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ai-low-pesticide-agriculture: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "25",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-agriculture-assistant": {
    "title": "AI Agriculture Assistant Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIAgricultureAssistant, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAgricultureAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "21",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-aquaculture-fish-farm": {
    "title": "AI Aquaculture Fish Farm Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIAquacultureFishFarm, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAquacultureFishFarm: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "28 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "28",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-beekeeping-apiary": {
    "title": "AI Beekeeping Apiary Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIBeekeepingApiary, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIBeekeepingApiary: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "26 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "26",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-crop-disease-pest-detection": {
    "title": "AI Crop Disease Pest Detection Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICropDiseasePestDetection, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICropDiseasePestDetection: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "12 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "12",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-fisheries-aquaculture-manager": {
    "title": "AI Fisheries Aquaculture Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIFisheriesAquacultureManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFisheriesAquacultureManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "13",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-forestry-timber-management": {
    "title": "AI Forestry Timber Management Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIForestryTimberManagement, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIForestryTimberManagement: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "9",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-livestock-health-monitoring": {
    "title": "AI Livestock Health Monitoring Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AILivestockHealthMonitoring, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILivestockHealthMonitoring: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-wind-solar-farm-ops": {
    "title": "AI Wind Solar Farm Ops Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIWindSolarFarmOps, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIWindSolarFarmOps: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "31 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "31",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Low Pesticide Agriculture Source Feature": {
    "sourceOwners": [
      "ai-low-pesticide-agriculture"
    ],
    "operatingQueues": [
      "Tailwind.Config",
      "Main",
      "Cf Residue Audit Trail",
      "AI Center"
    ],
    "outputs": [
      "AI Low Pesticide Agriculture merged workflow register",
      "AI Low Pesticide Agriculture API and route coverage map",
      "AI Low Pesticide Agriculture AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Agriculture Assistant Source Feature": {
    "sourceOwners": [
      "AIAgricultureAssistant"
    ],
    "operatingQueues": [
      "Open Router Service",
      "AI Results Page",
      "Gap AI Disease Identification Leaf Plant",
      "Gap AI Irrigation Optimization Real Time"
    ],
    "outputs": [
      "AI Agriculture Assistant merged workflow register",
      "AI Agriculture Assistant API and route coverage map",
      "AI Agriculture Assistant AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Aquaculture Fish Farm Source Feature": {
    "sourceOwners": [
      "AIAquacultureFishFarm"
    ],
    "operatingQueues": [
      "AI Biomass Forecast Page",
      "AI Biomass Vision Page",
      "AI Certification Readiness Page",
      "AI Customer Quality Page"
    ],
    "outputs": [
      "AI Aquaculture Fish Farm merged workflow register",
      "AI Aquaculture Fish Farm API and route coverage map",
      "AI Aquaculture Fish Farm AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Beekeeping Apiary Source Feature": {
    "sourceOwners": [
      "AIBeekeepingApiary"
    ],
    "operatingQueues": [
      "AI Beekeeper Mentor Page",
      "AI Beekeeper Schedule Page",
      "AI Customer Quote Page",
      "AI Disease Outbreak Page"
    ],
    "outputs": [
      "AI Beekeeping Apiary merged workflow register",
      "AI Beekeeping Apiary API and route coverage map",
      "AI Beekeeping Apiary AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Crop Disease Pest Detection Source Feature": {
    "sourceOwners": [
      "AICropDiseasePestDetection"
    ],
    "operatingQueues": [
      "Openrouter",
      "Main",
      "AI Advanced",
      "Cf Supply Chain Optimization"
    ],
    "outputs": [
      "AI Crop Disease Pest Detection merged workflow register",
      "AI Crop Disease Pest Detection API and route coverage map",
      "AI Crop Disease Pest Detection AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Fisheries Aquaculture Manager Source Feature": {
    "sourceOwners": [
      "AIFisheriesAquacultureManager"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI Results Store",
      "Agentic Farm",
      "Agentic Farm Manager"
    ],
    "outputs": [
      "AI Fisheries Aquaculture Manager merged workflow register",
      "AI Fisheries Aquaculture Manager API and route coverage map",
      "AI Fisheries Aquaculture Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Forestry Timber Management Source Feature": {
    "sourceOwners": [
      "AIForestryTimberManagement"
    ],
    "operatingQueues": [
      "Agentic Forest Planner",
      "Gap No Labor Scheduling AI For Field",
      "Gap No Vendorsupplier Matching AI Only Telem",
      "Main"
    ],
    "outputs": [
      "AI Forestry Timber Management merged workflow register",
      "AI Forestry Timber Management API and route coverage map",
      "AI Forestry Timber Management AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Livestock Health Monitoring Source Feature": {
    "sourceOwners": [
      "AILivestockHealthMonitoring"
    ],
    "operatingQueues": [
      "AI Tools Page",
      "Gap Agentic",
      "Gap AI Breeding Advisor",
      "Gap AI Disease Risk Assessment"
    ],
    "outputs": [
      "AI Livestock Health Monitoring merged workflow register",
      "AI Livestock Health Monitoring API and route coverage map",
      "AI Livestock Health Monitoring AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Wind Solar Farm Ops Source Feature": {
    "sourceOwners": [
      "AIWindSolarFarmOps"
    ],
    "operatingQueues": [
      "AI Asset Deg Trend Page",
      "AI Blade Inspection Page",
      "AI Curtailment Optimize Page",
      "AI Dispatch Confidence Page"
    ],
    "outputs": [
      "AI Wind Solar Farm Ops merged workflow register",
      "AI Wind Solar Farm Ops API and route coverage map",
      "AI Wind Solar Farm Ops AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-low-pesticide-agriculture": {
    "workItems": [
      {
        "id": "source-ai-low-pesticide-agriculture-work-1",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.tsx"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-work-3",
        "item": "Cf Residue Audit Trail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfResidueAuditTrail.tsx"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-work-4",
        "item": "AI Center",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/AICenter.tsx"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-work-5",
        "item": "AI Response",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/AIResponse.tsx"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-work-6",
        "item": "AI Tool Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/AIToolPage.tsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-low-pesticide-agriculture-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-low-pesticide-agriculture-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-low-pesticide-agriculture-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-low-pesticide-agriculture-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-low-pesticide-agriculture-log-1",
        "message": "Deep-merge feature generated from ai-low-pesticide-agriculture",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-agriculture-assistant": {
    "workItems": [
      {
        "id": "source-ai-agriculture-assistant-work-1",
        "item": "Open Router Service",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/services/openRouterService.js"
      },
      {
        "id": "source-ai-agriculture-assistant-work-2",
        "item": "AI Results Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIResultsPage.jsx"
      },
      {
        "id": "source-ai-agriculture-assistant-work-3",
        "item": "Gap AI Disease Identification Leaf Plant",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx"
      },
      {
        "id": "source-ai-agriculture-assistant-work-4",
        "item": "Gap AI Irrigation Optimization Real Time",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiIrrigationOptimizationRealTime.jsx"
      },
      {
        "id": "source-ai-agriculture-assistant-work-5",
        "item": "Gap AI Market Price Prediction Optimal",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiMarketPricePredictionOptimal.jsx"
      },
      {
        "id": "source-ai-agriculture-assistant-work-6",
        "item": "Gap AI Soil Amendment Recommendation",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiSoilAmendmentRecommendation.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-agriculture-assistant-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-agriculture-assistant-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-agriculture-assistant-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-agriculture-assistant-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-agriculture-assistant-log-1",
        "message": "Deep-merge feature generated from AIAgricultureAssistant",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-agriculture-assistant-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-aquaculture-fish-farm": {
    "workItems": [
      {
        "id": "source-ai-aquaculture-fish-farm-work-1",
        "item": "AI Biomass Forecast Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBiomassForecastPage.js"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-work-2",
        "item": "AI Biomass Vision Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBiomassVisionPage.js"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-work-3",
        "item": "AI Certification Readiness Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICertificationReadinessPage.js"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-work-4",
        "item": "AI Customer Quality Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICustomerQualityPage.js"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-work-5",
        "item": "AI Diver Safety Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDiverSafetyPage.js"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-work-6",
        "item": "AI Environmental Risk Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEnvironmentalRiskPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-aquaculture-fish-farm-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-aquaculture-fish-farm-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-aquaculture-fish-farm-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-aquaculture-fish-farm-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-aquaculture-fish-farm-log-1",
        "message": "Deep-merge feature generated from AIAquacultureFishFarm",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-beekeeping-apiary": {
    "workItems": [
      {
        "id": "source-ai-beekeeping-apiary-work-1",
        "item": "AI Beekeeper Mentor Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBeekeeperMentorPage.js"
      },
      {
        "id": "source-ai-beekeeping-apiary-work-2",
        "item": "AI Beekeeper Schedule Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBeekeeperSchedulePage.js"
      },
      {
        "id": "source-ai-beekeeping-apiary-work-3",
        "item": "AI Customer Quote Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICustomerQuotePage.js"
      },
      {
        "id": "source-ai-beekeeping-apiary-work-4",
        "item": "AI Disease Outbreak Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDiseaseOutbreakPage.js"
      },
      {
        "id": "source-ai-beekeeping-apiary-work-5",
        "item": "AI Equipment Prognostic Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEquipmentPrognosticPage.js"
      },
      {
        "id": "source-ai-beekeeping-apiary-work-6",
        "item": "AI Executive Brief Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIExecutiveBriefPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-beekeeping-apiary-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-beekeeping-apiary-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-beekeeping-apiary-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-beekeeping-apiary-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-beekeeping-apiary-log-1",
        "message": "Deep-merge feature generated from AIBeekeepingApiary",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-beekeeping-apiary-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-crop-disease-pest-detection": {
    "workItems": [
      {
        "id": "source-ai-crop-disease-pest-detection-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/openrouter.js"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-work-3",
        "item": "AI Advanced",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdvanced.jsx"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-work-4",
        "item": "Cf Supply Chain Optimization",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfSupplyChainOptimization.jsx"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-work-5",
        "item": "Gap Community Reports Lacks AI Moderation Clustering",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapCommunityReportsLacksAiModerationClustering.jsx"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-work-6",
        "item": "Gap Farm Management Lacks AI Yield Forecasting Endpoint",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-crop-disease-pest-detection-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-crop-disease-pest-detection-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-crop-disease-pest-detection-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-crop-disease-pest-detection-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-crop-disease-pest-detection-log-1",
        "message": "Deep-merge feature generated from AICropDiseasePestDetection",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-fisheries-aquaculture-manager": {
    "workItems": [
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-2",
        "item": "AI Results Store",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/aiResultsStore.js"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-3",
        "item": "Agentic Farm",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticFarm.js"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-4",
        "item": "Agentic Farm Manager",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticFarmManager.js"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-5",
        "item": "AI Results",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiResults.js"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-work-6",
        "item": "Equipment Maintenance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/equipmentMaintenance.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-fisheries-aquaculture-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-fisheries-aquaculture-manager-log-1",
        "message": "Deep-merge feature generated from AIFisheriesAquacultureManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-forestry-timber-management": {
    "workItems": [
      {
        "id": "source-ai-forestry-timber-management-work-1",
        "item": "Agentic Forest Planner",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticForestPlanner.js"
      },
      {
        "id": "source-ai-forestry-timber-management-work-2",
        "item": "Gap No Labor Scheduling AI For Field",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-labor-scheduling-ai-for-field.js"
      },
      {
        "id": "source-ai-forestry-timber-management-work-3",
        "item": "Gap No Vendorsupplier Matching AI Only Telem",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-vendorsupplier-matching-ai-only-telem.js"
      },
      {
        "id": "source-ai-forestry-timber-management-work-4",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/main.jsx"
      },
      {
        "id": "source-ai-forestry-timber-management-work-5",
        "item": "AI Equipment Maintenance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AIEquipmentMaintenance.jsx"
      },
      {
        "id": "source-ai-forestry-timber-management-work-6",
        "item": "AI Tools Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AIToolsPage.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-forestry-timber-management-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-forestry-timber-management-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-forestry-timber-management-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-forestry-timber-management-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-forestry-timber-management-log-1",
        "message": "Deep-merge feature generated from AIForestryTimberManagement",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-forestry-timber-management-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-livestock-health-monitoring": {
    "workItems": [
      {
        "id": "source-ai-livestock-health-monitoring-work-1",
        "item": "AI Tools Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIToolsPage.js"
      },
      {
        "id": "source-ai-livestock-health-monitoring-work-2",
        "item": "Gap Agentic",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAgentic.jsx"
      },
      {
        "id": "source-ai-livestock-health-monitoring-work-3",
        "item": "Gap AI Breeding Advisor",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiBreedingAdvisor.jsx"
      },
      {
        "id": "source-ai-livestock-health-monitoring-work-4",
        "item": "Gap AI Disease Risk Assessment",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiDiseaseRiskAssessment.jsx"
      },
      {
        "id": "source-ai-livestock-health-monitoring-work-5",
        "item": "Gap AI Economic Forecaster",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiEconomicForecaster.jsx"
      },
      {
        "id": "source-ai-livestock-health-monitoring-work-6",
        "item": "Gap AI Health Anomaly Detector",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiHealthAnomalyDetector.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-livestock-health-monitoring-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-livestock-health-monitoring-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-livestock-health-monitoring-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-livestock-health-monitoring-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-livestock-health-monitoring-log-1",
        "message": "Deep-merge feature generated from AILivestockHealthMonitoring",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-livestock-health-monitoring-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-wind-solar-farm-ops": {
    "workItems": [
      {
        "id": "source-ai-wind-solar-farm-ops-work-1",
        "item": "AI Asset Deg Trend Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAssetDegTrendPage.js"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-work-2",
        "item": "AI Blade Inspection Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBladeInspectionPage.js"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-work-3",
        "item": "AI Curtailment Optimize Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICurtailmentOptimizePage.js"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-work-4",
        "item": "AI Dispatch Confidence Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDispatchConfidencePage.js"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-work-5",
        "item": "AI Draft Work Order Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDraftWorkOrderPage.js"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-work-6",
        "item": "AI Drone Blade Inspection Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDroneBladeInspectionPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-wind-solar-farm-ops-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-wind-solar-farm-ops-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-wind-solar-farm-ops-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-wind-solar-farm-ops-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-wind-solar-farm-ops-log-1",
        "message": "Deep-merge feature generated from AIWindSolarFarmOps",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-low-pesticide-agriculture": {
    "title": "AI Low Pesticide Agriculture Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-low-pesticide-agriculture-entity-1",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-entity-3",
        "name": "Cf Residue Audit Trail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-entity-4",
        "name": "AI Center",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-low-pesticide-agriculture-entity-5",
        "name": "AI Response",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-agriculture-assistant": {
    "title": "AI Agriculture Assistant Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-agriculture-assistant-entity-1",
        "name": "Open Router Service",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-agriculture-assistant-entity-2",
        "name": "AI Results Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-agriculture-assistant-entity-3",
        "name": "Gap AI Disease Identification Leaf Plant",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-agriculture-assistant-entity-4",
        "name": "Gap AI Irrigation Optimization Real Time",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-agriculture-assistant-entity-5",
        "name": "Gap AI Market Price Prediction Optimal",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-aquaculture-fish-farm": {
    "title": "AI Aquaculture Fish Farm Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-aquaculture-fish-farm-entity-1",
        "name": "AI Biomass Forecast Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-entity-2",
        "name": "AI Biomass Vision Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-entity-3",
        "name": "AI Certification Readiness Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-entity-4",
        "name": "AI Customer Quality Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-aquaculture-fish-farm-entity-5",
        "name": "AI Diver Safety Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-beekeeping-apiary": {
    "title": "AI Beekeeping Apiary Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-beekeeping-apiary-entity-1",
        "name": "AI Beekeeper Mentor Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-beekeeping-apiary-entity-2",
        "name": "AI Beekeeper Schedule Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-beekeeping-apiary-entity-3",
        "name": "AI Customer Quote Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-beekeeping-apiary-entity-4",
        "name": "AI Disease Outbreak Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-beekeeping-apiary-entity-5",
        "name": "AI Equipment Prognostic Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-crop-disease-pest-detection": {
    "title": "AI Crop Disease Pest Detection Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-crop-disease-pest-detection-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-entity-3",
        "name": "AI Advanced",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-entity-4",
        "name": "Cf Supply Chain Optimization",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-crop-disease-pest-detection-entity-5",
        "name": "Gap Community Reports Lacks AI Moderation Clustering",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-fisheries-aquaculture-manager": {
    "title": "AI Fisheries Aquaculture Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-fisheries-aquaculture-manager-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-entity-2",
        "name": "AI Results Store",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-entity-3",
        "name": "Agentic Farm",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-entity-4",
        "name": "Agentic Farm Manager",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fisheries-aquaculture-manager-entity-5",
        "name": "AI Results",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-forestry-timber-management": {
    "title": "AI Forestry Timber Management Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-forestry-timber-management-entity-1",
        "name": "Agentic Forest Planner",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-forestry-timber-management-entity-2",
        "name": "Gap No Labor Scheduling AI For Field",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-forestry-timber-management-entity-3",
        "name": "Gap No Vendorsupplier Matching AI Only Telem",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-forestry-timber-management-entity-4",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-forestry-timber-management-entity-5",
        "name": "AI Equipment Maintenance",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-livestock-health-monitoring": {
    "title": "AI Livestock Health Monitoring Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-livestock-health-monitoring-entity-1",
        "name": "AI Tools Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-livestock-health-monitoring-entity-2",
        "name": "Gap Agentic",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-livestock-health-monitoring-entity-3",
        "name": "Gap AI Breeding Advisor",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-livestock-health-monitoring-entity-4",
        "name": "Gap AI Disease Risk Assessment",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-livestock-health-monitoring-entity-5",
        "name": "Gap AI Economic Forecaster",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-wind-solar-farm-ops": {
    "title": "AI Wind Solar Farm Ops Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-wind-solar-farm-ops-entity-1",
        "name": "AI Asset Deg Trend Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-entity-2",
        "name": "AI Blade Inspection Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-entity-3",
        "name": "AI Curtailment Optimize Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-entity-4",
        "name": "AI Dispatch Confidence Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-wind-solar-farm-ops-entity-5",
        "name": "AI Draft Work Order Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "ai-low-pesticide-agriculture": "/features/source-ai-low-pesticide-agriculture",
  "AIAgricultureAssistant": "/features/source-ai-agriculture-assistant",
  "AIAquacultureFishFarm": "/features/source-ai-aquaculture-fish-farm",
  "AIBeekeepingApiary": "/features/source-ai-beekeeping-apiary",
  "AICropDiseasePestDetection": "/features/source-ai-crop-disease-pest-detection",
  "AIFisheriesAquacultureManager": "/features/source-ai-fisheries-aquaculture-manager",
  "AIForestryTimberManagement": "/features/source-ai-forestry-timber-management",
  "AILivestockHealthMonitoring": "/features/source-ai-livestock-health-monitoring",
  "AIWindSolarFarmOps": "/features/source-ai-wind-solar-farm-ops"
};
