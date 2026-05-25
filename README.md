# Agriculture Farm Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIAgricultureFarmOperationsAssistant`
- `AIAgricultureFarmOperationsOperations`
- `AIAgricultureFarmOperationsAnalytics`
- `AIAgricultureFarmOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/agriculture-farm-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5650`

Seeded users:
- `admin@agriculture-farm-operations.local / admin123`
- `manager@agriculture-farm-operations.local / manager123`
- `analyst@agriculture-farm-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/agriculture-farm-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5650 npm run smoke
```
