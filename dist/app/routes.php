<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/* Admin pages
-------------- */
Route::group(array('before' => 'auth'), function()
{

    Route::get('/logout', function()
	{
		Auth::logout();
		return Redirect::to('/login');
	});

});

/* Login page for auth
---------------------- */
Route::get('/login', array('before' => 'guest', function()
{

	$data = array(
		'base_url'  => Config::get('app.url'),
		'page_slug' => 'login',
		'title'     => 'Login'
	);

	return View::make('login', $data);

}));
Route::post('/login', function()
{

    Auth::attempt( array('username' => Input::get('username'), 'password' => Input::get('password')) );

    return Redirect::to('');
    
});


/* Home page
------------ */
Route::get('/','');