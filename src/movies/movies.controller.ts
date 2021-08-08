import { Controller, Get, Param, Post, Delete, Body, Patch, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(): string
    {
        return "All";
    }

    @Get("search")
    search(@Query('year') query: string){
        return `searching: after year ${query}`;
    }


    @Get("/:id")
    getOne(@Param(`id`) mId: string): string
    {
        return `only One: ${mId}`;
    }

    @Post("")
    create(@Body() movieData: JSON)
    {
        return {
            name: `this will return a movie, the name is: ${ movieData["name"] }`,
        };
    }

    @Delete("/:id")
    remove(@Param(`id`) mId: string): string
    {
        return `delete a movie: ${mId}`;
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
