const heading = React.createElement("h2", {}, "Sup from react"); // from "https://unpkg.com/react@18/umd/react.development.js"
const root = ReactDOM.createRoot(document.getElementById('root')); // from "https://unpkg.com/react-dom@18/umd/react-dom.development.js"
root.render(heading);


const parent = React.createElement("div", {id: 'Parent'},
                    React.createElement("div", {id: 'Child'},
                        [React.createElement("h2", {}, "Nested Heading1"),React.createElement("h2", {}, "Nested Heading2")]
                    )
)


const combined = React.createElement('div',{},heading,parent);

root.render(combined);