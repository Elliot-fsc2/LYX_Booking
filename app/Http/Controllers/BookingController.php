<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        // dd($request);
        // Get the authenticated user ID
        $user = Auth::id();

        // Validate the request
        $booking = $request->validate([
            'service' => 'required',
            'date' => 'required|date',
            'time' => 'required', // Temporarily remove the time format validation
            'amount' => 'required',
            'branch' => 'required',
        ]);

        try {
            $isoTime = $request->input('time'); // Ensure this is in a valid format, e.g., '12:00 PM'

            // Create a DateTime object from the input time in Philippine timezone
            $dateTime = new DateTime($isoTime, new DateTimeZone('Asia/Manila')); // Set to Philippine timezone

            // Convert to UTC for storage
            $dateTime->setTimezone(new DateTimeZone('UTC')); // Convert to UTC

            // Format the date and time for storage
            $bookingDate = $dateTime->format('Y-m-d'); // Store date in 'Y-m-d' format


            $dateTime = Carbon::parse($booking['time']);

            // Optionally, convert to a specific timezone (e.g., Asia/Manila)
            // $dateTime->setTimezone('Asia/Manila');

            // Format the time to 12-hour format with AM/PM
            $formattedTime = $dateTime->format('h:i A'); // e.g., "01:00 AM"

            // Create the booking record
            Booking::create([
                'user_id' => $user,
                'service_id' => $booking['service'],
                'branch' => $booking['branch'],
                'booking_date' => $bookingDate,
                'start_time' => $booking['time'],
                'amount' => $booking['amount'],
                'status' => 'pending',
            ]);

            dd('success', $booking);
            return back()->with('success', 'Booking Success');
        } catch (\Exception $e) {
            dd($e->getMessage(), $booking);
            return back()->with('error', $e->getMessage());
        }
    }
}
