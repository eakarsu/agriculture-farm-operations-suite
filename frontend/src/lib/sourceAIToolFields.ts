export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-low-pesticide-agriculture-cf-residue-audit-trail-t7hkw4-exact-ai": [
    {
      "name": "active_ingredient",
      "label": "Active Ingredient",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "application_method",
      "label": "Application Method",
      "type": "text",
      "defaultValue": "broadcast",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "product_trade_name",
      "label": "Product Trade Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "rate_g_ai_per_ha",
      "label": "Rate G AI Per Ha",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    }
  ],
  "ai-low-pesticide-agriculture-ai-5cuwes-exact-ai": [
    {
      "name": "detections",
      "label": "Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "health_data",
      "label": "Health Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pest_detections",
      "label": "Pest Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-low-pesticide-agriculture-ai-extra-10q8zo-exact-ai": [
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observation_notes",
      "label": "Observation Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observed_symptoms",
      "label": "Observed Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "soil_observations",
      "label": "Soil Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "target_pest",
      "label": "Target Pest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "weather_summary",
      "label": "Weather Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    }
  ],
  "ai-low-pesticide-agriculture-cf-residue-audit-trail-16v5eu-exact-ai": [
    {
      "name": "active_ingredient",
      "label": "Active Ingredient",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "application_method = 'broadcast'",
      "label": "Application Method = 'Broadcast'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "buffer_zone_m = null",
      "label": "Buffer Zone M = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "drift_risk_score = null",
      "label": "Drift Risk Score = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "humidity_pct = null",
      "label": "Humidity Pct = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "planned_harvest_date = null",
      "label": "Planned Harvest Date = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "product_trade_name = null",
      "label": "Product Trade Name = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "rate_g_ai_per_ha",
      "label": "Rate G AI Per Ha",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "temp_c = null",
      "label": "Temp C = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treated_area_ha = null",
      "label": "Treated Area Ha = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treatment_id = null",
      "label": "Treatment Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "wind_speed_kmh = null",
      "label": "Wind Speed Kmh = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-ai-crop-rotation-planner-9e4v02-exact-ai": [
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_1",
      "label": "Plan Year 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_2",
      "label": "Plan Year 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_3",
      "label": "Plan Year 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_4",
      "label": "Plan Year 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "prev_crop = null",
      "label": "Prev Crop = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "years = 4",
      "label": "Years = 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-ai-pest-photo-classifier-7f6n7n-exact-ai": [
    {
      "name": "crop = ''",
      "label": "Crop = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "description = ''",
      "label": "Description = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "field_id = null",
      "label": "Field Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "image_url = ''",
      "label": "Image Url = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-ai-sensor-anomaly-8iy54w-exact-ai": [
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "field_id = null",
      "label": "Field Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "sensor_id",
      "label": "Sensor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "window_hours = 72",
      "label": "Window Hours = 72",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "zthresh = 2.5",
      "label": "Zthresh = 2.5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-ai-treatment-efficacy-score-17ened-exact-ai": [
    {
      "name": "treatment_id",
      "label": "Treatment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    },
    {
      "name": "window_days = 21",
      "label": "Window Days = 21",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-ai-weather-impact-forecast-tygts3-exact-ai": [
    {
      "name": "active_ingredient = null",
      "label": "Active Ingredient = Null",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "hour_of_day = new Date().getHours()",
      "label": "Hour Of Day = New Date().Get Hours()",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "pesticide_id = null",
      "label": "Pesticide Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-nonai-image-upload-wqhfwk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Image Upload source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-image-upload.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-nonai-multi-tenant-farms-dh3p9n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Multi Tenant Farms source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-multi-tenant-farms.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-nonai-notifications-1kxzqj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Notifications source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-notifications.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-nonai-offline-sync-plluzq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Offline Sync source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-offline-sync.js"
    }
  ],
  "ai-low-pesticide-agriculture-gap-nonai-weather-providers-1rz8ip-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Weather Providers source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-weather-providers.js"
    }
  ],
  "ai-low-pesticide-agriculture-source-workflow": [
    {
      "name": "active_ingredient",
      "label": "Active Ingredient",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "application_method",
      "label": "Application Method",
      "type": "text",
      "defaultValue": "broadcast",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "product_trade_name",
      "label": "Product Trade Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "rate_g_ai_per_ha",
      "label": "Rate G AI Per Ha",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "detections",
      "label": "Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "health_data",
      "label": "Health Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pest_detections",
      "label": "Pest Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observation_notes",
      "label": "Observation Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observed_symptoms",
      "label": "Observed Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "soil_observations",
      "label": "Soil Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "target_pest",
      "label": "Target Pest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "weather_summary",
      "label": "Weather Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "application_method = 'broadcast'",
      "label": "Application Method = 'Broadcast'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "buffer_zone_m = null",
      "label": "Buffer Zone M = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "drift_risk_score = null",
      "label": "Drift Risk Score = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "humidity_pct = null",
      "label": "Humidity Pct = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "planned_harvest_date = null",
      "label": "Planned Harvest Date = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "product_trade_name = null",
      "label": "Product Trade Name = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "temp_c = null",
      "label": "Temp C = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treated_area_ha = null",
      "label": "Treated Area Ha = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treatment_id = null",
      "label": "Treatment Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "wind_speed_kmh = null",
      "label": "Wind Speed Kmh = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_1",
      "label": "Plan Year 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_2",
      "label": "Plan Year 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_3",
      "label": "Plan Year 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_4",
      "label": "Plan Year 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "prev_crop = null",
      "label": "Prev Crop = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "years = 4",
      "label": "Years = 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "crop = ''",
      "label": "Crop = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "description = ''",
      "label": "Description = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "field_id = null",
      "label": "Field Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "image_url = ''",
      "label": "Image Url = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "sensor_id",
      "label": "Sensor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "window_hours = 72",
      "label": "Window Hours = 72",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "zthresh = 2.5",
      "label": "Zthresh = 2.5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "treatment_id",
      "label": "Treatment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    },
    {
      "name": "window_days = 21",
      "label": "Window Days = 21",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    },
    {
      "name": "active_ingredient = null",
      "label": "Active Ingredient = Null",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "hour_of_day = new Date().getHours()",
      "label": "Hour Of Day = New Date().Get Hours()",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "pesticide_id = null",
      "label": "Pesticide Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Image Upload source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-image-upload.js"
    }
  ],
  "ai-low-pesticide-agriculture-ai-tools": [
    {
      "name": "active_ingredient",
      "label": "Active Ingredient",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "application_method",
      "label": "Application Method",
      "type": "text",
      "defaultValue": "broadcast",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "product_trade_name",
      "label": "Product Trade Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "rate_g_ai_per_ha",
      "label": "Rate G AI Per Ha",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfResidueAuditTrail.tsx"
    },
    {
      "name": "detections",
      "label": "Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "health_data",
      "label": "Health Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pest_detections",
      "label": "Pest Detections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "harvest_date",
      "label": "Harvest Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observation_notes",
      "label": "Observation Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "observed_symptoms",
      "label": "Observed Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "soil_observations",
      "label": "Soil Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "target_pest",
      "label": "Target Pest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "weather_summary",
      "label": "Weather Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "application_method = 'broadcast'",
      "label": "Application Method = 'Broadcast'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "buffer_zone_m = null",
      "label": "Buffer Zone M = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "drift_risk_score = null",
      "label": "Drift Risk Score = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "humidity_pct = null",
      "label": "Humidity Pct = Null",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "planned_harvest_date = null",
      "label": "Planned Harvest Date = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "product_trade_name = null",
      "label": "Product Trade Name = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "temp_c = null",
      "label": "Temp C = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treated_area_ha = null",
      "label": "Treated Area Ha = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "treatment_id = null",
      "label": "Treatment Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "wind_speed_kmh = null",
      "label": "Wind Speed Kmh = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/cf-residue-audit-trail.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_1",
      "label": "Plan Year 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_2",
      "label": "Plan Year 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_3",
      "label": "Plan Year 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "plan_year_4",
      "label": "Plan Year 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "prev_crop = null",
      "label": "Prev Crop = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "years = 4",
      "label": "Years = 4",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-crop-rotation-planner.js"
    },
    {
      "name": "crop = ''",
      "label": "Crop = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "description = ''",
      "label": "Description = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "field_id = null",
      "label": "Field Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "image_url = ''",
      "label": "Image Url = ''",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-pest-photo-classifier.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "sensor_id",
      "label": "Sensor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "window_hours = 72",
      "label": "Window Hours = 72",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "zthresh = 2.5",
      "label": "Zthresh = 2.5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-sensor-anomaly.js"
    },
    {
      "name": "treatment_id",
      "label": "Treatment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    },
    {
      "name": "window_days = 21",
      "label": "Window Days = 21",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-treatment-efficacy-score.js"
    },
    {
      "name": "active_ingredient = null",
      "label": "Active Ingredient = Null",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "hour_of_day = new Date().getHours()",
      "label": "Hour Of Day = New Date().Get Hours()",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "pesticide_id = null",
      "label": "Pesticide Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-weather-impact-forecast.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Image Upload source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-image-upload.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-disease-identification-leaf-plant-uotwl4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Disease Identification Leaf Plant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-ai-irrigation-optimization-real-time-1stpjd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Irrigation Optimization Real Time source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiIrrigationOptimizationRealTime.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-ai-market-price-prediction-optimal-1soz5g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Market Price Prediction Optimal source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiMarketPricePredictionOptimal.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-ai-soil-amendment-recommendation-1ybuxa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Soil Amendment Recommendation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiSoilAmendmentRecommendation.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-ai-weather-based-risk-alerts-4fpwn4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Weather Based Risk Alerts source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiWeatherBasedRiskAlerts.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-marketplace-bridge-grain-elevators-commodity-1a61zu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Marketplace Bridge Grain Elevators Commodity source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapMarketplaceBridgeGrainElevatorsCommodity.jsx"
    }
  ],
  "ai-agriculture-assistant-gap-sustainability-scoring-carbon-credits-water-1141o0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sustainability Scoring Carbon Credits Water source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapSustainabilityScoringCarbonCreditsWater.jsx"
    }
  ],
  "ai-agriculture-assistant-sustainability-score-page-15f6gn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability Score Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SustainabilityScorePage.jsx"
    }
  ],
  "ai-agriculture-assistant-ai-routes-13bpir-exact-ai": [
    {
      "name": "commodity",
      "label": "Commodity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crop_type",
      "label": "Crop Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crops",
      "label": "Crops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "current_severity = 'medium'",
      "label": "Current Severity = 'Medium'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_summary",
      "label": "Farm Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_type",
      "label": "Farm Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "forecast",
      "label": "Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "growth_stage",
      "label": "Growth Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "history_years = 5",
      "label": "History Years = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "pest_type",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "readings",
      "label": "Readings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "recent_prices",
      "label": "Recent Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "snapshot",
      "label": "Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "soil_data",
      "label": "Soil Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "symptoms_description",
      "label": "Symptoms Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "target_yield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "week",
      "label": "Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-disease-identification-leaf-plant-b95qk2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Disease Identification Leaf Plant source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ai_disease_identification_leaf_plant.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-irrigation-optimization-real-time-1jy9wo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Irrigation Optimization Real Time source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ai_irrigation_optimization_real_time.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-market-price-prediction-optimal-1ebba0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Market Price Prediction Optimal source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ai_market_price_prediction_optimal.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-soil-amendment-recommendation-1etnns-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Soil Amendment Recommendation source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ai_soil_amendment_recommendation.js"
    }
  ],
  "ai-agriculture-assistant-gap-ai-weather-based-risk-alerts-19z5yq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Weather Based Risk Alerts source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ai_weather_based_risk_alerts.js"
    }
  ],
  "ai-agriculture-assistant-sustainability-score-t04wb5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability Score source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/sustainabilityScore.js"
    }
  ],
  "ai-agriculture-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Disease Identification Leaf Plant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx"
    },
    {
      "name": "commodity",
      "label": "Commodity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crop_type",
      "label": "Crop Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crops",
      "label": "Crops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "current_severity = 'medium'",
      "label": "Current Severity = 'Medium'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_summary",
      "label": "Farm Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_type",
      "label": "Farm Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "forecast",
      "label": "Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "growth_stage",
      "label": "Growth Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "history_years = 5",
      "label": "History Years = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "pest_type",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "readings",
      "label": "Readings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "recent_prices",
      "label": "Recent Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "snapshot",
      "label": "Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "soil_data",
      "label": "Soil Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "symptoms_description",
      "label": "Symptoms Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "target_yield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "week",
      "label": "Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    }
  ],
  "ai-agriculture-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Disease Identification Leaf Plant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiDiseaseIdentificationLeafPlant.jsx"
    },
    {
      "name": "commodity",
      "label": "Commodity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crop_type",
      "label": "Crop Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "crops",
      "label": "Crops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "current_severity = 'medium'",
      "label": "Current Severity = 'Medium'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_summary",
      "label": "Farm Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "farm_type",
      "label": "Farm Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "field_id",
      "label": "Field Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "forecast",
      "label": "Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "growth_stage",
      "label": "Growth Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "history_years = 5",
      "label": "History Years = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "pest_type",
      "label": "Pest Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "readings",
      "label": "Readings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "recent_prices",
      "label": "Recent Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "snapshot",
      "label": "Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "soil_data",
      "label": "Soil Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "symptoms_description",
      "label": "Symptoms Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "target_yield",
      "label": "Target Yield",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    },
    {
      "name": "week",
      "label": "Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiRoutes.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-biomass-forecast-page-1pm1vn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Biomass Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiomassForecastPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-biomass-vision-page-15g1os-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Biomass Vision Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiomassVisionPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-certification-readiness-page-1yi0op-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Certification Readiness Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICertificationReadinessPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-customer-quality-page-jkylf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Customer Quality Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICustomerQualityPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-diver-safety-page-1frqbd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Diver Safety Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDiverSafetyPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-environmental-risk-page-1ugmv8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Environmental Risk Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnvironmentalRiskPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-escape-detect-page-12fcm3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Escape Detect Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEscapeDetectPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-feed-conversion-page-1yvrpt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feed Conversion Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeedConversionPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-fish-health-diagnostic-page-n2qm91-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Fish Health Diagnostic Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFishHealthDiagnosticPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-harvest-schedule-page-1x4p0h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Harvest Schedule Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHarvestSchedulePage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-harvest-timing-page-1elk65-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Harvest Timing Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHarvestTimingPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-market-price-forecast-page-1rhk7s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Market Price Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMarketPriceForecastPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-mortality-anomaly-page-1tnbr3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Mortality Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMortalityAnomalyPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-mortality-predict-page-1kdit6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Mortality Predict Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMortalityPredictPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-pen-camera-analyze-page-s68x8s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pen Camera Analyze Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPenCameraAnalyzePage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-predator-deterrent-page-we7772-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Predator Deterrent Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredatorDeterrentPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-sea-lice-classify-page-1d6vfs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sea Lice Classify Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISeaLiceClassifyPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-stocking-density-risk-page-1kmz8d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Stocking Density Risk Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStockingDensityRiskPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-sustainability-score-page-f0hhk7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sustainability Score Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISustainabilityScorePage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-treatment-recommend-page-tia1tm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Treatment Recommend Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITreatmentRecommendPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-vendor-quality-page-1bll0l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vendor Quality Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVendorQualityPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-vessel-shift-page-1gn5qr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vessel Shift Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVesselShiftPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-water-quality-anomaly-page-1rdn03-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Water Quality Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWaterQualityAnomalyPage.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-5cuwes-exact-ai": [
    {
      "name": "biomass_kg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "biomassKg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dissolved_oxygen_mg_l",
      "label": "Dissolved Oxygen Mg L",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dive_objective",
      "label": "Dive Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "diver_id",
      "label": "Diver Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_id",
      "label": "Farm Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_notes",
      "label": "Farm Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_description",
      "label": "Frame Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_refs",
      "label": "Frame Refs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_refs",
      "label": "Image Refs",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "market_notes",
      "label": "Market Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_id",
      "label": "Pen Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_notes",
      "label": "Pen Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_volume_m3",
      "label": "Pen Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals",
      "label": "Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site_notes",
      "label": "Site Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "species",
      "label": "Species",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_avg_weight_g",
      "label": "Target Avg Weight G",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volume_m3",
      "label": "Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_temp_c",
      "label": "Water Temp C",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-aquaculture-fish-farm-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Biomass Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiomassForecastPage.js"
    },
    {
      "name": "biomass_kg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "biomassKg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dissolved_oxygen_mg_l",
      "label": "Dissolved Oxygen Mg L",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dive_objective",
      "label": "Dive Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "diver_id",
      "label": "Diver Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_id",
      "label": "Farm Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_notes",
      "label": "Farm Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_description",
      "label": "Frame Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_refs",
      "label": "Frame Refs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_refs",
      "label": "Image Refs",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "market_notes",
      "label": "Market Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_id",
      "label": "Pen Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_notes",
      "label": "Pen Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_volume_m3",
      "label": "Pen Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals",
      "label": "Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site_notes",
      "label": "Site Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "species",
      "label": "Species",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_avg_weight_g",
      "label": "Target Avg Weight G",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volume_m3",
      "label": "Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_temp_c",
      "label": "Water Temp C",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-aquaculture-fish-farm-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Biomass Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiomassForecastPage.js"
    },
    {
      "name": "biomass_kg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "biomassKg",
      "label": "Biomass Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dissolved_oxygen_mg_l",
      "label": "Dissolved Oxygen Mg L",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dive_objective",
      "label": "Dive Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "diver_id",
      "label": "Diver Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_id",
      "label": "Farm Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "farm_notes",
      "label": "Farm Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_description",
      "label": "Frame Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "frame_refs",
      "label": "Frame Refs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_refs",
      "label": "Image Refs",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "market_notes",
      "label": "Market Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_id",
      "label": "Pen Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_notes",
      "label": "Pen Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "pen_volume_m3",
      "label": "Pen Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals",
      "label": "Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site_notes",
      "label": "Site Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "species",
      "label": "Species",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_avg_weight_g",
      "label": "Target Avg Weight G",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volume_m3",
      "label": "Volume M3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_temp_c",
      "label": "Water Temp C",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-beekeeping-apiary-ai-beekeeper-mentor-page-144z4a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Beekeeper Mentor Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBeekeeperMentorPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-beekeeper-schedule-page-1qudsm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Beekeeper Schedule Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBeekeeperSchedulePage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-customer-quote-page-1rj7wl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Customer Quote Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICustomerQuotePage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-disease-outbreak-page-16hsau-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Disease Outbreak Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDiseaseOutbreakPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-equipment-prognostic-page-1u2eq5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Equipment Prognostic Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEquipmentPrognosticPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-foraging-optimizer-page-fk1jrw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Foraging Optimizer Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIForagingOptimizerPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-harvest-forecast-page-clwpry-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Harvest Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHarvestForecastPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-hive-acoustic-anomaly-page-b3vy50-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hive Acoustic Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHiveAcousticAnomalyPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-hive-strength-page-zr18pp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hive Strength Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHiveStrengthPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-nectar-flow-calendar-page-14gd23-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Nectar Flow Calendar Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AINectarFlowCalendarPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-pollination-route-page-wcvqc6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pollination Route Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPollinationRoutePage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-queen-health-assess-page-x60yvs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Queen Health Assess Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIQueenHealthAssessPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-queen-status-page-1mz561-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Queen Status Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIQueenStatusPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-supply-resupply-page-1owca2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Supply Resupply Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyResupplyPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-swarm-risk-page-ma295f-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Swarm Risk Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISwarmRiskPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-treatment-efficacy-page-1d9n0u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Treatment Efficacy Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITreatmentEfficacyPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-varroa-risk-score-page-bzbny0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Varroa Risk Score Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVarroaRiskScorePage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-varroa-treatment-page-gmhbkn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Varroa Treatment Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVarroaTreatmentPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-vendor-quote-compare-page-j97woj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vendor Quote Compare Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVendorQuoteComparePage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-weather-impact-page-1rgp4v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Weather Impact Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWeatherImpactPage.js"
    }
  ],
  "ai-beekeeping-apiary-ai-5cuwes-exact-ai": [
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-beekeeping-apiary-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Beekeeper Mentor Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBeekeeperMentorPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-beekeeping-apiary-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Beekeeper Mentor Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBeekeeperMentorPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-crop-disease-pest-detection-ai-advanced-w0lkpr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-cf-supply-chain-optimization-1wth7j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Supply Chain Optimization source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSupplyChainOptimization.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-gap-community-reports-lacks-ai-moderation-clustering-12rxmb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Community Reports Lacks AI Moderation Clustering source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapCommunityReportsLacksAiModerationClustering.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-gap-farm-management-lacks-ai-yield-forecasting-endpoint-1y66ql-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Farm Management Lacks AI Yield Forecasting Endpoint source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapFarmManagementLacksAiYieldForecastingEndpoint.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-gap-marketplace-expert-consultations-lack-ai-driven-matching-1akzfl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Marketplace Expert Consultations Lack AI Driven Matching source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapMarketplaceExpertConsultationsLackAiDrivenMatching.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    }
  ],
  "ai-crop-disease-pest-detection-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    }
  ],
  "ai-fisheries-aquaculture-manager-agentic-farm-35mtti-exact-ai": [
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "current_price_per_kg",
      "label": "Current Price Per Kg",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "harvest_month",
      "label": "Harvest Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "species = 'tilapia'",
      "label": "Species = 'Tilapia'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-agentic-farm-manager-icqcw5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Farm Manager source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarmManager.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-sustainability-hp0wo-exact-ai": [
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    },
    {
      "name": "pond_id",
      "label": "Pond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-sustainability-certification-zik328-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability Certification source input context",
      "options": [],
      "required": false,
      "source": "server/routes/sustainabilityCertification.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-traceability-chain-umjh8z-exact-ai": [
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/traceabilityChain.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/traceabilityChain.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/traceabilityChain.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-agentic-farm-1qa5v2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Farm source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AgenticFarm.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-sustainability-1wpihj-exact-ai": [
    {
      "name": "fcr",
      "label": "Fcr",
      "type": "text",
      "defaultValue": "1.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "mortality_rate",
      "label": "Mortality Rate",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "stocking_density_kg_m3",
      "label": "Stocking Density Kg M3",
      "type": "text",
      "defaultValue": "25",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "water_quality_score",
      "label": "Water Quality Score",
      "type": "number",
      "defaultValue": "85",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-source-workflow": [
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "current_price_per_kg",
      "label": "Current Price Per Kg",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "harvest_month",
      "label": "Harvest Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "species = 'tilapia'",
      "label": "Species = 'Tilapia'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Farm Manager source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarmManager.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    },
    {
      "name": "pond_id",
      "label": "Pond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/traceabilityChain.js"
    },
    {
      "name": "fcr",
      "label": "Fcr",
      "type": "text",
      "defaultValue": "1.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "mortality_rate",
      "label": "Mortality Rate",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "stocking_density_kg_m3",
      "label": "Stocking Density Kg M3",
      "type": "text",
      "defaultValue": "25",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "water_quality_score",
      "label": "Water Quality Score",
      "type": "number",
      "defaultValue": "85",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    }
  ],
  "ai-fisheries-aquaculture-manager-ai-tools": [
    {
      "name": "batch_id",
      "label": "Batch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "current_price_per_kg",
      "label": "Current Price Per Kg",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "harvest_month",
      "label": "Harvest Month",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "species = 'tilapia'",
      "label": "Species = 'Tilapia'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarm.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Farm Manager source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticFarmManager.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    },
    {
      "name": "pond_id",
      "label": "Pond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/traceabilityChain.js"
    },
    {
      "name": "fcr",
      "label": "Fcr",
      "type": "text",
      "defaultValue": "1.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "mortality_rate",
      "label": "Mortality Rate",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "stocking_density_kg_m3",
      "label": "Stocking Density Kg M3",
      "type": "text",
      "defaultValue": "25",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    },
    {
      "name": "water_quality_score",
      "label": "Water Quality Score",
      "type": "number",
      "defaultValue": "85",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Sustainability.js"
    }
  ],
  "ai-forestry-timber-management-agentic-forest-planner-130zwt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Forest Planner source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticForestPlanner.js"
    }
  ],
  "ai-forestry-timber-management-gap-no-labor-scheduling-ai-for-field-1t54jz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-labor-scheduling-ai-for-field.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-labor-scheduling-ai-for-field.js"
    }
  ],
  "ai-forestry-timber-management-gap-no-vendorsupplier-matching-ai-only-telem-cyyf6o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-vendorsupplier-matching-ai-only-telem.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-vendorsupplier-matching-ai-only-telem.js"
    }
  ],
  "ai-forestry-timber-management-ai-tools-page-hm1a26-exact-ai": [
    {
      "name": "disease_report_id",
      "label": "Disease Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "polygon_geojson",
      "label": "Polygon Geojson",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "tree_id",
      "label": "Tree Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    }
  ],
  "ai-forestry-timber-management-cf-agentic-forest-planning-multi-agent-syst-1v1nm6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Forest Planning Multi Agent Syst source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticForestPlanningMultiAgentSyst.jsx"
    }
  ],
  "ai-forestry-timber-management-gap-no-labor-scheduling-ai-for-field-akf2dm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Labor Scheduling AI For Field source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoLaborSchedulingAiForField.jsx"
    }
  ],
  "ai-forestry-timber-management-gap-no-vendorsupplier-matching-ai-only-telem-8turer-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Vendorsupplier Matching AI Only Telem source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoVendorsupplierMatchingAiOnlyTelem.jsx"
    }
  ],
  "ai-forestry-timber-management-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Forest Planner source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticForestPlanner.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-labor-scheduling-ai-for-field.js"
    },
    {
      "name": "disease_report_id",
      "label": "Disease Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "polygon_geojson",
      "label": "Polygon Geojson",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "tree_id",
      "label": "Tree Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    }
  ],
  "ai-forestry-timber-management-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Forest Planner source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticForestPlanner.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-labor-scheduling-ai-for-field.js"
    },
    {
      "name": "disease_report_id",
      "label": "Disease Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "polygon_geojson",
      "label": "Polygon Geojson",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "tree_id",
      "label": "Tree Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    }
  ],
  "ai-livestock-health-monitoring-ai-tools-page-kxx281-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-agentic-h0nlt8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-breeding-advisor-1glqdy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Breeding Advisor source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiBreedingAdvisor.jsx"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-disease-risk-assessment-nlnw6m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Disease Risk Assessment source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiDiseaseRiskAssessment.jsx"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-economic-forecaster-1g4a9l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Economic Forecaster source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiEconomicForecaster.jsx"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-health-anomaly-detector-7pz1m0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Health Anomaly Detector source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiHealthAnomalyDetector.jsx"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-nutrition-optimizer-1kkvvm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Nutrition Optimizer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiNutritionOptimizer.jsx"
    }
  ],
  "ai-livestock-health-monitoring-ai-5cuwes-exact-ai": [
    {
      "name": "animalId",
      "label": "Animal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "animalIds",
      "label": "Animal Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "herdId",
      "label": "Herd Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizonMonths = 12",
      "label": "Horizon Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketContext",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-breeding-advisor-wv6otr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-breeding-advisor.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-breeding-advisor.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-disease-risk-assessment-1e02ry-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-disease-risk-assessment.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-disease-risk-assessment.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-economic-forecaster-f0285o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-economic-forecaster.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-economic-forecaster.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-health-anomaly-detector-j87wm5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-health-anomaly-detector.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-health-anomaly-detector.js"
    }
  ],
  "ai-livestock-health-monitoring-gap-ai-nutrition-optimizer-18255h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-nutrition-optimizer.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-nutrition-optimizer.js"
    }
  ],
  "ai-livestock-health-monitoring-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    },
    {
      "name": "animalId",
      "label": "Animal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "animalIds",
      "label": "Animal Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "herdId",
      "label": "Herd Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizonMonths = 12",
      "label": "Horizon Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketContext",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-breeding-advisor.js"
    }
  ],
  "ai-livestock-health-monitoring-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    },
    {
      "name": "animalId",
      "label": "Animal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "animalIds",
      "label": "Animal Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "herdId",
      "label": "Herd Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizonMonths = 12",
      "label": "Horizon Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketContext",
      "label": "Market Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-breeding-advisor.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-asset-deg-trend-page-1shf28-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Deg Trend Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetDegTrendPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-blade-inspection-page-hqqhfe-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Blade Inspection Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBladeInspectionPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-curtailment-optimize-page-dzda45-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Curtailment Optimize Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICurtailmentOptimizePage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-dispatch-confidence-page-505r7i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Dispatch Confidence Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDispatchConfidencePage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-draft-work-order-page-1r4h0r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Work Order Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftWorkOrderPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-drone-blade-inspection-page-1jog4y-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Drone Blade Inspection Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDroneBladeInspectionPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-fault-prognostic-page-v8x1ie-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Fault Prognostic Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFaultPrognosticPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-fleet-health-page-1l87m2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Fleet Health Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFleetHealthPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-forecast-generation-page-wcukzb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Forecast Generation Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIForecastGenerationPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-hybrid-storage-page-3twq8v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hybrid Storage Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHybridStoragePage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-intraday-forecast-page-dg3cct-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Intraday Forecast Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIntradayForecastPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-inverter-clipping-page-1kmytb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Inverter Clipping Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInverterClippingPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-ppa-settlement-page-17fb27-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Ppa Settlement Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPpaSettlementPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-ppa-shortfall-page-sgn9ry-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Ppa Shortfall Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPpaShortfallPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-ramp-rate-strategy-page-1v7kcx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Ramp Rate Strategy Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRampRateStrategyPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-root-cause-page-1oon8b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Root Cause Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRootCausePage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-soiling-icing-page-a0y5uh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Soiling Icing Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISoilingIcingPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-ticket-prioritizer-page-hfhzlt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Ticket Prioritizer Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITicketPrioritizerPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-turbine-availability-page-y8i7wo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Turbine Availability Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITurbineAvailabilityPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-vendor-warranty-page-qcvrlm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vendor Warranty Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVendorWarrantyPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-weather-window-page-1o0np8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Weather Window Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWeatherWindowPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-curtailment-events-page-pm2aj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Curtailment Events Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CurtailmentEventsPage.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-5cuwes-exact-ai": [
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "asset_id",
      "label": "Asset Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_count",
      "label": "Image Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppa_id",
      "label": "Ppa Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensor_notes",
      "label": "Sensor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site",
      "label": "Site",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site = 'Default Site'",
      "label": "Site = 'Default Site'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "turbine_id",
      "label": "Turbine Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-wind-solar-farm-ops-curtailment-events-75ubk5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Curtailment Events source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/curtailmentEvents.js"
    }
  ],
  "ai-wind-solar-farm-ops-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Deg Trend Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetDegTrendPage.js"
    },
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "asset_id",
      "label": "Asset Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_count",
      "label": "Image Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppa_id",
      "label": "Ppa Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensor_notes",
      "label": "Sensor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site",
      "label": "Site",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site = 'Default Site'",
      "label": "Site = 'Default Site'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "turbine_id",
      "label": "Turbine Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-wind-solar-farm-ops-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Deg Trend Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetDegTrendPage.js"
    },
    {
      "name": "activity",
      "label": "Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "asset_id",
      "label": "Asset Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_count",
      "label": "Image Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident",
      "label": "Incident",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppa_id",
      "label": "Ppa Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sensor_notes",
      "label": "Sensor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site",
      "label": "Site",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site = 'Default Site'",
      "label": "Site = 'Default Site'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "turbine_id",
      "label": "Turbine Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "window",
      "label": "Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ]
};
