<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::group(['middleware' => 'api', 'prefix' => 'v1/auth'], function ($router) {

    Route::POST('register', 'AuthController@register');
    Route::POST('login', 'AuthController@login');
    Route::POST('refresh', 'AuthController@refresh');
    Route::GET('me', 'AuthController@me');
    Route::GET('logout', 'AuthController@logout');
});

Route::group(['middleware' => ['auth:api'], 'prefix' => 'v1/livro'], function ($router) {

    Route::GET('categoria', 'Livros\categoriaController@index');
    Route::POST('categoria', 'Livros\categoriaController@store');
    Route::PUT('categoria/{id}', 'Livros\categoriaController@update');
    Route::DELETE('categoria/{id}', 'Livros\categoriaController@destroy');
    
    Route::GET('autor', 'Livros\autorController@index');
    Route::POST('autor', 'Livros\autorController@store');
    Route::PUT('autor/{id}', 'Livros\autorController@update');
    Route::DELETE('autor/{id}', 'Livros\autorController@destroy');
    
    Route::GET('editora', 'Livros\editoraController@index');
    Route::POST('editora', 'Livros\editoraController@store');
    Route::PUT('editora/{id}', 'Livros\editoraController@update');
    Route::DELETE('editora/{id}', 'Livros\editoraController@destroy');
    
    Route::GET('livro/total-estatistica', 'Livros\livroController@totalCount');
    Route::GET('livro', 'Livros\livroController@index');
    Route::POST('livro', 'Livros\livroController@store');
    Route::PUT('livro/{id}', 'Livros\livroController@update');
    Route::DELETE('livro/{id}', 'Livros\livroController@destroy');
});