<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livros', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('titulo',255);
            $table->string('isbn',255);
            $table->string('edicao',10);
            $table->integer('anolancamento');
            $table->integer('quantidade');
            $table->text('foto')->nullable();
            $table->string("categoria");
            $table->string("editora");
            $table->string("autor");

          //  $table->foreign("categoria_id")->references("id")->on("categorias")->onDelete('cascade');
            //$table->foreign('editora_id')->references('id')->on('editoras')->onDelete('cascade');
           // $table->foreign('cargo_id')->references('id')->on('cargos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('livros');
    }
}
