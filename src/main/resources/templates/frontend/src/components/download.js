// server.js or your backend route file
const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.get('/download', async (req, res) => {
    const videoUrl = req.query.url;

    if (!ytdl.validateURL(videoUrl)) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    const videoInfo = await ytdl.getInfo(videoUrl);
    const title = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9 ]/g, ""); // Clean title for filename

    res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
    ytdl(videoUrl, { format: 'mp4' }).pipe(res);
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
