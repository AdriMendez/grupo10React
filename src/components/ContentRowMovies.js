
import React, {Component} from 'react';
import SmallCard from './SmallCard';

class ContentRowMovies extends Component{
    
    constructor() {
        super();
        this.state ={totales: []};
    }

    componentDidMount() {
        console.log('se montó!');

        let totalizadores=[];
      
        fetch('http://localhost:3003/api/products')
          .then(response => {
            console.log('primer then.');
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            
                let prodsInDB = {
                title: 'Productos',
                color: 'primary', 
                cuantity: data.total,
                icon: 'fa-clipboard-list'
            }

            totalizadores.push(prodsInDB);


           fetch('http://localhost:3003/api/users')
          .then(response => {
           
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            console.log('segundo then user!');
                let usersInDB = {
                title: 'Usuarios',
                color: 'success', 
                cuantity: data.total,
                icon: 'fa-user-check'
            }

            totalizadores.push(usersInDB);

            fetch('http://localhost:3003/api/users')
          .then(response => {
           
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
           
                let categoriesInDB = {
                title: 'Generos',
                color: 'warning', 
                cuantity: data.total,
                icon: 'fa-award'
            }

            totalizadores.push(categoriesInDB);

            this.setState( {totales: totalizadores})


          })
          .catch(err => {
            console.log('Error en api categories: ' + err);
          });



          })
          .catch(err => {
            console.log('Error en api users: ' + err);
          });



          })
          .catch(err => {
            console.log('Error en api products: ' + err);
          });
      }

    render() {
        return (
    
            <div className="row">

                {this.state.totales.map( (obj, i) => {
    
                    return <SmallCard {...obj} key={i}/>
                
                })}
    
            </div>
        )
    }

    
}

export default ContentRowMovies;