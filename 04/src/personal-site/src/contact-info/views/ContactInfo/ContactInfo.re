[%bs.raw {|require("./ContactInfo.css")|}];

let component = ReasonReact.statelessComponent("ComtactInfo");

let make = (_children) => {
    ...component,
    render: (_self) =>
        <div className="contact-info">
            <ContactFullname className="contact-info-first" name="Andrea" surname="Briozzo" />
            <ContactEmail className="contact-info-second" email="andrea.briozzo@gmail.com" />
        </div>
};