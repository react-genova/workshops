[%bs.raw {|require("./ContactInfo.css")|}];

let component = ReasonReact.statelessComponent("ComtactInfo");

let make = (_children) => {
    ...component,
    render: (_self) =>
        <div className="contact-info">
            <ContactFullname name="Andrea" surname="Briozzo" />
            <ContactEmail email="andrea.briozzo@gmail.com" />
        </div>
};