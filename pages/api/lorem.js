
export default function handler(req, res) {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(function (response){
            
        
        res.render('../pages/index',{todos: response.data});
        })
      ;
  }