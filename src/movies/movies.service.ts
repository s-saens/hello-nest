import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService 
{
    movies: Movie[] = [];

    getAll(): Movie[]
    {
        return this.movies;
    }

    get(id: string): Movie
    {
        return this.movies.find(movie => movie.id === id);
    }

    delete(id: string): string
    {
        this.movies = this.movies.filter(movie => movie.id !== id);
        return `deleted a movie: #${id}`;
    }

    create(movie): void
    {
        this.movies.push
        (
            {
                id: this.movies.length + 1,
                ...movie
            }
        )
    }


}
