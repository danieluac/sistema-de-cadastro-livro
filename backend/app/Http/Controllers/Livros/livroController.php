<?php

namespace App\Http\Controllers\Livros;

use App\Http\Controllers\Controller;
use App\Models\Livros\livros;
use  App\Http\Requests\livroRequest;
use App\Models\Livros\Categoria\categorias;
use App\Models\Livros\Editora\editoras;
use App\Models\Livros\Autor\autores;

class livroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['list_of' => 'livros', "result" => livros::all()], 200);
    }
    public function totalCount (){
        return response()->json(['list_of' => 'categorias', "result" => 
        ["livro" => livros::all()->count(),
        "categoria" => categorias::all()->count(),
        "editora" => editoras::all()->count(),
        "autor" => autores::all()->count()]
    ], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(livroRequest $request)
    {
        livros::create($request->all());
        return response()->json(['message' => 'livro criado com sucesso', "result" => livros::all()], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Livros\livros  $livros
     * @return \Illuminate\Http\Response
     */
    public function update(livroRequest $request, $id)
    {
        if($livros = livros::find($id)){

            $livros ->titulo = $request->titulo;
            $livros ->isbn = $request->isbn;
            $livros ->edicao = $request->edicao;
            $livros ->anolancamento = $request->anolancamento;
            $livros ->quantidade = $request->quantidade;
            $livros ->categoria = $request->categoria;
            $livros ->editora = $request->editora;
            $livros ->autor = $request->autor;
            $livros->save();
            return response()->json(['message' => 'livro actualizado com sucesso', "result" => livros::all()], 200);
        }else
            return response()->json(['message' => 'livro nao actualizado com sucesso'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Livros\livros  $livros
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(livros::where('id',$id)->delete())
            return response()->json(['message' => 'Livro deletado com sucesso ', "result" => livros::all()], 200);
        else
            return response()->json(['message' => 'Livro não deletado com sucesso '], 200);
    }
    public function destroyBy($field, $value)
    {
        if(livros::where($field,$value)->delete())
            return true;
        else
            return  false;
    }
}
