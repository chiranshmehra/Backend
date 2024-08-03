require('dotenv').config()
const express = require('express')
const app = express()
const githubData = {
    "login": "chiranshmehra",
    "id": 153501339,
    "node_id": "U_kgDOCSY-mw",
    "avatar_url": "https://avatars.githubusercontent.com/u/153501339?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/chiranshmehra",
    "html_url": "https://github.com/chiranshmehra",
    "followers_url": "https://api.github.com/users/chiranshmehra/followers",
    "following_url": "https://api.github.com/users/chiranshmehra/following{/other_user}",
    "gists_url": "https://api.github.com/users/chiranshmehra/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/chiranshmehra/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/chiranshmehra/subscriptions",
    "organizations_url": "https://api.github.com/users/chiranshmehra/orgs",
    "repos_url": "https://api.github.com/users/chiranshmehra/repos",
    "events_url": "https://api.github.com/users/chiranshmehra/events{/privacy}",
    "received_events_url": "https://api.github.com/users/chiranshmehra/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Chiransh Singh Mehra",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Hello World! I'm Chiransh, a passionate software engineer with expertise in data structures, Python, C++, and DevOps.",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-12-11T09:32:13Z",
    "updated_at": "2024-07-23T11:08:14Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter route')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at home land </h1>')
})

app.get('/youtube', (req , res) => {
    res.send("youtube")
})

app.get('/github', (req,res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})