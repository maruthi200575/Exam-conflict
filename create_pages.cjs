const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}
const pages = ['Login', 'Register', 'AdminDashboard', 'ScheduleViewer', 'ConflictHeatmap', 'RealtimeMonitor', 'WhatIfSimulator', 'Profile'];
pages.forEach(page => {
  const file = path.join(pagesDir, `${page}.jsx`);
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, `export default function ${page}() { return <div>${page} Page</div>; }\n`);
  }
});
console.log('Pages created successfully.');
