
# Infinite Scroll Demo

A simple React JS + Appwrite project to demonstrate infinite scroll paging.


## Demo

https://user-images.githubusercontent.com/46474346/138567055-73e3b9d9-092c-41ea-b361-5039a3b5678e.mp4



## Installation

1. Set up [Appwrite for Web](https://appwrite.io/docs/installation).

2. Open the Appwrite console and create a new project.

3. Navigate to `Database` and add a new `Collection` called `Photos`.

4. Add the following rules and permissions:

#### Rules:

| Label     | Key        | Type      | Required | Array | Default Value |
| :-------- | :--------- | :-------- | :------- | :-------- | :-------- | 
| Username | `username` | Text      | `true`   | false |  |
| Avatar | `avatar` | URL      | `true`   | false | |
| Location | `location` | Text      | `false`   | false | |
| Image | `imageUrl` | URL      | `true`   | false | |

#### Permissions:

Read Access: `*`

Write Access: `*`

3. Clone this repo
```bash
  git clone https://github.com/SakshiUppoor/infinite-scroll-demo.git
  cd infinite-scroll-demo
```

4. Install dependencies
```bash
  npm install
```

5. From the Appwrite console, note down the `API Endpoint`, `Project ID` and `Collection ID` of the `Photos` Collection and enter these in `src/config.js`.

6. The project is ready to run! :rocket:
```bash
  npm start
```
    
## Acknowledgements

 - [Appwrite](https://appwrite.io/) - End-to-end Backend Server
 - [Faker.js](https://github.com/Marak/Faker.js) - Mock user data for demo
 - [Lorem Picsum](https://picsum.photos/) - Mock photos for demo
