# NeuroScreen Analytics Guide

## 📊 Simple Usage Tracking System

The app includes a **client-side analytics system** that tracks user engagement without any external services or data collection.

### ✅ What Gets Tracked

- **📱 Page Visits**: Home, ADHD info, Autism info pages
- **🎯 Questionnaire Activity**: Starts and completions for each screener
- **📄 PDF Downloads**: ADHD and Autism questionnaire PDFs 
- **🔄 Sessions**: App launches/page loads

### 🔍 How to View Analytics

#### Method 1: Browser Console (Recommended)
```javascript
// Open browser dev tools (F12) and run:
import { logAnalytics } from '/lib/analytics/usage-tracker.js';
logAnalytics();

// Or the shorter method:
localStorage.getItem('neurodiversity-screener-analytics');
```

#### Method 2: Analytics Dashboard Component
```jsx
import { AnalyticsDashboard } from '@/components/analytics/AnalyticsDashboard';

// Use in any page
<AnalyticsDashboard />
```

#### Method 3: Export Raw Data
```javascript
// Export as JSON file
import { exportAnalytics } from '/lib/analytics/usage-tracker.js';
const data = exportAnalytics();
// Creates downloadable JSON file
```

### 📈 Sample Output

```
=== NeuroScreen Usage Analytics ===

📊 QUESTIONNAIRE METRICS:
• ADHD: 15 starts → 12 completions (80.0%)
• Autism: 8 starts → 6 completions (75.0%)

📱 PAGE VISITS:
• Homepage: 45 visits
• ADHD Info: 25 visits  
• Autism Info: 18 visits

📄 PDF DOWNLOADS:
• ADHD PDF: 8 downloads
• Autism PDF: 5 downloads

🔄 SESSIONS:
• Total Sessions: 42
• Last Updated: 6/23/2024

💡 INSIGHTS:
• Total Users: ~45
• Most Popular: ADHD screener
• Engagement Rate: 40.0%
```

### 🛠️ Analytics Functions

- **`trackUsage.homePageVisited()`** - Track homepage visit
- **`trackUsage.adhdQuestionnaireStarted()`** - Track ADHD start
- **`trackUsage.adhdQuestionnaireCompleted()`** - Track ADHD completion
- **`trackUsage.adhdPdfDownloaded()`** - Track ADHD PDF download
- **`getAnalyticsSummary()`** - Get formatted analytics string
- **`exportAnalytics()`** - Export raw JSON data
- **`resetAnalytics()`** - Clear all data (for testing)

### 💾 Data Storage

- **Location**: Browser localStorage only
- **Key**: `neurodiversity-screener-analytics`
- **Format**: JSON with timestamps
- **Privacy**: No external services, data stays on user's device

### 🔧 Integration

Analytics are automatically integrated into:
- ✅ Homepage (page visits, PDF downloads, sessions)
- ✅ ADHD/Autism info pages (page visits)
- ✅ Questionnaire pages (starts/completions)
- ✅ All PDF download buttons

### 🎯 Use Cases

1. **Development**: See which features get used most
2. **Iteration**: Track completion rates to improve UX  
3. **Growth**: Monitor total users and engagement over time
4. **A/B Testing**: Compare different versions or features

### 📝 Example Console Commands

```javascript
// Quick stats check
JSON.parse(localStorage.getItem('neurodiversity-screener-analytics'))

// View formatted analytics
console.log(/* use getAnalyticsSummary() */);

// Reset for testing
localStorage.removeItem('neurodiversity-screener-analytics');
```

---

**Note**: This is a simple client-side tracking system. For production analytics, consider integrating with services like Google Analytics, PostHog, or Mixpanel. 