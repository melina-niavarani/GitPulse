

import Header from "./components/Header/Header"
import Body from "./components/Body/Body";

import { requestApi } from "./api/requestApi.js";

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

