<div align="center">
  <a href="https://news-frontend.vercel.app/">
    <div>
      <h1>News</h1>
    </div>
  </a>
  <br>
  <br>
  <div>
    <a href="https://img.shields.io/github/v/tag/stemDaniel/news-backend?color=%2368d391&style=for-the-badge">
      <img src="https://img.shields.io/github/v/tag/stemDaniel/news-backend?color=%2368d391&style=for-the-badge">
    </a>
    <a href="https://img.shields.io/github/license/stemDaniel/news-backend?color=%2368d391&style=for-the-badge">
      <img src="https://img.shields.io/github/license/stemDaniel/news-backend?color=%2368d391&style=for-the-badge">
    </a>
  </div>
  <hr>
</div>

## Introduction

[News](https://news-frontend.vercel.app/) is a website that shows the breaking news and provides some basic functions about it. It was developed to learn about RESTful APIs.

## Front-end

This repository contains the code related to [News Back-end](https://github.com/stemDaniel/news-backend). If you want to see the front-end repository, please check [News Front-end](https://github.com/stemDaniel/news-frontend).

## Features

- See breaking news
- Search for specific news
- Favorite news
- And more!

## Endpoints

| METHOD | PATH                    | SHORT DESCRIPTION            |
| ------ | ----------------------- | ---------------------------- |
| GET    | /news                   | Index breaking news          |
| GET    | /news-by-source/:source | Index news based on a source |
| GET    | /news-by-search/:search | Index news based on a search |
| GET    | /searches               | Index all saved searches     |
| POST   | /searches               | Save a search                |
| DELETE | /searches/:id           | Delete a search              |
| GET    | /starreds               | Index all starred news       |
| POST   | /starreds               | Star a news                  |
| DELETE | /starreds/:id           | Remove a news from starreds  |

## How to run

1. Install project dependencies:

   `npm install` or `yarn install`

2. Run project:

   `npm run dev` or `yarn dev`

## License

MIT © [Daniel Oliveira](https://ondaniel.com.br/)
