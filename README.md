# OverAchiever: A study-your-own-way-app

This application allows users to create, read, update and delete flash cards to help them study for any topic they choose.

## Setup Steps for front-end React application
1. Fork and Clone this repository.
2. Rename the cloned repo.
3. 'cd' into the newly renamed cloned repo.
4. Run NPM install.
5. Run 'npx create-react-app <my-app>'
6. npm start

## Important Links
- [Deployed Api]()
- [Api Repo]()
- [Deployed Client]()

## Planning
- When brainstorming about this project, I considered that I wanted to experiment with using Django and Python on my back-end, so I wanted a fairly simple project concept with which to work. I kept with the theme of a majority of my projects (education) and thought of something I would want to use in a learning environment: flash cards! To plan out the nitty gritty of the front-end, I used a an online Miro board, a physical white board, Figma online, and regular old post-its.
- When developing the front-end, I ran into bugs on my axios calls and how I was passing along data through the appropriate routes. I used a combination of strategies and dev tools to squash these bugs. On the back end, I printed data that would display on my pthon developer server. On the front-end, I console.logged data to review in my browser console and network dev tools.
![React_planning_p4](https://media.git.generalassemb.ly/user/27368/files/afb3b100-fc25-11ea-95d6-e254648d6b58)

---

## User Stories
1. User must be able to create a new deck
2. User must be able to update a deck
3. User must be able to delete a deck
4. User must be able to view a single or multiple decks.
5. User must be able to create a new card in a deck.
6. User must be able to update a card in a deck.
7. User must be able to delete a card in a deck.
8. User must be able to view a single or multiple cards in a deck.
9. User must be able to sign up.
10. User must be able to sign in.
11. User must be able to change password.
12. User must be able to sign out.

## Technologies Used
- Node js
- React js
- Javascript
- HTML
- CSS/Sass
- Django
- Python

## Catalog of Routes
Verb         |	URI Pattern
------------ | -------------
GET | /decks
GET | /decks/:id
POST | /decks
PATCH | /decks/:id
DELETE | /decks/:id
GET | /cards
GET | /cards/:id
POST | /cards
PATCH | /cards/:id
DELETE | /cards/:id
GET | /sign-in
POST | /sign-up
PATCH | /change-pw
DELETE | /sign-out

## Unsolved Problems
- Still need to... route all of my secondary resource (Card) CRUD actions.
- Would eventually like to... set up animations to 'flip' to the back of a card when scrolling through the modal that reveals all cards one-at-a-time. The modal would include buttons that trigger the 'update' and 'delete' events on a single card as well as a button to trigger the card-flip animation.

## Images
#### Wireframes:
![Screen Shot 2020-09-16 at 8 47 36 AM](https://media.git.generalassemb.ly/user/27368/files/17b4c800-fc23-11ea-8114-dca1816082bb)
#### ERD:
![Screen Shot 2020-09-16 at 8 47 55 AM](https://media.git.generalassemb.ly/user/27368/files/5fd3ea80-fc23-11ea-80d2-f12a73c17bc0)
#### App screenshots:
![Screen Shot 2020-09-21 at 4 01 44 PM](https://media.git.generalassemb.ly/user/27368/files/eb4d7b80-fc23-11ea-85ef-160e15d7461b)
![Screen Shot 2020-09-21 at 4 02 04 PM](https://media.git.generalassemb.ly/user/27368/files/f99b9780-fc23-11ea-8a00-16f12b2770f5)