@extends('layouts.page')

@section('page-content')

<div class="container login-wrapper">

  {{ Form::open(array('url'=>'/login', 'method'=>'post', 'class'=>'form col-md-4 col-md-offset-4')) }}
    <h2 class="form-signin-heading">Please sign in</h2>
    <div class="form-group">
    	<input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus>
	</div>
    <div class="form-group">
    	<input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  {{ Form::token() . Form::close() }}

</div> <!-- /container -->

@endsection