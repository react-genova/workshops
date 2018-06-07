[%bs.raw {|require("./PageWelcome.css")|}];

let component = ReasonReact.statelessComponent("PageWelcome");

let make = (_children) => {
    ...component,
    render: (_self) => 
        <Page header="Andrea Briozzo" className="page-welcome">
            <div className="page-welcome-content">
                <div className="page-welcome-details">{ReasonReact.string("a proud italian")}</div>
                <div className="page-welcome-details">{ReasonReact.string("a developer")}</div>
                <div className="page-welcome-details">{ReasonReact.string("a student")}</div>
                <div className="page-welcome-details">{ReasonReact.string("a mentor")}</div>
            </div>
        </Page>
};