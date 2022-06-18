# SaveTube v0.1.0

**Social Media Video Downloader API using NodeJS!**

ソーシャルメディアビデオダウンローダー API

![Banner](./public/src/img/header.png "saveTube Banner")

This application provides API to download videos from `YouTube`, `TikTok` and `Instagram` and even more.

## Table of Contents

- [SaveTube v0.1.0](#savetube-v010)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [API Docs](#api-docs)
    - [Download highest quality video from YouTube](#download-highest-quality-video-from-youtube)
    - [Download video with watermark and no watermark and audio files from TikTok](#download-video-with-watermark-and-no-watermark-and-audio-files-from-tiktok)
  - [Todo](#todo)
  - [Sponsors](#sponsors)
    - [List of Sponsors](#list-of-sponsors)

## Installation

**Clone the repo:**

```git
git clone git@github.com:MrAbdurakhimov/savetube-api.node.js.git
```

**Install using** [`yarn`](https://yarnpkg.com/getting-started/install)

```yarn
yarn
```

**Setup** `.env` **file using** `.env` **public example file:**

**Then run the application in development or in production mode:**

```yarn
yarn dev
```

```yarn
yarn start
```

## API Docs

Download Options:

### Download highest quality video from YouTube

- URL: `/download/yt/`
- METHOD: `POST`
- Request body:

  ```JSON
  {
    "url": "Any YouTube URL"
  }
  ```

### Download video with watermark and no watermark and audio files from TikTok

- URL: `/download/tt/`
- METHOD: `POST`
- Request body:

  ```JSON
  {
    "url": "Any TikTok URL"
  }
  ```

## Todo

- [x] Download from YouTube
  - [ ] With audio, video and quality options
- [ ] Save Download video id to Application Database for fast download
- [ ] Download from Instagram
- [x] Download video from TikTok
  - [x] With watermark
  - [x] Without Watermark
- [ ] Auth Based download with `API Token`
- [ ] Download from LinkedIn

## Sponsors

[Sponsore the project 🤍](https://payme.uz/@codeflow)
