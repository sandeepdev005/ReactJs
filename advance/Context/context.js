const ThemeContext = React.createContext('light');

class ThemeBorderBackground extends React.Component {
    render() {
        return (<div className={'bt bt' + this.context + ' bg' + this.context}>
            {this.props.children}
        </div>);
    }
}

ThemeBorderBackground.contextType = ThemeContext;




class ThemeButton extends React.Component {
    render() {
        return (<div>
            <button className={"button button-" + this.context}>{this.props.label}</button>
        </div>);
    }
}
ThemeButton.contextType = ThemeContext;


class ThemeDialouge extends React.Component {
    render() {
        return (<div>
            <h1 className={"dialog-title"}>{this.props.title}</h1>
            <div className={"dialog-message"}>{this.props.message}</div>
            <ThemeButton theme={this.context} label={"ok"}/>
        </div>);
    }
}

ThemeDialouge.contextType = ThemeContext;


// ReactDOM.render(<div>
//     <ThemeBorderBackground theme={"light"}>Hello</ThemeBorderBackground>
//     <ThemeButton  label={"CLick Me"}></ThemeButton>
//     <ThemeDialouge title="Dialog Title" message="Dialouge Message"/>
// </div>, document.getElementById("react-context"));





// ReactDOM.render(
//     <div>
//         <ThemeContext.Provider value="dark">
//             <ThemeBorderBackground>
//                 Hello!
//             </ThemeBorderBackground>
//            <ThemeButton label='Click me!'>
//            </ThemeButton>

//            <ThemeDialouge title='Dialog title here' message='Dialog message here'>
//            </ThemeDialouge>

//         </ThemeContext.Provider>
//     </div>,
//     document.getElementById('react-context'));





    // ReactDOM.render(
    // <div>
    //     <ThemeBorderBackground>
    //         Hello!
    //     </ThemeBorderBackground>

    //     <ThemeButton label='Click me!'>
    //     </ThemeButton>

    //     <ThemeContext.Provider value="dark">
    //         <ThemeDialouge title='Dialog title here' message='Dialog message here'>
    //         </ThemeDialouge>
    //     </ThemeContext.Provider>
    // </div>,
    // document.getElementById('react-context'));





    ReactDOM.render(
    <div>
        <ThemeContext.Provider value="dark">
            <ThemeBorderBackground>
                Hello!
            </ThemeBorderBackground>
        </ThemeContext.Provider>

        <ThemeButton label='Click me!'>
        </ThemeButton>

        <ThemeDialouge title='Dialog title here' message='Dialog message here'>
        </ThemeDialouge>
    </div>,
    document.getElementById('react-context'));



