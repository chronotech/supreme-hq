# 🚀 Supreme HQ | Digital Command Center

The central hub for **Supreme Outdoor Advertising Ltd.** This dashboard provides real-time visibility into production workflows, inventory levels, and field operations at **Offsite Storage Location**.

## 🏗️ The Ecosystem
This Hub connects to two other specialized micro-apps:
1. **[JMS (Job Management System)](LINK_TO_YOUR_JMS_REPO)**: Tracks artwork approvals and print statuses.
2. **[Inventory & BOM](LINK_TO_YOUR_INVENTORY_REPO)**: Manages ink, vinyl, and estate assets.

---

## ⚡ Core Features
- **Live Metrics**: Fetches "Active Jobs," "Stock Alerts," and "Print Queue" counts directly from Google Sheets.
- **Dynamic Quick-Action**: A floating `+` button allows for 5-second material requisitions without leaving the dashboard.
- **Auto-Syncing Materials**: The request dropdown automatically pulls the latest item list from the Inventory sheet.
- **Mobile Optimized**: Designed as a Progressive Web App (PWA) for use on-site in St. Andrew.

---

## 🛠️ Technical Configuration

### 🔗 API Connections
The Hub communicates with Google Apps Script via the following constants in `index.html`:
- `INV_API`: Points to the **Inventory** Web App URL.
- `JMS_API`: Points to the **JMS** Web App URL.

### 📡 Data Fetching Logic
- **Interval**: The dashboard auto-refreshes metrics every **3 minutes** (180,000ms).
- **Mode**: Uses `no-cors` for silent data submission to bypass browser security restrictions.

---

## 📝 Maintenance Log (2026)
- **March 21**: Integrated Auto-Syncing `datalist` for material requests to prevent hardcoding items.
- **March 20**: Added Floating Action Button (FAB) for "Emergency Requisitions."
- **March 15**: Initial deployment of the 3-pillar navigation grid.

---

## 👤 Administrator
**Damian A. Moncrieffe** *Technical Strategist & Operations Manager*
