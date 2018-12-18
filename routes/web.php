<?php



/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/{any}', function () {
    return view('post');
})->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('social/auth/redirect/facebook', 'FacebookController@redirectToProvider')->name('socialite');
Route::get('social/auth/facebook', 'FacebookController@handleProviderCallback');
Route::post('authenticate', 'FacebookController@authenticateUser');
