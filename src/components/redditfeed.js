import {Component} from 'preact';
import Box from "./box";
import Loading from "./loading";
import RedditPost from "./redditpost";
import style from "./redditfeed.less"

export default class RedditFeed extends Component {
    constructor() {
        super();
        this.state = {
            "data": null,
            "interval": null
        };
    }

    componentDidMount() {
        if(this.props.refreshRate >= 30000) {
            this.setState({
                "interval": setInterval(this.getData, this.props.refreshRate)
            });
            this.getData();
        }
        else {
            console.error("RedditFeed refreshRate is lower than 30s, disabling...")
        }
    }

    getData = () => {
        this.setState({
            "data": null
        });
        fetch(this.props.url).then(response => response.json()).then((json) => {
            this.setState({
                "data": json
            });
        })
    };

    render() {
        let contents;

        if(this.state.interval === null) {
            contents = "Disabled"
        }
        else if(this.state.data === null) {
            contents = <Loading/>
        }
        else {
            contents = this.state.data.data.children.map((post) => <RedditPost data={post.data}/>);
        }

        let title_regex = /reddit.com(\/.+)\.json$/;
        let title_match = title_regex.exec(this.props.url);
        let title = title_match[1];
        let left = <a href={`https://reddit.com${title}`}>{title}</a>;

        return (
            <Box left={left}>
                {
                    this.props.description ?
                    <div className={style.description}>
                        {this.props.description}
                    </div> : ""
                }
                <div className={style.posts}>
                    {contents}
                </div>
            </Box>
        )
    }
}
