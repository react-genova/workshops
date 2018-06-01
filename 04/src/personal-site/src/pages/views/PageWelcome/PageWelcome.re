[%bs.raw {|require("./PageWelcome.css")|}];

let component = ReasonReact.statelessComponent("PageWelcome");

let make = (_children) => {
    ...component,
    render: (_self) => 
        <Page className="page-welcome">
            ...(<ContactInfo />)
        </Page>
};