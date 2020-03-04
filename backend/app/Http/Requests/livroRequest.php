<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class livroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'titulo' => "required",
            'isbn' => "required",
            'edicao' => "required",
            'anolancamento' => "required|integer",
            'quantidade' => "required|integer",
            'categoria' => "required|string",
            'editora' => "required|string",
            'autor' => "required|string",
        ];
    }
}
