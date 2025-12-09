const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'dist', 'vercel.json');
try {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log('Removed', file);
  } else {
    console.log('No dist/vercel.json to remove');
  }
} catch (err) {
  console.error('Failed to remove dist/vercel.json:', err);
  process.exit(0);
}
