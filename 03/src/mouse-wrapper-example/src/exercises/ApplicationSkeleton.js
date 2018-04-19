import React, { Component } from "react";

const themes = [
    { color:'yellow', header:'#2222C0', menu:'#2222A0', content:'#222280', footer:'#222260' },
    { color:'white', header:'#C02222', menu:'#A02222', content:'#802222', footer:'#602222' },
];

const ThemeContext = React.createContext(themes[0]);

const s = {display: 'flex', alignItems:'center', justifyContent: 'center'};
const ApplicationLayout = ({renderHeader, renderMenu, renderContent, renderFooter, theme:{color, menu, header, content, footer}=themes[0]}) => (
    <div style={{display: 'flex', flexDirection:'column', width:'100%', height:'100%', color}}>
        <div style={{...s, width:'100%', height:'50px', backgroundColor:header}}>
        {renderHeader()}
        </div>
        <div style={{display: 'flex', flex: '1', flexDirection:'row'}}>
            <div style={{...s, width:'50px', height:'100%', backgroundColor:menu}}>
            {renderMenu()}
            </div>
            <div style={{...s, flex: '1', backgroundColor:content}}>
            {renderContent()}
            </div>
        </div>
        <div style={{...s, width:'100%', height:'50px', backgroundColor:footer}}>
        {renderFooter()}
        </div>
    </div>
);

const Application = ({onChangeTheme}) => (
    <ThemeContext.Consumer>
    {theme => (
        <ApplicationLayout 
            theme={theme}
            renderHeader={() => <span>HEADER</span>}
            renderMenu={() => <span>MENU</span>}
            renderContent={() => <button onClick={onChangeTheme}>Change theme</button>}
            renderFooter={() => <span>FOOTER</span>}
        />
    )}
    </ThemeContext.Consumer>
);

class Main extends Component {
    state = { selectedTheme: 0 };
    onChangeTheme = () => this.setState({ selectedTheme: (this.state.selectedTheme+1)%2 });
    render() {
        return (
            <ThemeContext.Provider value={themes[this.state.selectedTheme]}>
                <Application onChangeTheme={this.onChangeTheme} />
            </ThemeContext.Provider>
        );
    }
}

export default Main;