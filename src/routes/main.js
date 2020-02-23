import {Component, Fragment} from 'preact'
import style from './main.less'
import RedditFeed from "../components/redditfeed";
import Split from "../components/split";

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <p>
                    Firefox's Tracking Protection needs to be disabled for this webapp to work.
                </p>
                <Split>
                    <RedditFeed url={"https://www.reddit.com/r/COVID19/hot.json"}
                                description={"The 'most scientific' and most reliable of the Coronavirus subreddit trio. Requires reliable sources for everything posted there."}
                                refreshRate={300000}/>
                    <RedditFeed url={"https://www.reddit.com/r/coronavirus/hot.json"}
                                description={"The news subreddit of the Coronavirus subreddit trio. Expect sensationalized titles and some false information."}
                                refreshRate={300000}/>
                    <RedditFeed url={"https://www.reddit.com/r/China_Flu/hot.json"}
                                description={"The most casual of the Coronavirus subreddit trio. Expect anecdotal information, fake news, and general low post quality."}
                                refreshRate={300000}/>
                </Split>
                <Split>
                    <RedditFeed url={"https://www.reddit.com/r/Science/hot.json"}
                                description={"A generic science subreddit which may or may not contain Coronavirus threads. Usually has a very high post quality."}
                                refreshRate={300000}/>
                    <RedditFeed url={"https://www.reddit.com/r/AskScience/hot.json"}
                                description={"A subreddit where anyone can ask questions and get answers by qualified scientists in that field. May or may not contain Coronavirus threads."}
                                refreshRate={300000}/>
                </Split>
            </Fragment>
        )
    }
}
