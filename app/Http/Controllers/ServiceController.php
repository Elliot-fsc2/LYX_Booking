<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return inertia('Services/Index', [
            'hairServices' => $services
        ]);
    }

    public function show($id)
    {
        $service = Service::findOrFail($id);

        return inertia('Services/ServiceDetails', [
            'service' => $service
        ]);
    }
}
