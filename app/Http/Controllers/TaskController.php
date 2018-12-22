<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $collection = collect([['id' => 1, 'title' => 'CMS'],['id' => 2, 'title' => 'React']]);
        return response()->json($collection);
    }
}
