<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Service;
use App\Models\User;
use Auth;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia('Admin/Auth');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function dashboard()
    {
        $totalservices = Service::count();
        $totalusers = User::where('role', 'customer')->count();
        $totalbookings = Booking::count();
        $totalearnings = Booking::sum('amount');

        return inertia('Admin/Dashboard', [
            'totalservices' => $totalservices
            ,
            'totalusers' => $totalusers
            ,
            'totalbookings' => $totalbookings
            ,
            'totalearnings' => $totalearnings
        ]);
    }

    public function users()
    {
        $users = User::select(
            'id',
            DB::raw("CONCAT(first_name, ' ', last_name) AS name"), // Concatenate first_name and last_name
            'email',
            'role',
            'contact_number',
            'is_blocked' // Get is_blocked column
        )->get()->map(function ($user) {
            // Map is_blocked to a more user-friendly status
            $user->status = $user->is_blocked ? 'Deactivated' : 'Active';
            return $user;
        });

        // Return the view with Inertia
        return inertia('Admin/Users', [
            'users' => $users,
        ]);
    }


    public function toggleStatus($id)
    {
        $user = User::findOrFail($id);
        // Toggle status: 0 = Active, 1 = Blocked
        $user->status = $user->status === 0 ? 1 : 0;
        $user->save();

        return redirect()->route('admin.users.index')->with('success', 'User  status updated successfully.');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            // Check if the user is an admin
            if (Auth::user()->role !== 'admin') {
                Auth::logout(); // Log out if not an admin
                return back()->withErrors(['error' => 'You do not have admin access.']);
            }
            // dd(Auth::user());

            // return Inertia::render('Admin/Dashboard');
        }

        return Inertia::render('Admin/Auth', [
            'errors' => ['error' => 'Invalid credentials']
        ]);

    }

    public function boookings()
    {
        return Inertia::render('Admin/Bookings');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function logout(Request $request)
    {
        // Log out the authenticated user
        Auth::logout();

        // Invalidate the session
        $request->session()->invalidate();

        // Regenerate the CSRF token
        $request->session()->regenerateToken();

        // Redirect to the login page or any other page
        return redirect()->route('login')->with('success', 'You have been logged out successfully.');
    }
}
