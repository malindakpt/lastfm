import { useTopAlbumsQuery } from '../../../services/apiSlice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';
import { CustomLink } from '../../styled/CustomLink';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}
const ArtistAlbums: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const { mbid } = useParams();

  useEffect(() => {
    onQueryParamChange({ mbid });
  }, []);

  return (
    <FluidGrid>
      {data?.map((ele: any) => (
        <CustomLink
          key={ele.url}
          to={`/albumInfo/${ele.artist.name}/${ele.name}`}
        >
          <ArtistCard
            title={ele.name}
            image={ele.image[2]['#text']}
            url={ele.url}
            description={`listeners: ${ele.listeners}`}
          />
        </CustomLink>
      ))}
    </FluidGrid>
  );
};

export default withScroll(ArtistAlbums, useTopAlbumsQuery);
