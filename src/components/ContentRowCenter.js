import React from 'react';
//import { Fragment } from 'react/cjs/react.production.min';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->
            <LastMovieInDb />*/}

            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <LastMovieInDb />
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;