# bot-battlr
This app built using React is a simple tool for custom building your own bot Army.

**Users can do the following with this app:**
- browse through a list of robots.
- view a robot's details.
- enlist a bot into their army.

### How to Use
1. Clone this repository to your local machine. 
2. Ensure you have node.js, npm and json server installed globally. 
3. Navigate to the **bot-battlr** directory and run the following command: `json-server --watch db.json`
4. Install react dependencies on your project directory by running the following command: `npm install && npm start` 
5. Your application will now run in your default browser at **port 8000** http://localhost:8000/
6. You can now test out the app by clicking on one of the robots and try adding them to the top component.
7. You can conribute to this project by forking it, making the necessary changes, pushing to GitHub and creating a pull request. 

### Common errors
You might get an OpenSSL error if you're using Node JS v17 and later versions. To fix this type the following commands: 
`export NODE_OPTIONS=--openssl-legacy-provider` for macOS, Linux or Windows Git Bash.
`set NODE_OPTIONS=--openssl-legacy-provider` for Windows Command Prompt.
`$env:NODE_OPTIONS="--openssl-legacy-provider"` for Windows Power Shell.

### Technologies used 
- React
- Semantic UI 
### Licence
This project is licenced under the [MIT Licence](https://github.com/kev065/bot-battlr/blob/main/LICENSE/).
