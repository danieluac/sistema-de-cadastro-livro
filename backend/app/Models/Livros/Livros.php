<?php

namespace App\Models\Livros;

use Illuminate\Database\Eloquent\Model;

class Livros extends Model
{
    protected $fillable = [
        'titulo',
        'isbn',
        'edicao',
        'anolancamento',
        'quantidade',
        'categoria',
        'editora',
        'autor'
    ];
}
