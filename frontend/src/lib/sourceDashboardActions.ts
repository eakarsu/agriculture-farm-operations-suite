export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "yield-prediction-market-intel",
    "label": "Yield Prediction Market Intel",
    "description": "Open Yield Prediction Market Intel workflows elevated from AIYieldPredictionMarketIntel.",
    "href": "/yield-prediction",
    "sourceProjects": [
      "AIYieldPredictionMarketIntel"
    ],
    "examples": [
      "Yield Prediction",
      "Crop Market Intel",
      "Harvest Risk Plan"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIAgricultureAssistant",
      "AIAquacultureFishFarm",
      "AIBeekeepingApiary",
      "AICropDiseasePestDetection",
      "AIFisheriesAquacultureManager",
      "AIForestryTimberManagement",
      "AILivestockHealthMonitoring",
      "AIWindSolarFarmOps",
      "ai-low-pesticide-agriculture"
    ],
    "examples": [
      "backend/aiAdvanced",
      "backend/gap_community_reports_lacks_ai_moderation_clustering",
      "backend/gap_farm_management_lacks_ai_yield_forecasting_endpoint",
      "backend/gap_marketplace_expert_consultations_lack_ai_driven_matching",
      "backend/openrouter",
      "backend/routes/ai"
    ],
    "count": 9
  }
];
