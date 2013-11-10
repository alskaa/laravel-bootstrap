@extends('layouts.page')

@section('page-content')

<div class="container admin-menu">
	<h4 class="pull-left">Hello {{ Auth::user()->username }}
		<a href="{{ $base_url }}/logout" class="btn btn-default btn-xs">
		  <span class="glyphicon glyphicon-off"></span>
		</a>
	</h4>
    <ul class="nav nav-pills pull-right">
        <li @if($page_slug=="create")class="active"@endif><a href="{{$base_url}}/project/create">Add project</a></li>
        <li @if($page_slug=="showAll" || $page_slug=="edit")class="active"@endif><a href="{{$base_url}}/project/showAll">Edit project</a></li>
        <li @if($page_slug=="edit-about")class="active"@endif><a href="{{$base_url}}/about/about/edit">Edit About</a></li>
    </ul>
</div>

@yield('admin-content')

@endsection