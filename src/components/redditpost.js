import {Component, Fragment} from 'preact'
import style from "./redditpost.less"

export default class RedditPost extends Component {
    render() {
        return (
            <blockquote class={style.redditpost}>
                <div class={style.title}>
                    <a href={`https://reddit.com${this.props.data.permalink}`}>{this.props.data.title}</a>
                </div>
                <div class={style.info}>
                    {
                        this.props.data.link_flair_text ?
                        <Fragment>
                            <span className={style.flair}>
                                {this.props.data.link_flair_text}
                            </span>&nbsp;•&nbsp;
                        </Fragment> : ""
                    }
                    <span className={style.subreddit}>
                        {this.props.data.subreddit_name_prefixed}
                    </span>&nbsp;•&nbsp;
                    <span className={style.author}>
                        u/{this.props.data.author}
                    </span>&nbsp;•&nbsp;
                    <span className={style.score}>
                        {this.props.data.ups}p
                    </span>
                </div>
            </blockquote>
        )
    }
}
