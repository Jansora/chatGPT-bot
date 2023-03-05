import React from 'react';
import StyledHeader from "@jansora/material/es/components/styled/StyledHeader";
import FlexPadding from "@jansora/material/es/components/styled/base/FlexPadding";
// import User from "@jansora/material/es/../view/user";
import GetTitle from "@jansora/material/es/hooks/getter/GetTitle";
import GetDescription from "@jansora/material/es/hooks/getter/GetDescription";
import {Header as HeaderA, Icon} from "semantic-ui-react";
import {Divider, Popover, Space} from 'antd';
import {GithubOutlined} from "@ant-design/icons";

// import Theme from "./Theme";
import {useResponsive} from "ahooks";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import StyledColorText from "@jansora/material/es/components/styled/base/StyledColorText";
import StyledA from "@jansora/material/es/components/styled/StyledA";
import StyledIconFont from "@jansora/material/es/components/styled/StyledIconFont";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:03:45 <br>
 * @since 1.0 <br>
 */



const MaterialHeader = () => {
    const responsive = useResponsive();
    const title = GetTitle();
    const description = GetDescription();
    const dark = GetDarkMode();

    return <StyledHeader>

        <StyledA href="https://www.jansora.com" style={{margin: 0}}>
            <img style={{height: 30, marginRight: 0, marginTop: 10}} src={`https://cdn.jansora.com/logo/${dark ? 'black' : 'main'}.png`}  alt="logo" />
        </StyledA>

        {
            title && <React.Fragment>
                <Icon style={{margin: "0 10px 5px 10px"}} name="triangle right" inverted={dark} />
                <HeaderA as="h4" inverted={dark} style={{marginTop: 15}}>

                    {title}

                </HeaderA>
            </React.Fragment>
        }

        {
            description && <React.Fragment>
                <Icon style={{margin: "0 10px 5px 10px"}} name="triangle right" inverted={dark} />
                <StyledColorText>{ description }</StyledColorText>
            </React.Fragment>
        }

        <FlexPadding />

            <Space >
      {
        <>
            <Divider type="vertical"/>
            <StyledA href={"https://github.com/Jansora/chatbot"}>
              <GithubOutlined style={{fontSize: 16}} />
            </StyledA>
            {/*<Divider type="vertical"/>*/}


          </>
      }

    </Space>
    </StyledHeader>;
}

export default MaterialHeader;