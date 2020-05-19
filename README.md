Code Challenge: github repository finder
The goal of this challenge is to build a github repository finder app. Please use the Github GraphQL API Endpoint with the Apollo Client. To prevent you from wasting time to setup the environment: we use Create React App. You only have to insert your [github Authentication Token](https://github.com/settings/tokens/new) in `App.js#11` You can start the app with `npm start` or `yarn start`.
https://developer.github.com/v4/
If you have any questions, don't hesitate to ask. **You don't have to complete all steps**. The challenge is scheduled for 90 minutes. Have fun! We are curious to see your result.
## Step 1
Display a search field. The user uses this field to search for a repository. Depending on the query, the app suggests possible repositories and displays their name.
## Step 2
When a repository in the search results is clicked, a card view is created for it. How you chose to display that card is up to you. Each card should have the following information:
- name
- owner with name and picture
- forkCount, watchers, stargazers
## Step 3
Show loading states.
## Step 4
Add the possibility to delete a card.
## Step 5
Save the selected repositories so that the user can see the saved cards on reload.
