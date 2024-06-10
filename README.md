# HypnoInsight

### How to Install
1.  Open your terminal.   
2.  To install client side, run: 
```
git clone https://github.com/dimple-dhawan/dimple-dhawan-capstone.git
cd dimple-dhawan-capstone/hypnoinsight
npm install
npm install sass
npm install axios
npm install react-router-dom
```

4.  Make a copy of the .env.sample and name it .env and fill in the required information.

5.  run: 
`npm start`

6.  Install server side, run:
```
cd ../hypnoinsight-api
npm install
npm install dotenv
npm install knex
npm install express
```

7.  Create a schema in mysqlWorkbench.  

8.  Make a copy of the .env.sample and name it .env and fill in the required information.

9.  run:
```
npx knex migrate:up
npx knex migrate:latest
npxnpm  knex seed:run
```

10.  run: 
`npm start`


### Overview 
 This application will save hypnotherapist time in pre-talk, and educate potential clients in hypnosis, to elminate any misconceptions and myths about hypnosis such that we can increase the likelihood that clients will be primed, ready and are serious about achieving their goals through hypnosis.  

### Description
This application will education potential clients on what hypnosis is and is not and help them have a better understanding of this healing modality.

The application will collect the first name, last name, email and interests from the user.  
This information will help the hypnotist to understand the high level needs of the potential client to understand which tranformative tools and/or package would be best suited to help empower and heal the potential client.

### Problem
Clinical Hypnotists generally book a consultation before starting any hypnosis sessions. This is done to:

1.  Ensure the client is ready and willing to do the work and go through the process required to transform and heal.
2.  Ensure the client is coming with acceptable and empowering motivsation and intentions.

This process helps the hypnotherapist to weed out any potential clients that don't really want to change and tranform, or aren't a good fit for hypnosis.

This will help hypnotherapists save time from taking on clients that aren't ready or serious to make the changes required to transform their lives. This will automate the consultation process, saving hpnotherapist time and potential client's money.

### User Profile
The user of this app is two-fold:

1.  The potential clients and those seeking more information on hypnosis.
2.  The hypnotherapist who may be taking on new clients.

### Features
List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- The user/potential client will be able to determine if they are a good candidate for hypnosis now
- The user/potential client will understand what hypnosis is and is not
- The user/hypnotist will be able to determine if the potential client is ready for change through hypnosis and/or related healing modalities

## Implementation

### Tech Stack
The tech stack includes:
- React
- MySQL
- Express
- Client libraries
  - react
  - react-router
  -axios
- Server libraries
  - knex

### APIs
- Internal API
- No external APIs will be used

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page
- Service page
- Book now page
- Is Hypnosis right for me? Pre-screening -- app
- Dispelling myths and misconceptions about Hypnosis -- Pre-talk module

### Mockups

#### Home Page
![](/hypnoinsight-api/assets/pages/landing.jpg)

#### Healing Modalities/Services Page
![](/hypnoinsight-api/assets/pages/healing-modalities.jpg)

#### Healing Modality Details Page
![](/hypnoinsight-api/assets/pages/healing-modality.jpg)

#### Is Hypnosis right for me? Pre-screening Page
![](/hypnoinsight-api/assets/pages/hypno-ready-checklist.jpg)

#### What is hypnosis? Pre-talk Page
![](/hypnoinsight-api/assets/pages/pretalk-module.jpg)


## Data

### User info, page and pre-talk
![](assets/schema/Users.png)

### Tools and issues
![](assets/schema/healing-modalities.png)


### Endpoints
- /hypnoinsight
  - HypnoInsight Learning Module

  - /hypnoinsight/facts
  - Facts section in the HypnoInsight Learning Module

  - /hypnoinsight/myths
  - Myths section in the HypnoInsight Learning Module

  - /hypnoinsight/did-you-know
  - Myths section in the HypnoInsight Learning Module

  - /interests
  - List of interest options in HypnoInsight Learning Module

  - /tools
  - List of offered tools
  - For future implementation

- HTTP GET:
  - website data for landing, services and booking page
- HTTP POST
  - save user data

  
### Auth
No authorization 

## Roadmap
- Research and plan out gamify the HypnoInsight app
- Create client
  - react project with routes and boilerplate pages
- Create server
  - express project with routing, with placeholder 200 responses
- Create migrations
- Create home page
- Create services page
- Create book now  
- Feature: HypnoPrep
    - gamify - education module 
    - save info


## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

1.  Send confirmation email that data is saved
2.  Send to book after completing Is hyposis right for me now? module
3.  HTTP PUT to update update user data
4.  Mood Tracker
    - Track anxiety levels before and after anxiety reducting activity
    - select from a few different technique
5.  Free downloadable self-hypnosis mp3 on completion of HypnoPrep module
and quiz
6.  Free consultation on completion of HypnoPrep module.