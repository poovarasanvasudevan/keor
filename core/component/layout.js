import React, {
    Component,
    Fragment,
    type ComponentType,
    type Node,
} from 'react';
import {
    ContainerHeader,
    GlobalNav,
    GroupHeading,
    HeaderSection,
    Item as ItemComponent,
    ItemAvatar,
    MenuSection,
    Separator,
    Wordmark,
    GlobalItem,
    LayoutManager,
    NavigationProvider,
} from '@atlaskit/navigation-next';
import AppsIcon from './icons/Apps'
import {DropdownItemGroup, DropdownItem} from '@atlaskit/dropdown-menu';
import HelpIcon from "./icons/Help";
import SearchIcon from "./icons/Search";
import AddIcon from "./icons/Add";
import LogoIcon from "./icons/logo";
import Badge from '@atlaskit/badge';
import {
    DropdownMenuStateless,
} from '@atlaskit/dropdown-menu';
import Drawer from '@atlaskit/drawer';
import Link from 'next/link'
import {EventSourcePolyfill} from 'event-source-polyfill';
import Router from 'next/router'
import TicketIcon from "./icons/Tickets";
import TextField from '@atlaskit/textfield';
import SettingIcon from "./icons/Settings";
import DatabaseIcon from "./icons/Database";
import {gridSize as gridSizeFn} from '@atlaskit/theme';
import ArrowLeftIcon from "./icons/ArrowLeft";
import Tooltip from '@atlaskit/tooltip';
import styled from 'styled-components';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import Item, {ItemGroup} from '@atlaskit/item';
import DropList from '@atlaskit/droplist';
import Navigation, {
    AkContainerNavigationNested,
    AkGlobalItem,
    AkCreateDrawer,
    AkCustomDrawer,
    AkNavigationItem,
    AkSearchDrawer,
    presetThemes,
    SkeletonDefaultContainerHeader,
    SkeletonContainerItems,
} from '@atlaskit/navigation';
import BellIcon from "./icons/Bell";

type GlobalItemWithDropdownProps = {
    items: Node,
    trigger: ComponentType<{ isOpen: boolean }>,
};
type GlobalItemWithDropdownState = { isOpen: boolean };
const gridSize = gridSizeFn();
import appcss from '../style/app.css'
import Avatar from "@atlaskit/avatar";


const SkeletonItemsWrapper = styled.div`
  padding-right: ${gridSize * 3}px;
`;

const BackIcon = (
    <Tooltip position="right" content="Back">
        <ArrowLeftIcon primaryColor="#000000" label="Back icon" size="medium"/>
    </Tooltip>
);

const ContainerHeaderComponent = ({stackLength, goBackHome,}: { stackLength: number, goBackHome: () => mixed, }) => (
    <div key={1}>
        <SkeletonDefaultContainerHeader/>
        {stackLength > 1 ? (
            <AkNavigationItem
                icon={<ArrowLeftIcon label="Add-ons icon"/>}
                onClick={() => goBackHome()}
                onKeyDown={(event: KeyboardEvent) => {
                    if (event.key === 'Enter') {
                        goBackHome();
                    }
                }}
                text="Add-ons"
            />
        ) : null}
    </div>
);

const GlobalSearchIcon = ({openDrawer}: { openDrawer: string => void }) => (
    <Tooltip content="Search Icon" position="right">
        <AkGlobalItem size="medium" onClick={() => openDrawer('search')}>
            <SearchIcon/>
        </AkGlobalItem>
    </Tooltip>
);

const DefButton = ({icon}) => {
    <Tooltip content="Search Icon" position="right">
        <AkGlobalItem size="medium">
            <icon/>
        </AkGlobalItem>
    </Tooltip>
};


const GlobalCreateIcon = ({openDrawer}: { openDrawer: string => void }) => (
    <Tooltip content="Create Icon" position="right">
        <AkGlobalItem size="medium" onClick={() => openDrawer('create')}>
            <AddIcon/>
        </AkGlobalItem>
    </Tooltip>
);

const TicketDrawerIcon = ({openDrawer}: { openDrawer: string => void }) => (
    <Tooltip content="Custom Drawer Icon" position="right">
        <AkGlobalItem size="medium" onClick={() => openDrawer('custom')}>
            <TicketIcon/>
        </AkGlobalItem>
    </Tooltip>
);


export default class AppLayout extends React.Component<*, *> {
    state = {
        isOpen: false,
        isListOpen: false,
        menuLoading: true,
        openDrawer: null,
        stack: [<SkeletonContainerItems/>],
        width: this.props.width,
    };

    componentDidMount(): void {
    }

    getStarCustomDrawer = () => (
        <AkCustomDrawer
            backIcon={BackIcon}
            isOpen={this.state.openDrawer === 'custom'}
            key="custom"
            primaryIcon={<LogoIcon label="Confluence icon" size="large"/>}
            header={<SkeletonDefaultContainerHeader isAvatarHidden/>}
            onBackButton={this.closeDrawer}
        >
            <SkeletonItemsWrapper>
                <SkeletonContainerItems itemTextWidth="100%"/>
            </SkeletonItemsWrapper>
        </AkCustomDrawer>
    );

