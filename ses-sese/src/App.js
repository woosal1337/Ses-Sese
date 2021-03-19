import React from "react"
import "./index.css"
import fire from "./fire"

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.buttonHandle = this.buttonHandle.bind(this)
    }

    buttonHandle(event) {
        event.preventDefault()
        if (event.target.id === "paster") {
            fire.database().ref('paster').push(1);
        } else {
            fire.database().ref('ruzgar').push(1);
        }

        console.log(event.target.id)
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
