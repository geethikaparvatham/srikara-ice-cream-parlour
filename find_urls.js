const fs = require('fs');
const content = fs.readFileSync('C:/Users/PARVATHAM GEETHIKA/.gemini/antigravity/brain/3572df05-f2f3-4f8f-a571-5f8cc73292e6/.system_generated/steps/1894/content.md', 'utf8');
const urls = content.match(/https:\/\/[^\"\'\\]+/g) || [];
for (const u of new Set(urls)) {
    if (u.includes('video') || u.includes('mp4') || u.includes('kapwing.com/v') || u.includes('cdn')) {
        console.log(u);
    }
}
