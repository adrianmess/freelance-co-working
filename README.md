# Freelance Co-Working

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

##  Client Request's


  * "We just finished remodeling our space. We're really proud of it. We want our online presence to mirror our in-person presence, to attract people that would really enjoy working in our environment."
  * "We want our space--no, our whole company--to feel a little luxurious, cool, and high-end; yet still absolutely 100% welcoming, approachable and inclusive to anyone and everyone. A safe, comfortable, and productive work environment, you know?"
  * "I also think it's really important convey our unique personality. It's what sets us apart from the 'big guys' in the coworking field. You know, places like WeWork and TechSpace. We think we're more funky, more local, less corporate, and a little more fun."
  * I want to avoid catering to tech. You walk into some of these other coworking spaces, and you only ever see people working on code. That's great, but we'd also love to see artists, daytraders, writers, counselors, more traditional business people--you know, anyone and everyone--in our space."
  * "It should also be easy to see what amenities we have. We have an on-site coffee counter, both communal working areas and private offices, high-speed internet, printing and faxing services, and we usually have a fun, optional activity on Thursday afternoons. Like yoga, maybe a fun complementary food, or like...I don't know, a craft or something?"

#### Client Colors
  * <strong><span style="color:green;"> Green </span></strong>
  * <strong><span style="color:pink;">Pink / Salmon - love</span></strong>
#### Colors to consider
    * <strong><span style="color:gold;">Gold (for luxurious)</span></strong>
    * <strong><span style="color:silver;">Silver</span></strong>
      * Where gold is masculine, silver is considered as feminine energy.
    * Metallic
<br>
<br>
<br>

####  Photo's of working space

<div class="flex-container">
<img src="/src/assets/client-photos/coffee-counter-area.jpg" height="100">
<img src="/src/assets/client-photos/front-entrance-looking-out.jpg" height="100">
<img src="/src/assets/client-photos/front-entrance.jpg" height="100">
<br>
<img src="/src/assets/client-photos/communal-workspace.jpg" height="100">
<br>
<img src="/src/assets/client-photos/one-meeting-area.jpg" height="100">
<img src="/src/assets/client-photos/coffee-counter-area.jpg" height="100">
<div>

#### Client Logo
<br>
<img src="/src/assets/client-photos/logo/love-logo-text-black.png" height="75">
<img src="/src/assets/client-photos/logo/love-child-social-logo-black.png" height="75">
<img src="/src/assets/client-photos/logo/love-group-logo-white.png" height="75" style="background-color:#f6a294;">
<img src="/src/assets/client-photos/logo/love-child-social-logo-white.png" height="75" style="background-color:#f6a294;">
<br>
<br>

#### Custom Icon Logos
<img src="/src/assets/images/logo-green.png">
<img src="/src/assets/images/logo-square-black.png">
<br>
<br>



## Research

* Referenced the top 30 co working spaces for ideas
* Ran accross love child social, which appeared to be the client that supplied the images.
* I started designing my site largely off love child social's site but realized i was realying to much on their designs instead of coming up with my own idea's and creating and using my ideas.
  * after realizing to much of my site was directly influenced from Love Child Social's site i attempted to redesign my site
* Ended up trying to create a modern, somewhat minimalist feel. 

## User Story
* As a user i want to be able to navigate using links in HeaderComponent
* As a user i want the images to and items to resize based on the size of the screen.
* As a user I want to be able to set a tour date
* As a user I want to be able to sign-in
* As a user i want to be able to see Gallery of the co-working spaces
  * As a user i want the gallery to automatically adjust according to the web page space.
* As a user I want to be able to contact them via social media
* As a user I want to see their hours of operation
* As a user I want to see the available plans without have to search for them.   

## Specifications

* Use @media queries to auto resize plans
* Use @media queries to hide/show menu button on header
* Use flex to create auto adjusting grid in gallery
* use scss and mixins to make DRY code.
<br>
<img src="/src/assets/images/README/header.gif">
<br>
<img src="/src/assets/images/README/plans.gif">
<br>
<img src="/src/assets/images/README/gallery.gif">



## Diagram

## Setup/Installation Requirements
#### Pre-requisites

### NPM & Node Installation
* Install Node.js
  * https://www.npmjs.com/get-npm


  * Install Angularcli

      $ npm install -g @angular/cli@1.6.5

### Clone
  * Clone this repo to your local machine from: https://github.com/adrianmess/freelance-co-working

        $ git clone https://github.com/adrianmess/freelance-co-working

Open **freelance-co-working** folder from terminal.

### NPM Installation
      $ npm install

## Start Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* The following command will start the server and automatically open the browser.      
      $ng serve --open

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

- None.

## Technologies Used

* Angular
* Node.js
* Bootstrap 4
* JQuery
* Popper JS
* Prepros - scss to css compiler

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

* GPL

Adrian Messado © 2018

<link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css"><style>


.flex-container {
  display: flex;
}

</style>
