<?php

namespace App\Http\Controllers\Livros;

use App\Http\Controllers\Controller;
use App\Models\Livros\Categoria\categorias;
use  App\Http\Requests\categoriaRequest;
use App\Http\Controllers\Livros\livroController;
class categoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['list_of' => 'categorias', "result" => categorias::all()], 200);
        
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(categoriaRequest $request)
    {
        categorias::create($request->all());
        return response()->json(['message' => 'Categoria criada com sucesso', "result" => categorias::all()], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\livros\categoria\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function update(categoriaRequest $request, $id)
    {
        if($categoria = categorias::find($id)){

            $categoria ->nome = $request->nome;
            $categoria->save();
            return response()->json(['message' => 'Categoria actualizada com sucesso',"result" => categorias::all()], 200);
        }else
            return response()->json(['message' => 'Categoria actualizada com sucesso'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\livros\categoria\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //$livroDelete = (new livroController)->deleteBy("categoria",);
        if(categorias::where('id',$id)->delete())
            return response()->json(['message' => 'Categoria deletada com sucesso ',"result" => categorias::all()], 200);
        else
            return response()->json(['message' => 'Categoria não deletada com sucesso '], 200);
    }
}
