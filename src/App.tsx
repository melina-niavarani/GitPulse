import { Octokit } from "octokit";

import Header from "./components/Header/Header"
import Body from "./components/Body/Body";

const personal_token = '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'

const octokit = new Octokit({ auth: personal_token });

// const {
//     data: { login },
//   } = await octokit.rest.users.getAuthenticated();
//   console.log("Hello, %s", login);

export function App() {
    return (
        <div>
            <body>
                <Header/>
                <Body/>
            </body>
        </div>
    )
}

