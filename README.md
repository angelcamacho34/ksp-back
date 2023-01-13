# KSP Test API Example

<p>
  API example for KSP's hiring proccess.
</p>

<br>


## Development Main Languages/Platforms/Libraries

- [NodeJs](https://nodejs.org/es/)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_mexico_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624326&adgroup=115749706303&gclid=Cj0KCQiA2NaNBhDvARIsAEw55hg9rVSmejLQ9ga4DfFb38IuOG6AgntKI3l57ZbQmdC-ShUfJxCbOZwaAm47EALw_wcB)
- [Mongoose](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Express](https://expressjs.com/es/)



## Previus requirements

- nodeJs 12.x or greater.
- npm 6.x or greater.


## Installation

On root folder execute command.

```bash
npm install
```
No more steps are needed for installation.

## Server Execution

Run in your terminal next command

```bash
npm run start
```

After execute last command you will see next message, that indicates server is ready.
```bash
~ server is listening on 3000
```

Afterwards server will be available in your [localhost](http://localhost:3000).

## Server execution using Docker
Also, you can use this server throught Docker, to do this, get to the root folder of this project in your terminal and run the following command to build an image.

```bash
docker build -t back_test .
```
To ensure image was create successfully you might run next command.

```bash
docker images
```
Ensure back_test image are there. Finally, you will be able to run image using next command.
```bash
docker run --publish 3000:3000 back_test
```

Afterwards server will be available in your [localhost](http://localhost:3000).
<br>

Note: If you are using Docker in a Linux distro, probably yo have tu run previus command as sudo.
<br>
Please refer to [Docker Documentation](https://docs.docker.com/engine/install) for further details.


## Usage
This server has a documentation url where you can see the url, endpoints, repsonses and execute calls from that page.
<br>
[Documentation](http://localhost:3000/doc)
<br>

To test endpoints from doc page, you might click "Try it out" button.

<p align="center"><br><img src="https://help.eset.com/ema/2/api/en-US/images/swagg_try1.png" width="300" height="150" /></p>

And then click "Execute" button, and the actual result will be displayed
<p align="center"><br><img src="https://docs.openkm.com/kcenter/Download?node=f1a951fc-d96d-46d3-89db-f9c21d8052ac" width="300" height="150" /></p>


Also, you can directly paste endpoint's name after port in your favorite browser like next link.
<br>
[random](http://localhost:3000/api/random)

<br>

# TroubleShooting
Probably connection to database will be refused due to server's IP must be whitelisted in MongoAtlas, please [contact me](https://wa.me/5215537495981) to add your public IP to it.
