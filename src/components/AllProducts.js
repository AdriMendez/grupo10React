import React, {Component} from 'react';
import ChartRow from './ChartRow';


class AllProducts extends Component{
    constructor (props) {
        super(props)
        this.state = {products: []};
    }
 

    componentDidMount() {
        fetch('http://localhost:3003/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(allProducts => {
        this.setState({ products: allProducts.data }) 
    })

      .catch(error => console.log(error))
    }

    render() {
        return (
            /* <!-- DataTales Example --> */

            <div className="card shadow mb-4">
                <div className="card-body">
                <h3 className='titulo-sidebar'>Todos los productos</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Título</th>
                                    <th>Género</th>
                                    <th>Sello</th>
                                    <th>Año</th>
                                    <th>Precio</th>
                                    <th>Artist</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>Título</th>
                                    <th>Duración</th>
                                    <th>Rating</th>
                                    <th>Género</th>
                                    <th>Premios</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {
                                this.state.products.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
                                })
                                }
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
        )
    }
    
}

export default AllProducts;

