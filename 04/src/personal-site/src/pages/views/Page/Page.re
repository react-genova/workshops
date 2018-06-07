[%bs.raw {|require("./Page.css")|}];

let component = ReasonReact.statelessComponent("Page");

let make = (~header: string, ~className: string, [| theonlychild |]) => {
    ...component,
    render: (_self) => 
        <div className={"page-main " ++ className}>
            <div className="page-header">
                <div className="page-header-text">{ReasonReact.string(header)}</div>
                <div className="page-header-contact"><ContactInfo /></div>
            </div>
            <div className="page-body">
            {theonlychild}
            </div>
        </div>
};