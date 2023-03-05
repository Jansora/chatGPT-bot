import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
// import Notebook from "./modules/notebook";
// import Play from "./modules/play";
// import CodeHub from "./modules/codehub";
// import Beike from "./modules/beike";
import Chatbot from "@jansora/market-chatbot/lib/chatbot/Chat";
import MaterialHeader from "./header";
import Footer from "./footer";
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Layout = () => {

    const {pathname} = useLocation();


    // SetTitle("Chatbot(OpenAI)")
    return <>

        <Routes >
                       <Route path="/" element={<Chatbot />} />

        </Routes>

        <Footer>
        </Footer>
    </>;
}

export default Layout;