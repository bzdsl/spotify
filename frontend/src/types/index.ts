export interface Song {
  _id: string;
  title: string;
  artist: string;
  albumId: string | null;
  imageUrl: string;
  audioUrl: string;
  duration: number; // duration in seconds
  createdAt: string;
  updatedAt: Date;
}

export interface Album {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseYear: number; // ISO date string
  songs: Song[];
}

export interface User {
  _id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface Stats {
  totalSongs: number;
  totalAlbums: number;
  totalUsers: number;
  totalArtists: number;
}
