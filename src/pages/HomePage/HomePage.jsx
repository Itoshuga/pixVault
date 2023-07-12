import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import TagBox from '../../components/TagBox/TagBox';
import CollectionContainer from '../../components/CollectionContainer/CollectionContainer';
import GalleryBanner from '../../components/GalleryBanner/GalleryBanner';

import logo from '../../assets/react.svg';

const HomePage = () => {
  return (
      <>
        <section id="hero">
            <h4>Galerie d'Image</h4>
            <h2>Publication et</h2>
            <h1>Partage d'Image</h1>
            <p>PixVault vous permet de publier des images dans des collections.</p>
            <Link to="/">En Savoir Plus</Link>
        </section>

        <section id="gallery" className="section-p1">
          <h2>Galerie</h2>
          <p>Les meilleures collections d'image mise en ligne</p>
          <section id="tag">
            <TagBox 
              title="Anime"/>
            <TagBox 
              title="Artist CG"/>
            <TagBox 
              title="Game CG"/>
            <TagBox 
              title="Manga"/>
            <TagBox 
              title="Image Set"/>
            <TagBox 
              title="Autre"/>
          </section>
          <div className="collection-container">
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/sample/c8/f3/__large_spotted_genet_kemono_friends_and_1_more_drawn_by_aburaeoyaji__sample-c8f3de5c197618eac2b680a30fee1914.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
          </div>
        </section>
        <GalleryBanner/>
        <section id="gallery" className="section-p1">
          <h2>Nouveauté</h2>
          <p>Les dernières collections d'image mise en ligne</p>
          <div className="collection-container">
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
            <CollectionContainer image="https://cdn.donmai.us/original/8f/9c/__roon_azur_lane_drawn_by_alisa_11749711__8f9ce5d3db1579679376a37a533659c2.jpg" artistName="neocoill" collectionName="Sweet Dream"/>
          </div>
        </section>
      </>
  );
};

export default HomePage;