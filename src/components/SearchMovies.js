import React, { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchProducts(){
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState('comedy');

	const inputTag = useRef();

	// Credenciales de API
	const apiKey = 'e24ea09d';
	
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		//const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

		if (apiKey !== '') {
			fetch("api/products")
				.then(response => response.json())
				.then(data => {
					if (!data.Error) {
						setProducts(data.Search);
					} else {
						setProducts([]);
					}
				})
				.catch(error => console.log(error))
		}
	}, [keyword])

	const searchProducts = async e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		inputTag.current.value = '';
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchProducts}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={inputTag} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Albums para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.Poster !== 'N/A' ? product.Poster : noPoster}
														alt={product.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron albumes</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchProducts;
