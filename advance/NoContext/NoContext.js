class ThemeBorderBackground extends React.Component {
    render() {
        return (<div className={'bt bt' + this.props.theme + ' bg' + this.props.theme}>
            {this.props.children}
        </div>);
    }
}




class ThemeButton extends React.Component {
    render() {
        return (<div>
            <button className={"button button-" + this.props.theme}>{this.props.label}</button>
        </div>);
    }
}


class ThemeDialouge extends React.Component {
    render() {
        return (<div>
            <h1 className={"dialog-title"}>{this.props.title}</h1>
            <div className={"dialog-message"}>{this.props.message}</div>
            <ThemeButton theme={this.props.theme} label={"ok"}/>
        </div>);
    }
}


ReactDOM.render(<div>
    <ThemeBorderBackground theme={"light"}>Hello</ThemeBorderBackground>
    <ThemeButton theme="light" label={"CLick Me"}></ThemeButton>
    <ThemeDialouge title="Dialog Title" message="Dialouge Message" theme="light"/>
</div>, document.getElementById("react-no-context"));

