@include('partials.head')
@include('layouts.components.header')

<div class="wrapper">
	@yield('page-content')
</div>

@include('layouts.components.footer')
@include('partials.tail')
