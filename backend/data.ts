// // console.log("Hello via Bun!");
// require("dotenv").config();
// const express = require("express");
// const app = express();
// const github = {
//   login: "signature13s",
//   id: 156530254,
//   node_id: "U_kgDOCVR2Tg",
//   avatar_url: "https://avatars.githubusercontent.com/u/156530254?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/signature13s",
//   html_url: "https://github.com/signature13s",
//   followers_url: "https://api.github.com/users/signature13s/followers",
//   following_url:
//     "https://api.github.com/users/signature13s/following{/other_user}",
//   gists_url: "https://api.github.com/users/signature13s/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/signature13s/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/signature13s/subscriptions",
//   organizations_url: "https://api.github.com/users/signature13s/orgs",
//   repos_url: "https://api.github.com/users/signature13s/repos",
//   events_url: "https://api.github.com/users/signature13s/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/signature13s/received_events",
//   type: "User",
//   user_view_type: "public",
//   site_admin: false,
//   name: "Mukul k Sahu",
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: "Cross-platform Android & IOS React native developer l Experienced Freelancer Specialising in 3D Model & Animation l Frontend web developer l CSE Undergraduate. ",
//   twitter_username: null,
//   public_repos: 21,
//   public_gists: 0,
//   followers: 6,
//   following: 5,
//   created_at: "2024-01-13T15:38:37Z",
//   updated_at: "2025-11-06T17:13:48Z",
// };

// app.get("/", (req: any, res: any) => {
//   res.send("Hello World!");
// });
// app.get("/twitter", (req: any, res: any) => {
//   res.send("Hello Twitter!");
// });
// app.get("/login", (req: any, res: any) => {
//   res.send("you cannot login");
// });
// app.get("/github", (req: any, res: any) => {
//   res.json(github);
// });
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`);
// });
