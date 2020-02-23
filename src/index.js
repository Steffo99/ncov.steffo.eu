import "preact/debug";

// noinspection ES6UnusedImports
import style from "./index.less";
// noinspection ES6UnusedImports
import _manifest from "./meta/manifest.json";
// noinspection ES6UnusedImports
import _cname from "./meta/CNAME";
// noinspection ES6UnusedImports
import _nojekyll from "./meta/.nojekyll";

import { Component, Fragment } from 'preact';
import { route, Router } from 'preact-router';
import { createHashHistory } from 'history';

import Main from "./routes/main";

export default class Index extends Component {
	render() {
		return (
			<Fragment>
				<h1>Steffo's 2019-nCov Social Media Tracker</h1>
				<Router history={createHashHistory()}>
					<Main path={"/"}/>
					<div default>404 Not Found</div>
				</Router>
			</Fragment>
		)
	}
}
