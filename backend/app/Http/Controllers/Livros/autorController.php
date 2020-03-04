<?php

namespace App\Http\Controllers\Livros;

use App\Http\Controllers\Controller;
use App\Models\livros\Autor\Autores;
use  App\Http\Requests\autorRequest;


class autorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['list_of' => 'autores', "result" => Autores::all()], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\autorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(autorRequest $request)
    {
        Autores::create($request->all());
        return response()->json(['message' => 'Autor criado com sucesso', "result" => Autores::all()], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\autorRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(autorRequest $request, $id)
    {
        if($autor = Autores::find($id)){

            $autor ->nome = $request->nome;
            $autor->save();
            return response()->json(['message' => 'Autor actualizado com sucesso', "result" => Autores::all()], 200);
        }else
            return response()->json(['message' => 'Autor actualizado com sucesso'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\livros\Autor\Autores  $autores
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Autores::where('id',$id)->delete())
            return response()->json(['message' => 'Autor deletado com sucesso ', "result" => Autores::all()], 200);
        else
            return response()->json(['message' => 'Autor não deletado com sucesso '], 200);
    }
}
