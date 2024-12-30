<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class SampleController extends Controller
{
    /**
     * Display the sample page.
     *
     * @return \Inertia\Response
     */
    public function sample(): Response
    {
        return Inertia::render('SamplePage', [
            'message' => 'Hello, Inertia.js!',
        ]);
    }
}
