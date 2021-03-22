import React from "react"
import "./index.css"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ip: "",
            isVoted: false,
            votedFor: ""
        }
        this.buttonHandle = this.buttonHandle.bind(this)
    }

    buttonHandle(event) {
        event.preventDefault()

        fetch('https://www.cloudflare.com/cdn-cgi/trace').then(res => res.text()).then(data => {
            let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
            let ip = data.match(ipRegex)[0];
            this.setState({
                ip: ip,
                votedFor: event.target.id
            })

            if (event.target.id === "ruzgar") {
                this.setState({
                    votedFor: "ruzgar"
                })
            } else {
                this.setState({
                    votedFor: "paster"
                })
            }

            fetch(`https://ses-sese-api.herokuapp.com/add/${process.env.REACT_APP_API_KEY}=${this.state.ip}=${this.state.votedFor}`).then(res => res.text()).then(data => {
                console.log(data);
            });


        });
    }


    render() {
        return (
            <div>
                <header className="v-header container">
                    <div className="card">
                        <div className="card_image"><img
                            src="https://pbs.twimg.com/profile_images/1210888068951097345/exveNLDs.jpg"/></div>
                        <div className="card_title title-white">
                            <button id="paster" className="a3" onClick={this.buttonHandle}>Vote!</button>
                        </div>
                    </div>

                    <img src="https://woosal.com/1337/kk-background.png" className="kk-image"/>

                    <div className="card">
                        <div className="card_image"><img
                            src="https://yt3.ggpht.com/ytc/AAUvwnjk04rBskmG9iHDFh9tS5nFU9Kmbrk0xRmWpukUOQ=s1024-c-k-c0x00ffffff-no-rj"/>
                        </div>
                        <div className="card_title title-white">
                            <button id="ruzgar" className="a3" onClick={this.buttonHandle}>Vote!</button>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