    getSearchDrawer = () => (
        <AkSearchDrawer
            backIcon={BackIcon}
            isOpen={this.state.openDrawer === 'search'}
            key="search"
            primaryIcon={<LogoIcon label="Confluence icon" size="large"/>}
            onBackButton={this.closeDrawer}
        >
            <SkeletonItemsWrapper>
                <SkeletonContainerItems itemTextWidth="100%"/>
            </SkeletonItemsWrapper>
        </AkSearchDrawer>
    );

    getCreateDrawer = () => (
        <AkCreateDrawer
            backIcon={BackIcon}
            isOpen={this.state.openDrawer === 'create'}
            key="create"
            primaryIcon={<LogoIcon label="Confluence icon" size="large"/>}
            onBackButton={this.closeDrawer}
        >
            <SkeletonItemsWrapper>
                <SkeletonContainerItems itemTextWidth="100%"/>
            </SkeletonItemsWrapper>
        </AkCreateDrawer>
    );

    openDrawer = (name: string) => {
        console.log(`on ${name} drawer open called`);

        this.setState({
            openDrawer: name,
        });
    };

    closeDrawer = () => {
        this.setState({
            openDrawer: null,
        });
    };

    resize = (resizeState: { isOpen: boolean, width: number }) => {
        console.log('onResize called');
        this.setState({
            isOpen: resizeState.isOpen,
            width: resizeState.width,
        });
    };

    goBackHome = () => {
        if (this.state.stack.length <= 1) {
            return false;
        }

        const stack = this.state.stack.slice(0, this.state.stack.length - 1);
        return this.setState({stack});
    };

    onClick = () => {
        this.setState({
            eventResult: 'onClick called',
            isListOpen: !this.state.isOpen,
        });
    };
    onOpenChange = () => {
        this.setState({
            eventResult: 'onOpenChange called',
            isListOpen: false,
        });
    };

    render() {
        return (
            <Page
                navigation={
                    <Navigation
                        drawers={[
                            this.getSearchDrawer(),
                            this.getCreateDrawer(),
                            this.getStarCustomDrawer(),
                        ]}
                        containerTheme={presetThemes.global}
                        containerHeaderComponent={() => (
                            <ContainerHeaderComponent
                                stackLength={this.state.stack.length}
                                goBackHome={this.goBackHome}
                            />
                        )}
                        globalPrimaryIcon={
                            <div onClick={() => Router.push('/')}>
                                <LogoIcon label="Confluence icon" size="large"/>
                            </div>
                        }

                        globalPrimaryActions={[
                            <GlobalSearchIcon openDrawer={this.openDrawer}/>,
                            <GlobalCreateIcon openDrawer={this.openDrawer}/>,
                            <Tooltip content="Datastore" position="right">
                                <AkGlobalItem size="medium" onClick={() => Router.push('/database')}>
                                    <DatabaseIcon/>
                                </AkGlobalItem>
                            </Tooltip>
                        ]}

                        globalSecondaryActions={[
                            <Tooltip content="Applications" position="right">
                                <AkGlobalItem size="medium">
                                    <AppsIcon/>
                                </AkGlobalItem>
                            </Tooltip>,
                            <Tooltip content="Notifications" position="right">
                                <AkGlobalItem size="medium">
                                    <BellIcon/>
                                </AkGlobalItem>
                            </Tooltip>,
                            <Tooltip content="Settings" position="right">
                                <AkGlobalItem size="medium" onClick={() => Router.push('/settings')}>
                                    <SettingIcon/>
                                </AkGlobalItem>
                                {/*<DropList*/}
                                {/*appearance="default"*/}
                                {/*isMenuFixed={false}*/}
                                {/*isTriggerNotTabbable*/}
                                {/*onOpenChange={this.onOpenChange}*/}
                                {/*onClick={this.onClick}*/}
                                {/*isOpen={this.state.isListOpen}*/}
                                {/*trigger={<AkGlobalItem size="medium">*/}
                                {/*<SettingIcon/>*/}
                                {/*</AkGlobalItem>}*/}
                                {/*>*/}
                                {/*<ItemGroup>*/}
                                {/*<Item onClick={() => Router.push('/settings')}>System Settings</Item>*/}
                                {/*<Item>Notification Settings</Item>*/}
                                {/*</ItemGroup>*/}
                                {/*</DropList>*/}

                            </Tooltip>,

                            <AkGlobalItem size="medium">
                                <Avatar name="Poovarasan Vasudevan"
                                        src={"https://avatars0.githubusercontent.com/u/8036283?s=400&v=4"} size="small"
                                        presence="online"/>
                            </AkGlobalItem>,
                        ]}

                        isOpen={this.state.isOpen}
                        onResize={this.resize}
                        onResizeStart={e => console.log('resizeStart', e)}
                        width={this.state.width}
                        hasScrollHintTop
                    >
                        <AkContainerNavigationNested stack={this.state.stack}/>
                    </Navigation>
                }
            >
                <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    {this.props.children}
                </div>
            </Page>
        );
    }

}
