<?php

namespace App\Http\Controllers\Livros;

use App\Http\Controllers\Controller;
use App\Models\livros\editora\editoras;
use  App\Http\Requests\editoraRequest;


class editoraController extends Controller
{
   /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['list_of' => 'editoras', "result" => editoras::all()], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param   App\Http\Requests\editoraRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(editoraRequest $request)
    {
        editoras::create($request->all());
        return response()->json(['message' => 'Editora criada com sucesso' , "result" => editoras::all()], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\livros\editora\editoras  $editoras
     * @return \Illuminate\Http\Response
     */
    public function update(editoraRequest $request, $id)
    {
        if($editoras = editoras::find($id)){

            $editoras ->nome = $request->nome;
            $editoras->save();
            return response()->json(['message' => 'Editoras actualizada com sucesso' , "result" => editoras::all()], 200);
        }else
            return response()->json(['message' => 'Editoras actualizada com sucesso'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\livros\editora\editoras  $editoras
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(editoras::where('id',$id)->delete())
            return response()->json(['message' => 'Editoras deletada com sucesso ' , "result" => editoras::all()], 200);
        else
            return response()->json(['message' => 'Editoras não deletada com sucesso '], 200);
    }
}
