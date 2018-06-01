[%bs.raw {|require("./Page.css")|}];

let component = ReasonReact.statelessComponent("Page");

let make = (~className: string, children: ReasonReact.reactElement) => {
    ...component,
    render: (_self) => 
        <div className={"page-main " ++ className}>
        {children}
        </div>
};