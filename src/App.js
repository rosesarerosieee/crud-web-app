import CreateUser from "./components/create";
import ReadUsers from "./components/read";
import UpdateUser from "./components/update";
import DeleteUser from "./components/delete";

function App() {
  return (
    <div className="App">
      <CreateUser />
      <ReadUsers />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
