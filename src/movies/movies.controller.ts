import { Controller, Get, Param, Post, Delete, Body, Patch, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAll(): Movie[]
    {
        return this.movieService.getAll();
    }

    @Get("/:id")
    getOne(@Param(`id`) mId: string): Movie
    {
        return this.movieService.get(mId);
    }

    @Post("")
    create(@Body() movieData)
    {
        this.movieService.create(movieData);
        return {
            name: `this will return a movie, the name is: ${ movieData["id"] }`,
        };
    }

    @Delete("/:id")
    remove(@Param(`id`) mId: string): string
    {
        return this.movieService.delete(mId);
    }

    @Patch("/:id")
    update(@Param(`id`) mId: string, @Body() bodyData): JSON
    {
        return {
            id: mId,
            ...bodyData
        };
    }

}
