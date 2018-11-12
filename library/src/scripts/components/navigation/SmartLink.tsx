/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import { formatUrl } from "@library/application";
import { NavLinkProps, NavLink } from "react-router-dom";
import { LocationDescriptor } from "history";

export const LinkContext = React.createContext(formatUrl("/", true));

interface IProps extends NavLinkProps {}

export default function SmartLink(props: IProps) {
    return (
        <LinkContext.Consumer>
            {contextRoot => {
                const href = formatUrl(props.to.toString(), true);

                if (href.startsWith(contextRoot)) {
                    let newTo: LocationDescriptor;
                    const newPath = props.to.toString().replace(window.location.origin, "");

                    if (typeof props.to === "string") {
                        newTo = {
                            pathname: newPath,
                        };
                    } else {
                        newTo = {
                            ...props.to,
                            pathname: newPath,
                        };
                    }

                    return <NavLink {...props} to={newTo} />;
                } else {
                    return <a {...props} href={props.to.toString()} />;
                }
            }}
        </LinkContext.Consumer>
    );
}
