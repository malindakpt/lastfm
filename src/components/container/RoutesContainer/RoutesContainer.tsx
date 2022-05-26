import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import ArtistAlbums from '../ArtistAlbums/ArtistAlbums';
import ArtistSearch from '../ArtistSearch/ArtistSearch';
import ResponsiveAppBar from '../../presentational/AppBar/AppBar';

export const RoutesContainer = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <div>
        <Routes>
          <Route path="albumInfo/:artist/:album" element={<AlbumDetails />} />
          <Route path="artistAlbums/:mbid" element={<ArtistAlbums />} />
          <Route path="/" element={<ArtistSearch />} />
        </Routes>
      </div>
    </Router>
  );
};
