# S_PTecn_D_SFact24_G

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). As a package manager, we are using [bun](https://bun.sh).

## Getting Started

* You can run the development server with the following command: ```bun dev```. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

* To build the app, you can use the following command: ```bun build```.

* To run the built app, you can use the following command: ```bun start```.

## Deployment

We are using ```output:"standalone"``` in the ```next.config.ts``` to make the app a standalone app.

Then we are creating a docker image of the app for easy deployment.

To run the docker image, you can use the following command:

### TODO Pending Create the Dockerfile

```bash
docker run -d -p 3000:3000 s_ptecn_d_sfact24_g
```


## Authors

* [**HugoVizcainoSantana**](https://github.com/HugoVizcainoSantana): Developer
