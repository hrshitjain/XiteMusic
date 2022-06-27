import React from 'react';
import { getVideoLabels } from '../../../app/services/APIService';

const videoLabels = {
    "genres": [
      { "id": 5, "name": "Pop" }
    ],
    "videos": [
      {
        "id": 501437,
        "artist": "Pants Velour",
        "title": "All In",
        "release_year": 2014,
        "genre_id": 14,
        "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
      }]
  };

describe('test ApiService', () =>{ 
    it('test getVideoLabels', async() =>
    {
        fetch = jest.fn(()=> Promise.resolve({
            json: () => Promise.resolve(videoLabels)
        }))
        let apiResponse = await getVideoLabels();
        expect(apiResponse).toEqual(videoLabels);
    })
});