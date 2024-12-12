<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // dd('hello');
        if (!Auth::check()) {
            // Redirect to login if not authenticated
            return redirect()->route('login'); // Change this to your login route
        }
        if (Auth::check() && Auth::user()->role === 'admin') {
            return $next($request);
        }

        if (Auth::user()->role === 'customer') {
            return redirect()->route('dashboard')->with('error', 'You do not have admin access.');
        }

        return redirect('/admin')->with('error', 'You do not have admin access.');
    }
}
