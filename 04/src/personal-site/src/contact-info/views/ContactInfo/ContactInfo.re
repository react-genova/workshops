[%bs.raw {|require("./ContactInfo.css")|}];

let component = ReasonReact.statelessComponent("ComtactInfo");

let make = (_children) => {
    ...component,
    render: (_self) =>
        <div className="contact-info">
            <ContactElement className="contact-info-first" value="Contact me" />
            <ContactElement className="contact-info-second" value="andrea.briozzo@gmail.com" />
        </div>
};