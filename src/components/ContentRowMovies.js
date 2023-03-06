
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
                title: 'Total de Productos',
                color: 'primary', 
                cuantity: data.meta.total,
                icon: 'fa-compact-disc'
            }

            totalizadores.push(prodsInDB);


           fetch('http://localhost:3003/api/users')
          .then(response => {
           
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            console.log('segundo then user!');
                let usersInDB = {
                title: 'Total de Usuarios',
                color: 'success', 
                cuantity: data.meta.total,
                icon: 'fa-user-check'
            }

            totalizadores.push(usersInDB);

            fetch('http://localhost:3003/api/users')
          .then(response => {
           
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
           
                let categoriesInDB = {
                title: 'Total de Géneros',
                color: 'warning', 
                cuantity: data.meta.total,
                icon: 'fa-music'
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