<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        // $hairServices = Service::where('category_id', 1)->get();
        // dd($services);
        return inertia('Services/Index', [
            'hairServices' => $services
        ]);
    }
}
