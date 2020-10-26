import { expect } from "chai";

type PlaylistSummary = { name: string; owner: string };

function extractAllPlaylists(data: SpotifyData): PlaylistSummary[] {
  return getPlaylist(data.data.user.playlists);
}

function getPlaylist(playlists: Playlist[]): PlaylistSummary[] {
  const summary: PlaylistSummary[] = [];
  for (let playlist of playlists) {
    summary.push({
      name: playlist.name,
      owner: playlist.owner.display_name,
    });

    if (playlist.owner.playlists) {
      const summary2 = getPlaylist(playlist.owner.playlists);
      for (const item of summary2) summary.push(item);
    }
  }
  return Array.from(summary);
}

describe("Exercise 15 - Recursion", () => {
  it("gets all unique playlists and their owner's display name", () => {
    expect(extractAllPlaylists(spotify)).to.eql([
      {
        name: "Home Listening - playlist by GoGo Penguin",
        owner: "GoGo Penguin",
      },
      {
        name: "Blue Note 20",
        owner: "GoGo Penguin",
      },
      {
        name: "GoGo Penguin Selected Works",
        owner: "GoGo Penguin",
      },
      {
        name: "GoGo Penguin Complete Collection",
        owner: "GoGo Penguin",
      },
      {
        name: "Kölsch Playlist",
        owner: "Kölsch",
      },
      {
        name: "Kölsch Singles",
        owner: "Kölsch",
      },
      {
        name: "Kölsch Remixes",
        owner: "Kölsch",
      },
      {
        name: "real good",
        owner: "Tom Misch",
      },
      {
        name: "SOUL & DISCO selected by MCDE",
        owner: "Motor City Drum Ensemble",
      },
      {
        name: "HOUSE selected by MCDE",
        owner: "Motor City Drum Ensemble",
      },
      {
        name: "MCDE - THE REMIXES",
        owner: "Motor City Drum Ensemble",
      },
      {
        name: "JAZZ selected by MCDE",
        owner: "Motor City Drum Ensemble",
      },
    ]);
  });
});

type Playlist = {
  name: string;
  owner: {
    id: string;
    display_name: string;
    playlists?: Playlist[];
  };
};

type SpotifyData = {
  data: {
    user: {
      display_name: string;
      playlists: Playlist[];
    };
  };
};

// https://spotify-api-graphql-console.herokuapp.com/
const spotify: SpotifyData = {
  data: {
    user: {
      display_name: "Nick White",
      playlists: [
        {
          name: "Home Listening - playlist by GoGo Penguin",
          owner: {
            id: "gogopenguinofficial",
            display_name: "GoGo Penguin",
            playlists: [
              {
                name: "Blue Note 20",
                owner: {
                  id: "gogopenguinofficial",
                  display_name: "GoGo Penguin",
                },
              },
              {
                name: "GoGo Penguin Selected Works",
                owner: {
                  id: "gogopenguinofficial",
                  display_name: "GoGo Penguin",
                },
              },
              {
                name: "GoGo Penguin Complete Collection",
                owner: {
                  id: "gogopenguinofficial",
                  display_name: "GoGo Penguin",
                },
              },
            ],
          },
        },
        {
          name: "Kölsch Playlist",
          owner: {
            id: "jetsetter_82",
            display_name: "Kölsch",
            playlists: [
              {
                name: "Kölsch Singles",
                owner: {
                  id: "jetsetter_82",
                  display_name: "Kölsch",
                },
              },
              {
                name: "Kölsch Remixes",
                owner: {
                  id: "jetsetter_82",
                  display_name: "Kölsch",
                },
              },
            ],
          },
        },
        {
          name: "real good",
          owner: {
            id: "tom_misch",
            display_name: "Tom Misch",
            playlists: [
              {
                name: "SOUL & DISCO selected by MCDE",
                owner: {
                  id: "motorcitydrumensemble",
                  display_name: "Motor City Drum Ensemble",
                  playlists: [
                    {
                      name: "HOUSE selected by MCDE",
                      owner: {
                        id: "motorcitydrumensemble",
                        display_name: "Motor City Drum Ensemble",
                      },
                    },
                    {
                      name: "MCDE - THE REMIXES",
                      owner: {
                        id: "motorcitydrumensemble",
                        display_name: "Motor City Drum Ensemble",
                      },
                    },
                    {
                      name: "JAZZ selected by MCDE",
                      owner: {
                        id: "motorcitydrumensemble",
                        display_name: "Motor City Drum Ensemble",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};
