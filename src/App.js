import React, {useEffect, useState} from 'react';
import Lists from './Components/Lists';
import Form from './Components/Formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let searchTimeout;


const App =() => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  state = {
      nameList:[
          {name: 'Test',username: 'Testusername',email: 'test@test.com', website: 'www.test.com',phone: '0364748749',street: 'rue Test',city: 'Testland', zipcode: '1322'}
      ]
  };

  //je n'arrive pas a faire appel en bas dans le form pour opouvoir faire passer les donner de Form à addUser pour pouvoir les mettre dans

   addUser = user => {
    let users = [...this.state.nameList, user];
    this.setState({
      nameList: users
    })
  };

  useEffect(() => {
    clearTimeout(searchTimeout);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setItems(res);
          setLoading(false);
        });
  }, []);

  return (
      <>
        {loading ?(
            <p>Loading</p>
        ):(

            <>

              {items.filter(i => i.name.toLowerCase() !== -1).map(item => (
                  <div>
                      <div key={item.id} className="float-left">
                        <h1>Users</h1>
                        <p>Name : {item.name} Username : {item.username} Email : {item.email} Website : {item.webiste} Phone : {item.phone} Street : {item.street} City : {item.city} Zipcode : {item.zipcode}</p>
                        <Lists nameList={this.state.nameList} />
                      </div>
                      <div className="float-right">>
                        <h1>Add New User</h1>
                        <Form addUser={this.addUser} />
                      </div>
                  </div>
              ))}
            </>

        )}
      </>
  );
};


export default App;
