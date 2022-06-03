<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="./public/favicon.svg" alt="Logo" width="80" height="80">

  <h3 align="center">Netflix Search Clone - Web App</h3>

  <p align="center">
    A technology blog web application
    <br />
    <a href="https://netflix-eliasjz36.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#storybook">Storybook</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

An application for searching movies and series that allows for a dynamic search of the data provided by the IMDB API

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

#### Install the lastest version of `NPM`

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a free account in [https://imdb-api.com/](https://imdb-api.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/eliasjz36/netflix.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your IMDB **API KEY** in a `.env` file
   ```js
   NEXT_PUBLIC_IMDB_API_KEY = 'ENTER YOUR API KEY HERE';
   ```
5. Run the app
   ```sh
    npm run dev
   ```

### Testing

To test the application locally with jest and react testing library, run the following command:

```sh
npm run test
```

To run e2e tests with cypress, run the following command:

```sh
npm run cypress
```

### Storybook

To run storybook, run the following command:

```sh
npm run storybook
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Elias Jimenez - [elias-jimenez](https://www.linkedin.com/in/elias-jimenez/) - bseliasjimenez14@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>
