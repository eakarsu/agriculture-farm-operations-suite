export const sourceProjectTools = [
  {
    "id": "ai-low-pesticide-agriculture-source-workflow",
    "title": "AI Low Pesticide Agriculture Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from ai-low-pesticide-agriculture.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from ai-low-pesticide-agriculture to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Low Pesticide Agriculture source context",
    "outputLabel": "AI Low Pesticide Agriculture source analysis",
    "signals": [
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/CfResidueAuditTrail",
      "frontend/src/components/AICenter",
      "frontend/src/components/AIResponse",
      "frontend/src/components/AIToolPage",
      "frontend/src/components/Weather/WeatherDetail",
      "frontend/src/components/Treatments/TreatmentDetail"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-ai-tools",
    "title": "AI Low Pesticide Agriculture AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from ai-low-pesticide-agriculture.",
    "defaultPrompt": "Review ai-low-pesticide-agriculture AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Low Pesticide Agriculture AI prompt or tool context",
    "outputLabel": "AI Low Pesticide Agriculture AI tool response",
    "signals": [
      "frontend/tailwind.config.js",
      "frontend/src/main.tsx",
      "frontend/src/pages/CfResidueAuditTrail.tsx",
      "frontend/src/components/AICenter.tsx",
      "frontend/src/components/AIResponse.tsx",
      "frontend/src/components/AIToolPage.tsx",
      "frontend/src/components/Weather/WeatherDetail.tsx",
      "frontend/src/components/Treatments/TreatmentDetail.tsx"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-cf-residue-audit-trail-t7hkw4-exact-ai",
    "title": "AI Low Pesticide Agriculture: Cf Residue Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfResidueAuditTrail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Residue Audit Trail\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Residue Audit Trail donor inputs",
    "outputLabel": "Cf Residue Audit Trail AI response",
    "signals": [
      "Active Ingredient",
      "Application Method",
      "Field Id",
      "Product Trade Name",
      "Rate G AI Per Ha"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-ai-5cuwes-exact-ai",
    "title": "AI Low Pesticide Agriculture: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Detections",
      "Field Id",
      "Health Data",
      "Pest Detections",
      "Weather Data"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-ai-extra-10q8zo-exact-ai",
    "title": "AI Low Pesticide Agriculture: AI Extra",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai_extra.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extra\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extra donor inputs",
    "outputLabel": "AI Extra AI response",
    "signals": [
      "Field Id",
      "Harvest Date",
      "Observation Notes",
      "Observed Symptoms",
      "Soil Observations",
      "Target Pest",
      "Weather Summary"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-cf-residue-audit-trail-16v5eu-exact-ai",
    "title": "AI Low Pesticide Agriculture: Cf Residue Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/cf-residue-audit-trail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Residue Audit Trail\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Residue Audit Trail donor inputs",
    "outputLabel": "Cf Residue Audit Trail AI response",
    "signals": [
      "Active Ingredient",
      "Application Method = 'Broadcast'",
      "Buffer Zone M = Null",
      "Drift Risk Score = Null",
      "Field Id",
      "Humidity Pct = Null",
      "Planned Harvest Date = Null",
      "Product Trade Name = Null"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-ai-crop-rotation-planner-9e4v02-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap AI Crop Rotation Planner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-crop-rotation-planner.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Crop Rotation Planner\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Crop Rotation Planner donor inputs",
    "outputLabel": "Gap AI Crop Rotation Planner AI response",
    "signals": [
      "Field Id",
      "Notes",
      "Plan Year 1",
      "Plan Year 2",
      "Plan Year 3",
      "Plan Year 4",
      "Prev Crop = Null",
      "Years = 4"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-ai-pest-photo-classifier-7f6n7n-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap AI Pest Photo Classifier",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-pest-photo-classifier.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Pest Photo Classifier\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Pest Photo Classifier donor inputs",
    "outputLabel": "Gap AI Pest Photo Classifier AI response",
    "signals": [
      "Crop = ''",
      "Description = ''",
      "Field Id = Null",
      "Image Url = ''"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-ai-sensor-anomaly-8iy54w-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap AI Sensor Anomaly",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-sensor-anomaly.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Sensor Anomaly\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Sensor Anomaly donor inputs",
    "outputLabel": "Gap AI Sensor Anomaly AI response",
    "signals": [
      "Field Id",
      "Field Id = Null",
      "Metric",
      "Sensor Id",
      "Window Hours = 72",
      "Zthresh = 2.5"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-ai-treatment-efficacy-score-17ened-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap AI Treatment Efficacy Score",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-treatment-efficacy-score.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Treatment Efficacy Score\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Treatment Efficacy Score donor inputs",
    "outputLabel": "Gap AI Treatment Efficacy Score AI response",
    "signals": [
      "Treatment Id",
      "Window Days = 21"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-ai-weather-impact-forecast-tygts3-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap AI Weather Impact Forecast",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-weather-impact-forecast.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Weather Impact Forecast\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Weather Impact Forecast donor inputs",
    "outputLabel": "Gap AI Weather Impact Forecast AI response",
    "signals": [
      "Active Ingredient = Null",
      "Field Id",
      "Hour Of Day = New Date().Get Hours()",
      "Pesticide Id = Null"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-nonai-image-upload-wqhfwk-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap Nonai Image Upload",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-image-upload.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Image Upload\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Image Upload donor inputs",
    "outputLabel": "Gap Nonai Image Upload AI response",
    "signals": [
      "backend/routes/gap-nonai-image-upload.js"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-nonai-multi-tenant-farms-dh3p9n-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap Nonai Multi Tenant Farms",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-multi-tenant-farms.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Multi Tenant Farms\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Multi Tenant Farms donor inputs",
    "outputLabel": "Gap Nonai Multi Tenant Farms AI response",
    "signals": [
      "backend/routes/gap-nonai-multi-tenant-farms.js"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-nonai-notifications-1kxzqj-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap Nonai Notifications",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-notifications.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Notifications\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Notifications donor inputs",
    "outputLabel": "Gap Nonai Notifications AI response",
    "signals": [
      "backend/routes/gap-nonai-notifications.js"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-nonai-offline-sync-plluzq-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap Nonai Offline Sync",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-offline-sync.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Offline Sync\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Offline Sync donor inputs",
    "outputLabel": "Gap Nonai Offline Sync AI response",
    "signals": [
      "backend/routes/gap-nonai-offline-sync.js"
    ]
  },
  {
    "id": "ai-low-pesticide-agriculture-gap-nonai-weather-providers-1rz8ip-exact-ai",
    "title": "AI Low Pesticide Agriculture: Gap Nonai Weather Providers",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-weather-providers.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Weather Providers\" from ai-low-pesticide-agriculture. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Weather Providers donor inputs",
    "outputLabel": "Gap Nonai Weather Providers AI response",
    "signals": [
      "backend/routes/gap-nonai-weather-providers.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-source-workflow",
    "title": "AI Agriculture Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIAgricultureAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIAgricultureAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Agriculture Assistant source context",
    "outputLabel": "AI Agriculture Assistant source analysis",
    "signals": [
      "backend/services/openRouterService",
      "frontend/src/pages/AIResultsPage",
      "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant",
      "frontend/src/pages/GapAiIrrigationOptimizationRealTime",
      "frontend/src/pages/GapAiMarketPricePredictionOptimal",
      "frontend/src/pages/GapAiSoilAmendmentRecommendation",
      "frontend/src/pages/GapAiWeatherBasedRiskAlerts",
      "frontend/src/pages/GapEquipmentTractorMaintenanceTracking"
    ]
  },
  {
    "id": "ai-agriculture-assistant-ai-tools",
    "title": "AI Agriculture Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIAgricultureAssistant.",
    "defaultPrompt": "Review AIAgricultureAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Agriculture Assistant AI prompt or tool context",
    "outputLabel": "AI Agriculture Assistant AI tool response",
    "signals": [
      "backend/services/openRouterService.js",
      "frontend/src/pages/AIResultsPage.jsx",
      "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx",
      "frontend/src/pages/GapAiIrrigationOptimizationRealTime.jsx",
      "frontend/src/pages/GapAiMarketPricePredictionOptimal.jsx",
      "frontend/src/pages/GapAiSoilAmendmentRecommendation.jsx",
      "frontend/src/pages/GapAiWeatherBasedRiskAlerts.jsx",
      "frontend/src/pages/GapEquipmentTractorMaintenanceTracking.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-disease-identification-leaf-plant-uotwl4-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Disease Identification Leaf Plant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Disease Identification Leaf Plant\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Disease Identification Leaf Plant donor inputs",
    "outputLabel": "Gap AI Disease Identification Leaf Plant AI response",
    "signals": [
      "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-irrigation-optimization-real-time-1stpjd-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Irrigation Optimization Real Time",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiIrrigationOptimizationRealTime.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Irrigation Optimization Real Time\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Irrigation Optimization Real Time donor inputs",
    "outputLabel": "Gap AI Irrigation Optimization Real Time AI response",
    "signals": [
      "frontend/src/pages/GapAiIrrigationOptimizationRealTime.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-market-price-prediction-optimal-1soz5g-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Market Price Prediction Optimal",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiMarketPricePredictionOptimal.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Market Price Prediction Optimal\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Market Price Prediction Optimal donor inputs",
    "outputLabel": "Gap AI Market Price Prediction Optimal AI response",
    "signals": [
      "frontend/src/pages/GapAiMarketPricePredictionOptimal.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-soil-amendment-recommendation-1ybuxa-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Soil Amendment Recommendation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiSoilAmendmentRecommendation.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Soil Amendment Recommendation\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Soil Amendment Recommendation donor inputs",
    "outputLabel": "Gap AI Soil Amendment Recommendation AI response",
    "signals": [
      "frontend/src/pages/GapAiSoilAmendmentRecommendation.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-weather-based-risk-alerts-4fpwn4-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Weather Based Risk Alerts",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiWeatherBasedRiskAlerts.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Weather Based Risk Alerts\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Weather Based Risk Alerts donor inputs",
    "outputLabel": "Gap AI Weather Based Risk Alerts AI response",
    "signals": [
      "frontend/src/pages/GapAiWeatherBasedRiskAlerts.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-marketplace-bridge-grain-elevators-commodity-1a61zu-exact-ai",
    "title": "AI Agriculture Assistant: Gap Marketplace Bridge Grain Elevators Commodity",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapMarketplaceBridgeGrainElevatorsCommodity.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Marketplace Bridge Grain Elevators Commodity\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Marketplace Bridge Grain Elevators Commodity donor inputs",
    "outputLabel": "Gap Marketplace Bridge Grain Elevators Commodity AI response",
    "signals": [
      "frontend/src/pages/GapMarketplaceBridgeGrainElevatorsCommodity.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-sustainability-scoring-carbon-credits-water-1141o0-exact-ai",
    "title": "AI Agriculture Assistant: Gap Sustainability Scoring Carbon Credits Water",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapSustainabilityScoringCarbonCreditsWater.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Sustainability Scoring Carbon Credits Water\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Sustainability Scoring Carbon Credits Water donor inputs",
    "outputLabel": "Gap Sustainability Scoring Carbon Credits Water AI response",
    "signals": [
      "frontend/src/pages/GapSustainabilityScoringCarbonCreditsWater.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-sustainability-score-page-15f6gn-exact-ai",
    "title": "AI Agriculture Assistant: Sustainability Score Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/SustainabilityScorePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability Score Page\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability Score Page donor inputs",
    "outputLabel": "Sustainability Score Page AI response",
    "signals": [
      "frontend/src/pages/SustainabilityScorePage.jsx"
    ]
  },
  {
    "id": "ai-agriculture-assistant-ai-routes-13bpir-exact-ai",
    "title": "AI Agriculture Assistant: AI Routes",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiRoutes.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Routes\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Routes donor inputs",
    "outputLabel": "AI Routes AI response",
    "signals": [
      "Commodity",
      "Crop Type",
      "Crops",
      "Current Severity = 'Medium'",
      "Farm Summary",
      "Farm Type",
      "Field Id",
      "Forecast"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-disease-identification-leaf-plant-b95qk2-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Disease Identification Leaf Plant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ai_disease_identification_leaf_plant.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Disease Identification Leaf Plant\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Disease Identification Leaf Plant donor inputs",
    "outputLabel": "Gap AI Disease Identification Leaf Plant AI response",
    "signals": [
      "backend/routes/gap_ai_disease_identification_leaf_plant.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-irrigation-optimization-real-time-1jy9wo-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Irrigation Optimization Real Time",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ai_irrigation_optimization_real_time.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Irrigation Optimization Real Time\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Irrigation Optimization Real Time donor inputs",
    "outputLabel": "Gap AI Irrigation Optimization Real Time AI response",
    "signals": [
      "backend/routes/gap_ai_irrigation_optimization_real_time.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-market-price-prediction-optimal-1ebba0-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Market Price Prediction Optimal",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ai_market_price_prediction_optimal.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Market Price Prediction Optimal\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Market Price Prediction Optimal donor inputs",
    "outputLabel": "Gap AI Market Price Prediction Optimal AI response",
    "signals": [
      "backend/routes/gap_ai_market_price_prediction_optimal.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-soil-amendment-recommendation-1etnns-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Soil Amendment Recommendation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ai_soil_amendment_recommendation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Soil Amendment Recommendation\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Soil Amendment Recommendation donor inputs",
    "outputLabel": "Gap AI Soil Amendment Recommendation AI response",
    "signals": [
      "backend/routes/gap_ai_soil_amendment_recommendation.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-gap-ai-weather-based-risk-alerts-19z5yq-exact-ai",
    "title": "AI Agriculture Assistant: Gap AI Weather Based Risk Alerts",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ai_weather_based_risk_alerts.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Weather Based Risk Alerts\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Weather Based Risk Alerts donor inputs",
    "outputLabel": "Gap AI Weather Based Risk Alerts AI response",
    "signals": [
      "backend/routes/gap_ai_weather_based_risk_alerts.js"
    ]
  },
  {
    "id": "ai-agriculture-assistant-sustainability-score-t04wb5-exact-ai",
    "title": "AI Agriculture Assistant: Sustainability Score",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/sustainabilityScore.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability Score\" from AIAgricultureAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability Score donor inputs",
    "outputLabel": "Sustainability Score AI response",
    "signals": [
      "backend/routes/sustainabilityScore.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-source-workflow",
    "title": "AI Aquaculture Fish Farm Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIAquacultureFishFarm.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIAquacultureFishFarm to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Aquaculture Fish Farm source context",
    "outputLabel": "AI Aquaculture Fish Farm source analysis",
    "signals": [
      "frontend/src/pages/AIBiomassForecastPage",
      "frontend/src/pages/AIBiomassVisionPage",
      "frontend/src/pages/AICertificationReadinessPage",
      "frontend/src/pages/AICustomerQualityPage",
      "frontend/src/pages/AIDiverSafetyPage",
      "frontend/src/pages/AIEnvironmentalRiskPage",
      "frontend/src/pages/AIEscapeDetectPage",
      "frontend/src/pages/AIExecutiveBriefPage"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-tools",
    "title": "AI Aquaculture Fish Farm AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIAquacultureFishFarm.",
    "defaultPrompt": "Review AIAquacultureFishFarm AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Aquaculture Fish Farm AI prompt or tool context",
    "outputLabel": "AI Aquaculture Fish Farm AI tool response",
    "signals": [
      "frontend/src/pages/AIBiomassForecastPage.js",
      "frontend/src/pages/AIBiomassVisionPage.js",
      "frontend/src/pages/AICertificationReadinessPage.js",
      "frontend/src/pages/AICustomerQualityPage.js",
      "frontend/src/pages/AIDiverSafetyPage.js",
      "frontend/src/pages/AIEnvironmentalRiskPage.js",
      "frontend/src/pages/AIEscapeDetectPage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-biomass-forecast-page-1pm1vn-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Biomass Forecast Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBiomassForecastPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Biomass Forecast Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Biomass Forecast Page donor inputs",
    "outputLabel": "AI Biomass Forecast Page AI response",
    "signals": [
      "frontend/src/pages/AIBiomassForecastPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-biomass-vision-page-15g1os-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Biomass Vision Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBiomassVisionPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Biomass Vision Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Biomass Vision Page donor inputs",
    "outputLabel": "AI Biomass Vision Page AI response",
    "signals": [
      "frontend/src/pages/AIBiomassVisionPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-certification-readiness-page-1yi0op-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Certification Readiness Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICertificationReadinessPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Certification Readiness Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Certification Readiness Page donor inputs",
    "outputLabel": "AI Certification Readiness Page AI response",
    "signals": [
      "frontend/src/pages/AICertificationReadinessPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-customer-quality-page-jkylf-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Customer Quality Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICustomerQualityPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Customer Quality Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Customer Quality Page donor inputs",
    "outputLabel": "AI Customer Quality Page AI response",
    "signals": [
      "frontend/src/pages/AICustomerQualityPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-diver-safety-page-1frqbd-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Diver Safety Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDiverSafetyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Diver Safety Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Diver Safety Page donor inputs",
    "outputLabel": "AI Diver Safety Page AI response",
    "signals": [
      "frontend/src/pages/AIDiverSafetyPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-environmental-risk-page-1ugmv8-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Environmental Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEnvironmentalRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Environmental Risk Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Environmental Risk Page donor inputs",
    "outputLabel": "AI Environmental Risk Page AI response",
    "signals": [
      "frontend/src/pages/AIEnvironmentalRiskPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-escape-detect-page-12fcm3-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Escape Detect Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEscapeDetectPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Escape Detect Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Escape Detect Page donor inputs",
    "outputLabel": "AI Escape Detect Page AI response",
    "signals": [
      "frontend/src/pages/AIEscapeDetectPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-feed-conversion-page-1yvrpt-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Feed Conversion Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFeedConversionPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Feed Conversion Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Feed Conversion Page donor inputs",
    "outputLabel": "AI Feed Conversion Page AI response",
    "signals": [
      "frontend/src/pages/AIFeedConversionPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-fish-health-diagnostic-page-n2qm91-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Fish Health Diagnostic Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFishHealthDiagnosticPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Fish Health Diagnostic Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Fish Health Diagnostic Page donor inputs",
    "outputLabel": "AI Fish Health Diagnostic Page AI response",
    "signals": [
      "frontend/src/pages/AIFishHealthDiagnosticPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-harvest-schedule-page-1x4p0h-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Harvest Schedule Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHarvestSchedulePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Harvest Schedule Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Harvest Schedule Page donor inputs",
    "outputLabel": "AI Harvest Schedule Page AI response",
    "signals": [
      "frontend/src/pages/AIHarvestSchedulePage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-harvest-timing-page-1elk65-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Harvest Timing Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHarvestTimingPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Harvest Timing Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Harvest Timing Page donor inputs",
    "outputLabel": "AI Harvest Timing Page AI response",
    "signals": [
      "frontend/src/pages/AIHarvestTimingPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-market-price-forecast-page-1rhk7s-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Market Price Forecast Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMarketPriceForecastPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Market Price Forecast Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Market Price Forecast Page donor inputs",
    "outputLabel": "AI Market Price Forecast Page AI response",
    "signals": [
      "frontend/src/pages/AIMarketPriceForecastPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-mortality-anomaly-page-1tnbr3-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Mortality Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMortalityAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Mortality Anomaly Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Mortality Anomaly Page donor inputs",
    "outputLabel": "AI Mortality Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AIMortalityAnomalyPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-mortality-predict-page-1kdit6-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Mortality Predict Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMortalityPredictPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Mortality Predict Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Mortality Predict Page donor inputs",
    "outputLabel": "AI Mortality Predict Page AI response",
    "signals": [
      "frontend/src/pages/AIMortalityPredictPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-pen-camera-analyze-page-s68x8s-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Pen Camera Analyze Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPenCameraAnalyzePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pen Camera Analyze Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pen Camera Analyze Page donor inputs",
    "outputLabel": "AI Pen Camera Analyze Page AI response",
    "signals": [
      "frontend/src/pages/AIPenCameraAnalyzePage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-predator-deterrent-page-we7772-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Predator Deterrent Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPredatorDeterrentPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predator Deterrent Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predator Deterrent Page donor inputs",
    "outputLabel": "AI Predator Deterrent Page AI response",
    "signals": [
      "frontend/src/pages/AIPredatorDeterrentPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-sea-lice-classify-page-1d6vfs-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Sea Lice Classify Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISeaLiceClassifyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sea Lice Classify Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sea Lice Classify Page donor inputs",
    "outputLabel": "AI Sea Lice Classify Page AI response",
    "signals": [
      "frontend/src/pages/AISeaLiceClassifyPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-stocking-density-risk-page-1kmz8d-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Stocking Density Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIStockingDensityRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Stocking Density Risk Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Stocking Density Risk Page donor inputs",
    "outputLabel": "AI Stocking Density Risk Page AI response",
    "signals": [
      "frontend/src/pages/AIStockingDensityRiskPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-sustainability-score-page-f0hhk7-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Sustainability Score Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISustainabilityScorePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sustainability Score Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sustainability Score Page donor inputs",
    "outputLabel": "AI Sustainability Score Page AI response",
    "signals": [
      "frontend/src/pages/AISustainabilityScorePage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-treatment-recommend-page-tia1tm-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Treatment Recommend Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITreatmentRecommendPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Treatment Recommend Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Treatment Recommend Page donor inputs",
    "outputLabel": "AI Treatment Recommend Page AI response",
    "signals": [
      "frontend/src/pages/AITreatmentRecommendPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-vendor-quality-page-1bll0l-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Vendor Quality Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVendorQualityPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Vendor Quality Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Vendor Quality Page donor inputs",
    "outputLabel": "AI Vendor Quality Page AI response",
    "signals": [
      "frontend/src/pages/AIVendorQualityPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-vessel-shift-page-1gn5qr-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Vessel Shift Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVesselShiftPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Vessel Shift Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Vessel Shift Page donor inputs",
    "outputLabel": "AI Vessel Shift Page AI response",
    "signals": [
      "frontend/src/pages/AIVesselShiftPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-water-quality-anomaly-page-1rdn03-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI Water Quality Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIWaterQualityAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Water Quality Anomaly Page\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Water Quality Anomaly Page donor inputs",
    "outputLabel": "AI Water Quality Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AIWaterQualityAnomalyPage.js"
    ]
  },
  {
    "id": "ai-aquaculture-fish-farm-ai-5cuwes-exact-ai",
    "title": "AI Aquaculture Fish Farm: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIAquacultureFishFarm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Biomass Kg",
      "Biomass Kg",
      "Constraints",
      "Customer Id",
      "Dissolved Oxygen Mg L",
      "Dive Objective",
      "Diver Id",
      "Farm Id"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-source-workflow",
    "title": "AI Beekeeping Apiary Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIBeekeepingApiary.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIBeekeepingApiary to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Beekeeping Apiary source context",
    "outputLabel": "AI Beekeeping Apiary source analysis",
    "signals": [
      "frontend/src/pages/AIBeekeeperMentorPage",
      "frontend/src/pages/AIBeekeeperSchedulePage",
      "frontend/src/pages/AICustomerQuotePage",
      "frontend/src/pages/AIDiseaseOutbreakPage",
      "frontend/src/pages/AIEquipmentPrognosticPage",
      "frontend/src/pages/AIExecutiveBriefPage",
      "frontend/src/pages/AIForagingOptimizerPage",
      "frontend/src/pages/AIHarvestForecastPage"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-tools",
    "title": "AI Beekeeping Apiary AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIBeekeepingApiary.",
    "defaultPrompt": "Review AIBeekeepingApiary AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Beekeeping Apiary AI prompt or tool context",
    "outputLabel": "AI Beekeeping Apiary AI tool response",
    "signals": [
      "frontend/src/pages/AIBeekeeperMentorPage.js",
      "frontend/src/pages/AIBeekeeperSchedulePage.js",
      "frontend/src/pages/AICustomerQuotePage.js",
      "frontend/src/pages/AIDiseaseOutbreakPage.js",
      "frontend/src/pages/AIEquipmentPrognosticPage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js",
      "frontend/src/pages/AIForagingOptimizerPage.js",
      "frontend/src/pages/AIHarvestForecastPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-beekeeper-mentor-page-144z4a-exact-ai",
    "title": "AI Beekeeping Apiary: AI Beekeeper Mentor Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBeekeeperMentorPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Beekeeper Mentor Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Beekeeper Mentor Page donor inputs",
    "outputLabel": "AI Beekeeper Mentor Page AI response",
    "signals": [
      "frontend/src/pages/AIBeekeeperMentorPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-beekeeper-schedule-page-1qudsm-exact-ai",
    "title": "AI Beekeeping Apiary: AI Beekeeper Schedule Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBeekeeperSchedulePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Beekeeper Schedule Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Beekeeper Schedule Page donor inputs",
    "outputLabel": "AI Beekeeper Schedule Page AI response",
    "signals": [
      "frontend/src/pages/AIBeekeeperSchedulePage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-customer-quote-page-1rj7wl-exact-ai",
    "title": "AI Beekeeping Apiary: AI Customer Quote Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICustomerQuotePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Customer Quote Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Customer Quote Page donor inputs",
    "outputLabel": "AI Customer Quote Page AI response",
    "signals": [
      "frontend/src/pages/AICustomerQuotePage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-disease-outbreak-page-16hsau-exact-ai",
    "title": "AI Beekeeping Apiary: AI Disease Outbreak Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDiseaseOutbreakPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Disease Outbreak Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Disease Outbreak Page donor inputs",
    "outputLabel": "AI Disease Outbreak Page AI response",
    "signals": [
      "frontend/src/pages/AIDiseaseOutbreakPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-equipment-prognostic-page-1u2eq5-exact-ai",
    "title": "AI Beekeeping Apiary: AI Equipment Prognostic Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEquipmentPrognosticPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Equipment Prognostic Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Equipment Prognostic Page donor inputs",
    "outputLabel": "AI Equipment Prognostic Page AI response",
    "signals": [
      "frontend/src/pages/AIEquipmentPrognosticPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AI Beekeeping Apiary: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-foraging-optimizer-page-fk1jrw-exact-ai",
    "title": "AI Beekeeping Apiary: AI Foraging Optimizer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIForagingOptimizerPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Foraging Optimizer Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Foraging Optimizer Page donor inputs",
    "outputLabel": "AI Foraging Optimizer Page AI response",
    "signals": [
      "frontend/src/pages/AIForagingOptimizerPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-harvest-forecast-page-clwpry-exact-ai",
    "title": "AI Beekeeping Apiary: AI Harvest Forecast Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHarvestForecastPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Harvest Forecast Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Harvest Forecast Page donor inputs",
    "outputLabel": "AI Harvest Forecast Page AI response",
    "signals": [
      "frontend/src/pages/AIHarvestForecastPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-hive-acoustic-anomaly-page-b3vy50-exact-ai",
    "title": "AI Beekeeping Apiary: AI Hive Acoustic Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHiveAcousticAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Hive Acoustic Anomaly Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Hive Acoustic Anomaly Page donor inputs",
    "outputLabel": "AI Hive Acoustic Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AIHiveAcousticAnomalyPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-hive-strength-page-zr18pp-exact-ai",
    "title": "AI Beekeeping Apiary: AI Hive Strength Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHiveStrengthPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Hive Strength Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Hive Strength Page donor inputs",
    "outputLabel": "AI Hive Strength Page AI response",
    "signals": [
      "frontend/src/pages/AIHiveStrengthPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-nectar-flow-calendar-page-14gd23-exact-ai",
    "title": "AI Beekeeping Apiary: AI Nectar Flow Calendar Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AINectarFlowCalendarPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Nectar Flow Calendar Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Nectar Flow Calendar Page donor inputs",
    "outputLabel": "AI Nectar Flow Calendar Page AI response",
    "signals": [
      "frontend/src/pages/AINectarFlowCalendarPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-pollination-route-page-wcvqc6-exact-ai",
    "title": "AI Beekeeping Apiary: AI Pollination Route Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPollinationRoutePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pollination Route Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pollination Route Page donor inputs",
    "outputLabel": "AI Pollination Route Page AI response",
    "signals": [
      "frontend/src/pages/AIPollinationRoutePage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-queen-health-assess-page-x60yvs-exact-ai",
    "title": "AI Beekeeping Apiary: AI Queen Health Assess Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIQueenHealthAssessPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Queen Health Assess Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Queen Health Assess Page donor inputs",
    "outputLabel": "AI Queen Health Assess Page AI response",
    "signals": [
      "frontend/src/pages/AIQueenHealthAssessPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-queen-status-page-1mz561-exact-ai",
    "title": "AI Beekeeping Apiary: AI Queen Status Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIQueenStatusPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Queen Status Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Queen Status Page donor inputs",
    "outputLabel": "AI Queen Status Page AI response",
    "signals": [
      "frontend/src/pages/AIQueenStatusPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-supply-resupply-page-1owca2-exact-ai",
    "title": "AI Beekeeping Apiary: AI Supply Resupply Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISupplyResupplyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Supply Resupply Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Supply Resupply Page donor inputs",
    "outputLabel": "AI Supply Resupply Page AI response",
    "signals": [
      "frontend/src/pages/AISupplyResupplyPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-swarm-risk-page-ma295f-exact-ai",
    "title": "AI Beekeeping Apiary: AI Swarm Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISwarmRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Swarm Risk Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Swarm Risk Page donor inputs",
    "outputLabel": "AI Swarm Risk Page AI response",
    "signals": [
      "frontend/src/pages/AISwarmRiskPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-treatment-efficacy-page-1d9n0u-exact-ai",
    "title": "AI Beekeeping Apiary: AI Treatment Efficacy Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITreatmentEfficacyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Treatment Efficacy Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Treatment Efficacy Page donor inputs",
    "outputLabel": "AI Treatment Efficacy Page AI response",
    "signals": [
      "frontend/src/pages/AITreatmentEfficacyPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-varroa-risk-score-page-bzbny0-exact-ai",
    "title": "AI Beekeeping Apiary: AI Varroa Risk Score Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVarroaRiskScorePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Varroa Risk Score Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Varroa Risk Score Page donor inputs",
    "outputLabel": "AI Varroa Risk Score Page AI response",
    "signals": [
      "frontend/src/pages/AIVarroaRiskScorePage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-varroa-treatment-page-gmhbkn-exact-ai",
    "title": "AI Beekeeping Apiary: AI Varroa Treatment Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVarroaTreatmentPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Varroa Treatment Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Varroa Treatment Page donor inputs",
    "outputLabel": "AI Varroa Treatment Page AI response",
    "signals": [
      "frontend/src/pages/AIVarroaTreatmentPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-vendor-quote-compare-page-j97woj-exact-ai",
    "title": "AI Beekeeping Apiary: AI Vendor Quote Compare Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVendorQuoteComparePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Vendor Quote Compare Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Vendor Quote Compare Page donor inputs",
    "outputLabel": "AI Vendor Quote Compare Page AI response",
    "signals": [
      "frontend/src/pages/AIVendorQuoteComparePage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-weather-impact-page-1rgp4v-exact-ai",
    "title": "AI Beekeeping Apiary: AI Weather Impact Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIWeatherImpactPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Weather Impact Page\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Weather Impact Page donor inputs",
    "outputLabel": "AI Weather Impact Page AI response",
    "signals": [
      "frontend/src/pages/AIWeatherImpactPage.js"
    ]
  },
  {
    "id": "ai-beekeeping-apiary-ai-5cuwes-exact-ai",
    "title": "AI Beekeeping Apiary: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIBeekeepingApiary. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Notes"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-source-workflow",
    "title": "AI Crop Disease Pest Detection Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICropDiseasePestDetection.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICropDiseasePestDetection to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Crop Disease Pest Detection source context",
    "outputLabel": "AI Crop Disease Pest Detection source analysis",
    "signals": [
      "backend/openrouter",
      "frontend/src/main",
      "frontend/src/pages/AIAdvanced",
      "frontend/src/pages/CfSupplyChainOptimization",
      "frontend/src/pages/GapCommunityReportsLacksAiModerationClustering",
      "frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint",
      "frontend/src/pages/GapMarketplaceExpertConsultationsLackAiDrivenMatching",
      "backend/aiAdvanced"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-ai-tools",
    "title": "AI Crop Disease Pest Detection AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICropDiseasePestDetection.",
    "defaultPrompt": "Review AICropDiseasePestDetection AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Crop Disease Pest Detection AI prompt or tool context",
    "outputLabel": "AI Crop Disease Pest Detection AI tool response",
    "signals": [
      "backend/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAdvanced.jsx",
      "frontend/src/pages/CfSupplyChainOptimization.jsx",
      "frontend/src/pages/GapCommunityReportsLacksAiModerationClustering.jsx",
      "frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint.jsx",
      "frontend/src/pages/GapMarketplaceExpertConsultationsLackAiDrivenMatching.jsx",
      "backend/aiAdvanced.js"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-ai-advanced-w0lkpr-exact-ai",
    "title": "AI Crop Disease Pest Detection: AI Advanced",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdvanced.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced\" from AICropDiseasePestDetection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced donor inputs",
    "outputLabel": "AI Advanced AI response",
    "signals": [
      "frontend/src/pages/AIAdvanced.jsx"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-cf-supply-chain-optimization-1wth7j-exact-ai",
    "title": "AI Crop Disease Pest Detection: Cf Supply Chain Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfSupplyChainOptimization.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Supply Chain Optimization\" from AICropDiseasePestDetection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Supply Chain Optimization donor inputs",
    "outputLabel": "Cf Supply Chain Optimization AI response",
    "signals": [
      "frontend/src/pages/CfSupplyChainOptimization.jsx"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-gap-community-reports-lacks-ai-moderation-clustering-12rxmb-exact-ai",
    "title": "AI Crop Disease Pest Detection: Gap Community Reports Lacks AI Moderation Clustering",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapCommunityReportsLacksAiModerationClustering.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Community Reports Lacks AI Moderation Clustering\" from AICropDiseasePestDetection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Community Reports Lacks AI Moderation Clustering donor inputs",
    "outputLabel": "Gap Community Reports Lacks AI Moderation Clustering AI response",
    "signals": [
      "frontend/src/pages/GapCommunityReportsLacksAiModerationClustering.jsx"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-gap-farm-management-lacks-ai-yield-forecasting-endpoint-1y66ql-exact-ai",
    "title": "AI Crop Disease Pest Detection: Gap Farm Management Lacks AI Yield Forecasting Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Farm Management Lacks AI Yield Forecasting Endpoint\" from AICropDiseasePestDetection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Farm Management Lacks AI Yield Forecasting Endpoint donor inputs",
    "outputLabel": "Gap Farm Management Lacks AI Yield Forecasting Endpoint AI response",
    "signals": [
      "frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint.jsx"
    ]
  },
  {
    "id": "ai-crop-disease-pest-detection-gap-marketplace-expert-consultations-lack-ai-driven-matching-1akzfl-exact-ai",
    "title": "AI Crop Disease Pest Detection: Gap Marketplace Expert Consultations Lack AI Driven Matching",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapMarketplaceExpertConsultationsLackAiDrivenMatching.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Marketplace Expert Consultations Lack AI Driven Matching\" from AICropDiseasePestDetection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Marketplace Expert Consultations Lack AI Driven Matching donor inputs",
    "outputLabel": "Gap Marketplace Expert Consultations Lack AI Driven Matching AI response",
    "signals": [
      "frontend/src/pages/GapMarketplaceExpertConsultationsLackAiDrivenMatching.jsx"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-source-workflow",
    "title": "AI Fisheries Aquaculture Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIFisheriesAquacultureManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIFisheriesAquacultureManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Fisheries Aquaculture Manager source context",
    "outputLabel": "AI Fisheries Aquaculture Manager source analysis",
    "signals": [
      "server/services/openrouter",
      "server/services/aiResultsStore",
      "server/routes/agenticFarm",
      "server/routes/agenticFarmManager",
      "server/routes/aiResults",
      "server/routes/equipmentMaintenance",
      "server/routes/sustainability",
      "server/routes/sustainabilityCertification"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-ai-tools",
    "title": "AI Fisheries Aquaculture Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIFisheriesAquacultureManager.",
    "defaultPrompt": "Review AIFisheriesAquacultureManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Fisheries Aquaculture Manager AI prompt or tool context",
    "outputLabel": "AI Fisheries Aquaculture Manager AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/services/aiResultsStore.js",
      "server/routes/agenticFarm.js",
      "server/routes/agenticFarmManager.js",
      "server/routes/aiResults.js",
      "server/routes/equipmentMaintenance.js",
      "server/routes/sustainability.js",
      "server/routes/sustainabilityCertification.js"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-agentic-farm-35mtti-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Agentic Farm",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticFarm.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Farm\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Farm donor inputs",
    "outputLabel": "Agentic Farm AI response",
    "signals": [
      "Batch Id",
      "Current Price Per Kg",
      "Event",
      "Harvest Month",
      "Payload",
      "Species = 'Tilapia'"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-agentic-farm-manager-icqcw5-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Agentic Farm Manager",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticFarmManager.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Farm Manager\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Farm Manager donor inputs",
    "outputLabel": "Agentic Farm Manager AI response",
    "signals": [
      "server/routes/agenticFarmManager.js"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-sustainability-hp0wo-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Sustainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/sustainability.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability donor inputs",
    "outputLabel": "Sustainability AI response",
    "signals": [
      "Horizon Days",
      "Pond Id"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-sustainability-certification-zik328-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Sustainability Certification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/sustainabilityCertification.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability Certification\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability Certification donor inputs",
    "outputLabel": "Sustainability Certification AI response",
    "signals": [
      "server/routes/sustainabilityCertification.js"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-traceability-chain-umjh8z-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Traceability Chain",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/traceabilityChain.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Traceability Chain\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Traceability Chain donor inputs",
    "outputLabel": "Traceability Chain AI response",
    "signals": [
      "Batch Id",
      "Details",
      "Event"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-agentic-farm-1qa5v2-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Agentic Farm",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AgenticFarm.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Farm\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Farm donor inputs",
    "outputLabel": "Agentic Farm AI response",
    "signals": [
      "client/src/pages/AgenticFarm.js"
    ]
  },
  {
    "id": "ai-fisheries-aquaculture-manager-sustainability-1wpihj-exact-ai",
    "title": "AI Fisheries Aquaculture Manager: Sustainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Sustainability.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sustainability\" from AIFisheriesAquacultureManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sustainability donor inputs",
    "outputLabel": "Sustainability AI response",
    "signals": [
      "Fcr",
      "Mortality Rate",
      "Notes",
      "Stocking Density Kg M3",
      "Water Quality Score"
    ]
  },
  {
    "id": "ai-forestry-timber-management-source-workflow",
    "title": "AI Forestry Timber Management Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIForestryTimberManagement.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIForestryTimberManagement to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Forestry Timber Management source context",
    "outputLabel": "AI Forestry Timber Management source analysis",
    "signals": [
      "server/routes/agenticForestPlanner",
      "server/routes/gap-no-labor-scheduling-ai-for-field",
      "server/routes/gap-no-vendorsupplier-matching-ai-only-telem",
      "client/src/main",
      "client/src/pages/AIEquipmentMaintenance",
      "client/src/pages/AIToolsPage",
      "client/src/pages/CfAgenticForestPlanningMultiAgentSyst",
      "client/src/pages/GapNoLaborSchedulingAiForField"
    ]
  },
  {
    "id": "ai-forestry-timber-management-ai-tools",
    "title": "AI Forestry Timber Management AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIForestryTimberManagement.",
    "defaultPrompt": "Review AIForestryTimberManagement AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Forestry Timber Management AI prompt or tool context",
    "outputLabel": "AI Forestry Timber Management AI tool response",
    "signals": [
      "server/routes/agenticForestPlanner.js",
      "server/routes/gap-no-labor-scheduling-ai-for-field.js",
      "server/routes/gap-no-vendorsupplier-matching-ai-only-telem.js",
      "client/src/main.jsx",
      "client/src/pages/AIEquipmentMaintenance.jsx",
      "client/src/pages/AIToolsPage.jsx",
      "client/src/pages/CfAgenticForestPlanningMultiAgentSyst.jsx",
      "client/src/pages/GapNoLaborSchedulingAiForField.jsx"
    ]
  },
  {
    "id": "ai-forestry-timber-management-agentic-forest-planner-130zwt-exact-ai",
    "title": "AI Forestry Timber Management: Agentic Forest Planner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticForestPlanner.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Forest Planner\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Forest Planner donor inputs",
    "outputLabel": "Agentic Forest Planner AI response",
    "signals": [
      "server/routes/agenticForestPlanner.js"
    ]
  },
  {
    "id": "ai-forestry-timber-management-gap-no-labor-scheduling-ai-for-field-1t54jz-exact-ai",
    "title": "AI Forestry Timber Management: Gap No Labor Scheduling AI For Field",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-labor-scheduling-ai-for-field.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Labor Scheduling AI For Field\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Labor Scheduling AI For Field donor inputs",
    "outputLabel": "Gap No Labor Scheduling AI For Field AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-forestry-timber-management-gap-no-vendorsupplier-matching-ai-only-telem-cyyf6o-exact-ai",
    "title": "AI Forestry Timber Management: Gap No Vendorsupplier Matching AI Only Telem",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-vendorsupplier-matching-ai-only-telem.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Vendorsupplier Matching AI Only Telem\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Vendorsupplier Matching AI Only Telem donor inputs",
    "outputLabel": "Gap No Vendorsupplier Matching AI Only Telem AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-forestry-timber-management-ai-tools-page-hm1a26-exact-ai",
    "title": "AI Forestry Timber Management: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIToolsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "Disease Report Id",
      "Polygon Geojson",
      "Tree Id",
      "Weather"
    ]
  },
  {
    "id": "ai-forestry-timber-management-cf-agentic-forest-planning-multi-agent-syst-1v1nm6-exact-ai",
    "title": "AI Forestry Timber Management: Cf Agentic Forest Planning Multi Agent Syst",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfAgenticForestPlanningMultiAgentSyst.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Forest Planning Multi Agent Syst\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Forest Planning Multi Agent Syst donor inputs",
    "outputLabel": "Cf Agentic Forest Planning Multi Agent Syst AI response",
    "signals": [
      "client/src/pages/CfAgenticForestPlanningMultiAgentSyst.jsx"
    ]
  },
  {
    "id": "ai-forestry-timber-management-gap-no-labor-scheduling-ai-for-field-akf2dm-exact-ai",
    "title": "AI Forestry Timber Management: Gap No Labor Scheduling AI For Field",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoLaborSchedulingAiForField.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Labor Scheduling AI For Field\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Labor Scheduling AI For Field donor inputs",
    "outputLabel": "Gap No Labor Scheduling AI For Field AI response",
    "signals": [
      "client/src/pages/GapNoLaborSchedulingAiForField.jsx"
    ]
  },
  {
    "id": "ai-forestry-timber-management-gap-no-vendorsupplier-matching-ai-only-telem-8turer-exact-ai",
    "title": "AI Forestry Timber Management: Gap No Vendorsupplier Matching AI Only Telem",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoVendorsupplierMatchingAiOnlyTelem.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Vendorsupplier Matching AI Only Telem\" from AIForestryTimberManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Vendorsupplier Matching AI Only Telem donor inputs",
    "outputLabel": "Gap No Vendorsupplier Matching AI Only Telem AI response",
    "signals": [
      "client/src/pages/GapNoVendorsupplierMatchingAiOnlyTelem.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-source-workflow",
    "title": "AI Livestock Health Monitoring Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AILivestockHealthMonitoring.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AILivestockHealthMonitoring to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Livestock Health Monitoring source context",
    "outputLabel": "AI Livestock Health Monitoring source analysis",
    "signals": [
      "frontend/src/pages/AIToolsPage",
      "frontend/src/pages/GapAgentic",
      "frontend/src/pages/GapAiBreedingAdvisor",
      "frontend/src/pages/GapAiDiseaseRiskAssessment",
      "frontend/src/pages/GapAiEconomicForecaster",
      "frontend/src/pages/GapAiHealthAnomalyDetector",
      "frontend/src/pages/GapAiNutritionOptimizer",
      "frontend/src/components/AIResultDisplay"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-ai-tools",
    "title": "AI Livestock Health Monitoring AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AILivestockHealthMonitoring.",
    "defaultPrompt": "Review AILivestockHealthMonitoring AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Livestock Health Monitoring AI prompt or tool context",
    "outputLabel": "AI Livestock Health Monitoring AI tool response",
    "signals": [
      "frontend/src/pages/AIToolsPage.js",
      "frontend/src/pages/GapAgentic.jsx",
      "frontend/src/pages/GapAiBreedingAdvisor.jsx",
      "frontend/src/pages/GapAiDiseaseRiskAssessment.jsx",
      "frontend/src/pages/GapAiEconomicForecaster.jsx",
      "frontend/src/pages/GapAiHealthAnomalyDetector.jsx",
      "frontend/src/pages/GapAiNutritionOptimizer.jsx",
      "frontend/src/components/AIResultDisplay.js"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-ai-tools-page-kxx281-exact-ai",
    "title": "AI Livestock Health Monitoring: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIToolsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "frontend/src/pages/AIToolsPage.js"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-agentic-h0nlt8-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "frontend/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-breeding-advisor-1glqdy-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Breeding Advisor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiBreedingAdvisor.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Breeding Advisor\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Breeding Advisor donor inputs",
    "outputLabel": "Gap AI Breeding Advisor AI response",
    "signals": [
      "frontend/src/pages/GapAiBreedingAdvisor.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-disease-risk-assessment-nlnw6m-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Disease Risk Assessment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiDiseaseRiskAssessment.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Disease Risk Assessment\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Disease Risk Assessment donor inputs",
    "outputLabel": "Gap AI Disease Risk Assessment AI response",
    "signals": [
      "frontend/src/pages/GapAiDiseaseRiskAssessment.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-economic-forecaster-1g4a9l-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Economic Forecaster",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiEconomicForecaster.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Economic Forecaster\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Economic Forecaster donor inputs",
    "outputLabel": "Gap AI Economic Forecaster AI response",
    "signals": [
      "frontend/src/pages/GapAiEconomicForecaster.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-health-anomaly-detector-7pz1m0-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Health Anomaly Detector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiHealthAnomalyDetector.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Health Anomaly Detector\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Health Anomaly Detector donor inputs",
    "outputLabel": "Gap AI Health Anomaly Detector AI response",
    "signals": [
      "frontend/src/pages/GapAiHealthAnomalyDetector.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-nutrition-optimizer-1kkvvm-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Nutrition Optimizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiNutritionOptimizer.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Nutrition Optimizer\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Nutrition Optimizer donor inputs",
    "outputLabel": "Gap AI Nutrition Optimizer AI response",
    "signals": [
      "frontend/src/pages/GapAiNutritionOptimizer.jsx"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-ai-5cuwes-exact-ai",
    "title": "AI Livestock Health Monitoring: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Animal Id",
      "Animal Ids",
      "Herd Id",
      "Horizon Months = 12",
      "Market Context",
      "Target Goal",
      "Weather"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-breeding-advisor-wv6otr-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Breeding Advisor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-breeding-advisor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Breeding Advisor\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Breeding Advisor donor inputs",
    "outputLabel": "Gap AI Breeding Advisor AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-disease-risk-assessment-1e02ry-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Disease Risk Assessment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-disease-risk-assessment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Disease Risk Assessment\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Disease Risk Assessment donor inputs",
    "outputLabel": "Gap AI Disease Risk Assessment AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-economic-forecaster-f0285o-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Economic Forecaster",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-economic-forecaster.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Economic Forecaster\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Economic Forecaster donor inputs",
    "outputLabel": "Gap AI Economic Forecaster AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-health-anomaly-detector-j87wm5-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Health Anomaly Detector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-health-anomaly-detector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Health Anomaly Detector\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Health Anomaly Detector donor inputs",
    "outputLabel": "Gap AI Health Anomaly Detector AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-livestock-health-monitoring-gap-ai-nutrition-optimizer-18255h-exact-ai",
    "title": "AI Livestock Health Monitoring: Gap AI Nutrition Optimizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-nutrition-optimizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Nutrition Optimizer\" from AILivestockHealthMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Nutrition Optimizer donor inputs",
    "outputLabel": "Gap AI Nutrition Optimizer AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-source-workflow",
    "title": "AI Wind Solar Farm Ops Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIWindSolarFarmOps.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIWindSolarFarmOps to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Wind Solar Farm Ops source context",
    "outputLabel": "AI Wind Solar Farm Ops source analysis",
    "signals": [
      "frontend/src/pages/AIAssetDegTrendPage",
      "frontend/src/pages/AIBladeInspectionPage",
      "frontend/src/pages/AICurtailmentOptimizePage",
      "frontend/src/pages/AIDispatchConfidencePage",
      "frontend/src/pages/AIDraftWorkOrderPage",
      "frontend/src/pages/AIDroneBladeInspectionPage",
      "frontend/src/pages/AIExecutiveBriefPage",
      "frontend/src/pages/AIFaultPrognosticPage"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-tools",
    "title": "AI Wind Solar Farm Ops AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIWindSolarFarmOps.",
    "defaultPrompt": "Review AIWindSolarFarmOps AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Wind Solar Farm Ops AI prompt or tool context",
    "outputLabel": "AI Wind Solar Farm Ops AI tool response",
    "signals": [
      "frontend/src/pages/AIAssetDegTrendPage.js",
      "frontend/src/pages/AIBladeInspectionPage.js",
      "frontend/src/pages/AICurtailmentOptimizePage.js",
      "frontend/src/pages/AIDispatchConfidencePage.js",
      "frontend/src/pages/AIDraftWorkOrderPage.js",
      "frontend/src/pages/AIDroneBladeInspectionPage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js",
      "frontend/src/pages/AIFaultPrognosticPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-asset-deg-trend-page-1shf28-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Asset Deg Trend Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssetDegTrendPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Asset Deg Trend Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Asset Deg Trend Page donor inputs",
    "outputLabel": "AI Asset Deg Trend Page AI response",
    "signals": [
      "frontend/src/pages/AIAssetDegTrendPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-blade-inspection-page-hqqhfe-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Blade Inspection Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBladeInspectionPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Blade Inspection Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Blade Inspection Page donor inputs",
    "outputLabel": "AI Blade Inspection Page AI response",
    "signals": [
      "frontend/src/pages/AIBladeInspectionPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-curtailment-optimize-page-dzda45-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Curtailment Optimize Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICurtailmentOptimizePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Curtailment Optimize Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Curtailment Optimize Page donor inputs",
    "outputLabel": "AI Curtailment Optimize Page AI response",
    "signals": [
      "frontend/src/pages/AICurtailmentOptimizePage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-dispatch-confidence-page-505r7i-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Dispatch Confidence Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDispatchConfidencePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Dispatch Confidence Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Dispatch Confidence Page donor inputs",
    "outputLabel": "AI Dispatch Confidence Page AI response",
    "signals": [
      "frontend/src/pages/AIDispatchConfidencePage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-draft-work-order-page-1r4h0r-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Draft Work Order Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDraftWorkOrderPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Draft Work Order Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Draft Work Order Page donor inputs",
    "outputLabel": "AI Draft Work Order Page AI response",
    "signals": [
      "frontend/src/pages/AIDraftWorkOrderPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-drone-blade-inspection-page-1jog4y-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Drone Blade Inspection Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDroneBladeInspectionPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Drone Blade Inspection Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Drone Blade Inspection Page donor inputs",
    "outputLabel": "AI Drone Blade Inspection Page AI response",
    "signals": [
      "frontend/src/pages/AIDroneBladeInspectionPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-fault-prognostic-page-v8x1ie-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Fault Prognostic Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFaultPrognosticPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Fault Prognostic Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Fault Prognostic Page donor inputs",
    "outputLabel": "AI Fault Prognostic Page AI response",
    "signals": [
      "frontend/src/pages/AIFaultPrognosticPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-fleet-health-page-1l87m2-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Fleet Health Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFleetHealthPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Fleet Health Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Fleet Health Page donor inputs",
    "outputLabel": "AI Fleet Health Page AI response",
    "signals": [
      "frontend/src/pages/AIFleetHealthPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-forecast-generation-page-wcukzb-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Forecast Generation Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIForecastGenerationPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Forecast Generation Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Forecast Generation Page donor inputs",
    "outputLabel": "AI Forecast Generation Page AI response",
    "signals": [
      "frontend/src/pages/AIForecastGenerationPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-hybrid-storage-page-3twq8v-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Hybrid Storage Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHybridStoragePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Hybrid Storage Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Hybrid Storage Page donor inputs",
    "outputLabel": "AI Hybrid Storage Page AI response",
    "signals": [
      "frontend/src/pages/AIHybridStoragePage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-intraday-forecast-page-dg3cct-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Intraday Forecast Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIntradayForecastPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Intraday Forecast Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Intraday Forecast Page donor inputs",
    "outputLabel": "AI Intraday Forecast Page AI response",
    "signals": [
      "frontend/src/pages/AIIntradayForecastPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-inverter-clipping-page-1kmytb-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Inverter Clipping Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIInverterClippingPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Inverter Clipping Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Inverter Clipping Page donor inputs",
    "outputLabel": "AI Inverter Clipping Page AI response",
    "signals": [
      "frontend/src/pages/AIInverterClippingPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-ppa-settlement-page-17fb27-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Ppa Settlement Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPpaSettlementPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ppa Settlement Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ppa Settlement Page donor inputs",
    "outputLabel": "AI Ppa Settlement Page AI response",
    "signals": [
      "frontend/src/pages/AIPpaSettlementPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-ppa-shortfall-page-sgn9ry-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Ppa Shortfall Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPpaShortfallPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ppa Shortfall Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ppa Shortfall Page donor inputs",
    "outputLabel": "AI Ppa Shortfall Page AI response",
    "signals": [
      "frontend/src/pages/AIPpaShortfallPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-ramp-rate-strategy-page-1v7kcx-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Ramp Rate Strategy Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRampRateStrategyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ramp Rate Strategy Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ramp Rate Strategy Page donor inputs",
    "outputLabel": "AI Ramp Rate Strategy Page AI response",
    "signals": [
      "frontend/src/pages/AIRampRateStrategyPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-root-cause-page-1oon8b-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Root Cause Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRootCausePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Root Cause Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Root Cause Page donor inputs",
    "outputLabel": "AI Root Cause Page AI response",
    "signals": [
      "frontend/src/pages/AIRootCausePage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-soiling-icing-page-a0y5uh-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Soiling Icing Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISoilingIcingPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Soiling Icing Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Soiling Icing Page donor inputs",
    "outputLabel": "AI Soiling Icing Page AI response",
    "signals": [
      "frontend/src/pages/AISoilingIcingPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-ticket-prioritizer-page-hfhzlt-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Ticket Prioritizer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITicketPrioritizerPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ticket Prioritizer Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ticket Prioritizer Page donor inputs",
    "outputLabel": "AI Ticket Prioritizer Page AI response",
    "signals": [
      "frontend/src/pages/AITicketPrioritizerPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-turbine-availability-page-y8i7wo-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Turbine Availability Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITurbineAvailabilityPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Turbine Availability Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Turbine Availability Page donor inputs",
    "outputLabel": "AI Turbine Availability Page AI response",
    "signals": [
      "frontend/src/pages/AITurbineAvailabilityPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-vendor-warranty-page-qcvrlm-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Vendor Warranty Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVendorWarrantyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Vendor Warranty Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Vendor Warranty Page donor inputs",
    "outputLabel": "AI Vendor Warranty Page AI response",
    "signals": [
      "frontend/src/pages/AIVendorWarrantyPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-weather-window-page-1o0np8-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI Weather Window Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIWeatherWindowPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Weather Window Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Weather Window Page donor inputs",
    "outputLabel": "AI Weather Window Page AI response",
    "signals": [
      "frontend/src/pages/AIWeatherWindowPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-curtailment-events-page-pm2aj-exact-ai",
    "title": "AI Wind Solar Farm Ops: Curtailment Events Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CurtailmentEventsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Curtailment Events Page\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Curtailment Events Page donor inputs",
    "outputLabel": "Curtailment Events Page AI response",
    "signals": [
      "frontend/src/pages/CurtailmentEventsPage.js"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-ai-5cuwes-exact-ai",
    "title": "AI Wind Solar Farm Ops: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Activity",
      "Asset Id",
      "Context",
      "Horizon Hours",
      "Image Count",
      "Incident",
      "Intent",
      "Metric"
    ]
  },
  {
    "id": "ai-wind-solar-farm-ops-curtailment-events-75ubk5-exact-ai",
    "title": "AI Wind Solar Farm Ops: Curtailment Events",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/curtailmentEvents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Curtailment Events\" from AIWindSolarFarmOps. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Curtailment Events donor inputs",
    "outputLabel": "Curtailment Events AI response",
    "signals": [
      "backend/routes/curtailmentEvents.js"
    ]
  }
];
