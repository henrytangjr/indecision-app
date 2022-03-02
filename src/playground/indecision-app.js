console.log("App.js is running!");

const header = {
  title: "Indecision App v2",
};

const app = {
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const footer = {
  createdBy: "Henry",
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const onMakeDecision = (e) => {
  const randomNum = Math.floor(Math.random() * app.options.length);

  const option = app.options[randomNum];
  alert(option);
};

const onRemoveAll = (e) => {
  app.options = [];
  renderApp();
};

const headerRoot = document.getElementById("header");
const appRoot = document.getElementById("app");
const footerRoot = document.getElementById("footer");

const numbers = [55, 101, 1000];

const renderHeader = () => {
  const template = (
    <div>
      <h1>{header.title}</h1>
    </div>
  );
  ReactDOM.render(template, headerRoot);
};

const renderApp = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>Option: {option}</li>;
        })}
      </ol>
      <form>
        <input type="text" name="option" />
        <button onClick={onFormSubmit}>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const renderFooter = () => {
  const template = (
    <div>
      <p>Made by: {footer.createdBy}</p>
    </div>
  );
  ReactDOM.render(template, footerRoot);
};

renderHeader();
renderApp();
renderFooter();

// const getLocation = (location) => {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const user = {
//     userName: 'Mike',
//     userAge: 18,
//     userLocation: 'Singapore'
// }

// const userName = 'Mike'
// const userAge = 28
// const userLocation = 'Singapore'

// const templateTwo = (
//     <div>
//         <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
//         {(user.userAge && user.userAge >= 18) && <p>Age: {user.userAge}</p>}
//         {getLocation(user.userLocation)}
//     </div>
// );
