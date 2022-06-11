# SaveTube - Social Media video downloader API using NodeJS

This application provides API to download videos from `YouTube`, `TikTok` and `Instagram` and even more.

## Installation

1. Clone the repo

```
git clone git@github.com:MrAbdurakhimov/savetube-api.node.js.git
```

2. Install using [`yarn`](https://yarnpkg.com/getting-started/install)

```
yarn
```

3. Setup `.env` file using `.env` public example file:
4. Run the application in development or in production mode

```
yarn dev
```

```
yarn start
```

## API Docs

Download file from youtube:

- URL: `/download/yt/`
- METHOD: `POST`
- Request body: 
  ```JSON
  {
    "url": "any youtube url"
  }
  ```
  
## Todo
- [x] Download from YouTube
  - [ ] With audio, video and quality options
- [ ] Save Download video id to Application Database for fast download
- [ ] Download from Instagram
- [ ] Download video from Instagram
  - [ ] With watermark
  - [ ] Without Watermark
- [ ] Auth Based download with `API Token`
- [ ] Download from LinkedIn
