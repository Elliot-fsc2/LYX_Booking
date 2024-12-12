<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Middleware\Customer\CustomerMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/test', function () {
    return Inertia::render('Test/Test');
})->name('test');

Route::middleware('guest')->group(function () {
    Route::inertia('/', 'Welcome');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', CustomerMiddleware::class])->group(function () {
    Route::resource('services', ServiceController::class);
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::get('/services/{id}', [ServiceController::class, 'show'])->name('service.show');
    Route::post('/services/book', [BookingController::class, 'store'])->name('booking.store');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';