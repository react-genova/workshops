[%bs.raw {|require("./PageSoftSkills.css")|}];

let component = ReasonReact.statelessComponent("PageSoftSkills");

let make = (_children) => {
    ...component,
    render: (_self) => 
        <Page header="Soft Skills" className="page-soft-skills">
            <div style=(
                ReactDOMRe.Style.make(
                    ~flex="1",
                    ~display="flex",
                    ~flexDirection="column",
                    ~justifyContent="space-around",
                    ~alignItems="center",
                    ~fontSize="45px",
                    ~fontWeight="bold",
                    ~color="white",
                    ())
                )>
            (ReasonReact.arrayToElement(
                Array.of_list(
                    List.map(
                        (item) => 
                            <span className="page-soft-skills-element" style=(
                                ReactDOMRe.Style.make(
                                    ~padding="20px",
                                    ~backgroundColor="rgba(0,0,0,0.5)",
                                    ~transitionProperty="all",
                                    ~transitionDuration="500ms",
                                    ())
                                )
                            >(ReasonReact.string(item))</span>,
                        [ "Communication", "Team working", "Leadership", "Problem solving", "Researcher" ]
                    )
                )
            ))
            </div>
        </Page> 
};


/*
(
          ReasonReact.arrayToElement(Array.of_list(
              List.map((item) => <TodoItem item />, items)
          ))
        )
        */