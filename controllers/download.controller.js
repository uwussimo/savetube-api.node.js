const fs = require("fs");
const ytdl = require("ytdl-core");
const { env } = require("../config");
const cliProgress = require("cli-progress");
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

const downloadFromYouTube = (req, res, next) => {
  const url = req.body.url;
  const myregexp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
  const match = myregexp.exec(url);
  console.log(match);
  if (match) {
    progressBar.start(100, 0);
    const video = ytdl("http://www.youtube.com/watch?v=" + match[1], {
      filter: "audioandvideo",
      quality: "highest",
    });
    const fileName = match[1] + ".mp4";
    const filePath = `${__dirname}/../public/uploads/yt/${fileName}`;
    const file = fs.createWriteStream(filePath);
    video.pipe(file);

    video.on("data", function (buffer) {
      var segmentLength = buffer.length;
      progressBar.increment(segmentLength / 100000);
    });
    video.on("end", () => {
      progressBar.stop();
      res.status(201).json({
        statusCode: 201,
        message: "File downloaded successfully",
        file_url: `${env.URL}/uploads/yt/${fileName}`,
      });
    });
  } else {
    res.status(400).json({
      statusCode: 400,
      message: "Invalid YouTube URL parameter",
    });
  }
};

module.exports = { downloadFromYouTube };
