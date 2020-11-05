# News Application - Backend

## Introduction

This application is a RESTfull API made with Express and Mongoose to implements some functions complements the [News API](https://newsapi.org/).

## Functions

- Display brazilian trending news (News API native function);
- To group some news by static sections (News API native function);
- To search news (News API native function);
- Users can stars some news to group them such as the browser bookmarks (Implemented by this API);
- Users can save new sections (Implemented by this API);
  - These sections are shared, so when a user changes and saves a new section, everyone else will be able to see it too.

## Running

1. Run `npm install` or `yarn` to download dependencies and generate node_modules folder;
2. Run `npm run dev` or `yarn dev` to start application in development mode.
