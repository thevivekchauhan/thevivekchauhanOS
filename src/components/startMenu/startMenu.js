import { IconButton } from "@fluentui/react";
import { useConst, useBoolean } from "@fluentui/react-hooks";
import React from "react";
import "./startMenu.scss";
import ContextMenu from "../contextMenu/power.contextmenu";
import { useDispatch, useSelector } from "react-redux";
import { setSystemState } from "../../utils/actions/system.action";
import { handleApplicationClick } from "../../utils/actions/app.action";
import user from "../../utils/data/user.config";
import SocialBlock from "../base/socialBlock";
import AppIcon from "../base/appIcon";
import projectConfig from "../../utils/data/project.config";

function StartMenu() {
	const [
		showPowerMenu,
		{ setTrue: onShowPowerMenu, setFalse: onHidePowerMenu },
	] = useBoolean(false);

	const dispatch = useDispatch();
	const handleIconClick = (app) => {
		dispatch(handleApplicationClick(app));
	};
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	const appState = useSelector((state) => state.appState);

	const menuProps = useConst({
		shouldFocusOnMount: true,
		items: [
			{
				key: "lock",
				iconProps: { iconName: "Lock" },
				text: "Lock",
				onClick: () => dispatch(setSystemState("isLocked"))
			},
			{
				key: "shutDown",
				iconProps: { iconName: "PowerButton" },
				text: "Shut Down",
				onClick: () => dispatch(setSystemState("isShutDown"))
			},
			{
				key: "admin",
				iconProps: { iconName: "Admin" },
				text: "Admin",
				onClick: () => window.open("https://www.youtube.com/@theVivekChauhan", "_blank")
			},
		],
	});

	return (
		<div id="start-menu" uk-offcanvas="overlay: false">
			<div className="uk-offcanvas-bar start-menu uk-flex uk-padding-remove">
				<div className="start-quick-actions">
					<IconButton
						iconProps={{ iconName: "PowerButton" }}
						title="Power"
						ariaLabel="Power"
						className=" quick-action-button uk-position-bottom"
						menuProps={menuProps}
					/>
					{showPowerMenu && (
						<ContextMenu
							onShowPowerMenu={onShowPowerMenu}
							onHidePowerMenu={onHidePowerMenu}
						/>
					)}
				</div>
				<div className="start-app-list uk-margin-medium-top uk-margin-small-right ">
					<ul className="uk-list start-menu-list">
						{appState.apps.map((app, index) => {
							return (
								<li
									className="start-menu-list-item uk-border-rounded"
									onClick={() => handleIconClick(app)}
									key={index}
								>
									{app.icon !== undefined &&
										app.icon !== null &&
										app.icon !== "" && (
											<img
												src={app.icon}
												width="25"
												height="25"
												alt={app.name}
												className="uk-img uk-margin-small-right"
											/>
										)}
									{app.name}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="start-tiles uk-background-secondary">
					<div className="profile-card uk-card uk-card-body uk-margin-medium-top uk-margin-medium-left uk-margin-medium-right uk-border-rounded uk-text-center">
						{user.userImage !== undefined &&
							user.userImage !== null &&
							user.userImage !== "" && (
								<img
									src={user.userImage}
									width="80"
									height="80"
									alt={user.firstName}
									className="uk-img profile-card-img"
								/>
							)}
						<p className="uk-text-center">Hi, {user.firstName}</p>
						<SocialBlock />
					</div>
					<div className="start-menu-tiles uk-child-width-1-3">
						{appState.apps.map((app, index) => {
							return <AppIcon appInfo={app} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartMenu;
